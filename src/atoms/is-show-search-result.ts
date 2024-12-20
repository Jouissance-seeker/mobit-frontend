import { atom } from 'jotai';

type TAtom = boolean;

export const atomIsShowSearchResult = atom<TAtom>(false);
