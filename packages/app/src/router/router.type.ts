interface Route {
  PATH: string;
  TITLE: {
    GLOBAL: string;
    NAV: string;
  };
  COMPONENT: () => JSX.Element;
}

export type Routes = Record<string, Route>;
