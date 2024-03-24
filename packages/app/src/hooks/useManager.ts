import { Atom, WritableAtom, useAtomValue, useSetAtom } from 'jotai';
import { AtomManager } from '@/Model/manager/atomManager';

const createUseSelector = <T>(atom: Atom<T>) => {
  return () => useAtomValue(atom);
};

const createUseAction = (atom: WritableAtom<any, any, void>) => {
  return () => useSetAtom(atom);
};

export const useManager = <T extends AtomManager<any>>(manager: T) => {
  const selectors = Object.fromEntries(
    Object.entries(manager.selectors).map(([key, atom]) => [
      key,
      createUseSelector(atom)(),
    ])
  ) as {
    [P in keyof T['selectors']]: T['selectors'][P] extends Atom<infer V>
      ? V
      : never;
  };

  const actions = Object.fromEntries(
    Object.entries(manager.actions).map(([key, actionAtom]) => [
      key,
      createUseAction(actionAtom)(),
    ])
  ) as unknown as {
    [P in keyof T['actions']]: T['actions'][P] extends WritableAtom<
      any,
      infer U,
      void
    >
      ? (param: U[0]) => void
      : never;
  };

  return { selectors, actions };
};
