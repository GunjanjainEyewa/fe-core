export const hexToRgb = (hex: string, alpha: number = 1): string => {
  const input = hex && hex.replace(/^#/, '');

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(input);
  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})`
    : null;
};

export const capitalizeFirstLetter = (value : string = ''): string => (
  value.charAt(0).toUpperCase() + value.slice(1)
);

export const dummy = () => {};
