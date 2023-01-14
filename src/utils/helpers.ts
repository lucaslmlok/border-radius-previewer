export const kebabToCamel = (str: string) => {
  return str.replace(/-([a-z])/g, (match, p1) => {
    return p1.toUpperCase();
  });
};
