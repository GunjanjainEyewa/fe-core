/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-destructuring */
/* eslint-env node */
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function removeEmpty(str) {
  return str.split(' ').join('');
}

function pascalCase(str) {
  const pascalStr = str
    .split('-')
    .map(capitalize)
    .join('');
  return removeEmpty(pascalStr);
}

function titleCase(str) {
  const titleStr = str
    .split('-')
    .map(capitalize)
    .join(' ');
  return removeEmpty(titleStr);
}

// handle the exception from Chevrons, where we do not want the word Chevron in the title
function removeChevronFromTitle(str) {
  return str.replace('Chevron ', '');
}

// transform svg string to properly styled jsx
function reactify(svgString) {
  return svgString
    .replace(/<!--.*-->\n/gm, '')
    .replace(/<\/?svg[^>]*>/gm, '')
    .replace(/^\s*\n/gm, '')
    .replace(/\n$/, '')
    .replace(/\t/g, '  ')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/fill-opacity/g, 'fillOpacity')
    .trim();
}

function cleanOldIcons() {
  const allJsFiles = fs
    .readdirSync(path.resolve(__dirname))
    .filter((f) => f.endsWith('.tsx'));
  allJsFiles.forEach((f) => {
    if (
      fs
        .readFileSync(path.resolve(__dirname, f), 'utf8')
        .match(/^\/\/ DESIGN_SYSTEM_GENERATED_ICONS/m)
    ) {
      fs.unlinkSync(path.resolve(__dirname, f));
    }
  });
}

async function generateNewIcons() {
  const iconTemplate = fs.readFileSync(
    path.resolve(__dirname, './template.txt'),
    'utf8',
  );
  const svgs = fs
    .readdirSync(path.resolve(__dirname, './svg'))
    .filter((f) => f.endsWith('.svg'));

  const prettierOptions = (await prettier.resolveConfig(__dirname)) || {};
  const iconExports = [];

  svgs.forEach(async (svgFilename) => {
    const svgFile = svgFilename.split('.')[0];
    const componentName = pascalCase(svgFile);
    iconExports.push(
      `export {default as ${componentName}} from './${svgFile}.tsx';`,
    );

    const svgFileContents = fs.readFileSync(
      path.resolve(__dirname, `./svg/${svgFilename}`),
      'utf8',
    );

    const title = removeChevronFromTitle(titleCase(svgFile));
    const viewboxRegex = svgFileContents.match(/viewBox="([^"]+)"/);
    let viewBox = null;
    if (viewboxRegex && viewboxRegex[1]) {
      viewBox = viewboxRegex[1];
    }

    const result = iconTemplate
      .replace('%%ICON_PATH%%', reactify(svgFileContents))
      .replace(new RegExp('%%ICON_NAME%%', 'g'), componentName)
      .replace(new RegExp('%%SVG_TITLE%%', 'g'), title)
      .replace(
        new RegExp('%%SVG_VIEWBOX%%', 'g'),
        viewBox && viewboxRegex[1] ? `viewBox="${viewBox}"` : '',
      );

    fs.writeFileSync(
      path.resolve(__dirname, `./${svgFile}.tsx`),
      prettier.format(result, { parser: 'flow', ...prettierOptions, singleQuote: true }),
    );
  });

  fs.writeFileSync(
    path.resolve(__dirname, './index.js'),
    `${iconExports.join(
      '\n',
    )}\n`,
  );

  // eslint-disable-next-line no-console
  console.log(`Wrote ${svgs.length} icon(s)`);
}

cleanOldIcons();
generateNewIcons();
