export const replaceCamelWithSpaces = (color) => {
  return color.replace(/\B([A-Z])\B/g, " $1");
};