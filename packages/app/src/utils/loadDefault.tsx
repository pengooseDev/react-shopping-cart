export const loadDefault = async (path: string, name: string) => {
  const module = await import(path);

  return { default: module[name] };
};
