export interface Response<T> {
  response: T extends infer U ? U : never;
}
