import { Atom, WritableAtom, atom } from 'jotai';

export abstract class AtomManager<T> {
  public initialState: T;
  protected atom: WritableAtom<T, any, void>;

  constructor(initialState: T) {
    this.initialState = initialState;
    this.atom = atom(this.initialState);
  }

  abstract selectors: {
    [K in keyof Partial<T>]: Atom<T[K]>;
  };

  abstract actions: {
    [key: string]: WritableAtom<T | null, any, void>;
  };
}
