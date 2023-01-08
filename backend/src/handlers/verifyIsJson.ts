const verifyIsJson = (param: string) => {
  try {
    return JSON.parse(param);
  } catch (err: any) {
    return false;
  }
};
export { verifyIsJson };
