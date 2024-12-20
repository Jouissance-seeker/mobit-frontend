import { atomIsShowSearchResult } from '@/atoms/template/header/global/is-show-search-result';
import { cn } from '@/utils/cn';
import { useAtom } from 'jotai';
import React, { FC } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const SearchResult: FC = (): JSX.Element => {
  // detect is-show search result
  const [atomStateIsShowSearchResult] = useAtom(atomIsShowSearchResult);

  return (
    <section
      className={cn(
        'container fixed left-0 right-0 top-0 h-screen w-full overflow-hidden bg-white transition-opacity duration-300 lg:left-1/2 lg:right-1/2 lg:top-[68.5px] lg:mr-1 lg:z-50 lg:h-auto lg:w-[350px] lg:translate-x-[80px] lg:rounded-b-lg lg:border-x lg:border-b lg:border-gray-100 xl:w-[400px] xl:translate-x-[101px]',
        {
          'visible opacity-100': atomStateIsShowSearchResult,
          'invisible opacity-0': !atomStateIsShowSearchResult,
        }
      )}
    >
      <div className="mt-[75px] h-full lg:mt-0">
        <div className="flex h-[calc(100%_-_87px)] items-center justify-center lg:my-4">
          <ThreeDots width="65" radius="9" color={'#377DFF'} />
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
