interface Route {
  PATH: string;
  COMPONENT_PATH: string;
  COMPONENT_NAME: string;
}

export type Routes = Record<string, Route>;
