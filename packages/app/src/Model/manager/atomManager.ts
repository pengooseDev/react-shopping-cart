import { Atom, WritableAtom, atom } from 'jotai';

export abstract class AtomManager<T> {
  public initialState: T;
  protected atom: WritableAtom<T, any, void>;

  constructor(initialState: T) {
    this.initialState = initialState;
    this.atom = atom(this.initialState);
  }

  // field의 타입을 강제하기보단 원하는 데이터 형태만 반환하는 것이 더 나아보임. 따라서 Atom<T[K]>에서 Atom<any>로 변경
  abstract selectors: {
    [K in keyof Partial<T>]: Atom<any>;
  };

  abstract actions: {
    [key: string]: WritableAtom<T | null, any, void>;
  };
}
