export const getRootPath = (fullPath) => {
  return /\/([^/]*)\/?.*/.exec(fullPath)[1];
};
