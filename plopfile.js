module.exports = function (plop) {
  plop.setGenerator('test', {
    description: 'Add new package',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'please specify package name',
    }],
    actions: [{
      type: 'addMany',
      destination: 'packages/{{name}}',
      base: 'plop-templates/packages',
      globOptions: {
        dot: true,
      },
      templateFiles: 'plop-templates/packages/**/*',
    }],
  });
};
