export const getHeaderHeight = () => {
  let elementHeight = 'auto';
  if (document) {
    const headerHeight = document.querySelector('.headerWrapper');
    if (headerHeight) {
      elementHeight = `${headerHeight.clientHeight + 1}px`;
    }
  }
  return elementHeight;
};

export const getRowHeight = (key: string) => {
  let elementHeight = 'auto';
  if (document) {
    const headerHeight = document.querySelector(`.row-wrapper-${key}`);
    if (headerHeight) {
      elementHeight = `${headerHeight.clientHeight}px`;
    }
  }
  return elementHeight;
};


export const getMinWidth = (columnsLength: number) => (
  `${columnsLength * 64 + 20}px`
);
