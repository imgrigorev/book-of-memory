import { FC, lazy } from 'react';

type TKeysMatching<TObject, TTypeName> = {
  [Key in keyof TObject]: TObject[Key] extends TTypeName ? Key : never;
}[keyof TObject];

export const lazyLoadPage = (pageName: TKeysMatching<typeof import('pages'), FC<any>>) =>
  lazy(() =>
    import(`pages/index`).then(module => {
      return {
        default: module[pageName],
      };
    }),
  );
