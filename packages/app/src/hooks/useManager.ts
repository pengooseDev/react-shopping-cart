import { Atom, WritableAtom, useAtomValue, useSetAtom } from 'jotai';
import { AtomManager } from '@/Model/manager/atomManager';

const createUseSelector = <T>(atom: Atom<T>) => {
  return () => useAtomValue(atom);
};

const createUseAction = (atom: WritableAtom<any, any, void>) => {
  return () => useSetAtom(atom);
};

/**
 * @description
 * - atomManager의 selectors에 useAtomValue을 래핑하여 반환합니다.
 * - atomManager의 actions에 useSetAtom을 래핑하여 반환합니다.
 * - 각 Atom의 type을 추론하여 반환합니다.
 *
 * @param manager
 * @returns
 */
export const useManager = <T extends AtomManager<any>>(manager: T) => {
  /**
   * @description
   * - atomManager의 selectors에 useAtomValue을 래핑하여 반환합니다.
   * - 각 Atom의 type을 추론하여 반환합니다.
   */
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

  /**
   * @description
   * - atomManager의 actions에 useSetAtom을 래핑하여 반환합니다.
   * - 각 Atom의 type을 추론하여 반환합니다.
   */
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
