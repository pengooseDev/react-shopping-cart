export const Parser = {
  dynamicRoute(path: string, id: number) {
    return path.replace(':id', id.toString());
  },
};
