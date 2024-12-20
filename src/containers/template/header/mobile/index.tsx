import {
  IconChevron,
  IconMagnifier,
  IconThreeDots,
  IconUser,
} from '@/constants/icons';
import { atomIsShowSearchResult } from '@/atoms/template/header/global/is-show-search-result';
import { atomIsShowHumbergerMenu } from '@/atoms/template/header/mobile/is-show-humberger-menu';
import IMAGES from '@/constants/images';
import useDetectScrollDirection from '@/hooks/detect-scroll-direction';
import toggleAtomStateHandler from '@/utils/toggle-atom-state';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import HumbergerMenu from './humberger-menu';
import { useAtom } from 'jotai';
import { cn } from '@/utils/cn';

const Mobile: FC = (): JSX.Element => {
  // detect focused search field
  const [isFocusSearchField, setIsFocusSearchField] = useState(false);

  // show and hide search result handler
  const [, setAtomStateIsShowSearchResult] = useAtom(
    atomIsShowSearchResult,
  );
  const showAndHideSearchResultHandler = (args: { type: 'show' | 'hide' }) => {
    setIsFocusSearchField(args.type === 'hide' ? false : true);
    toggleAtomStateHandler({
      type: args.type,
      setAtomState: setAtomStateIsShowSearchResult,
    });
  };

  // show humberger-menu handler
  const [, setAtomStateIsShowHumbergerMenu] = useAtom(
    atomIsShowHumbergerMenu,
  );

  // detect scroll direction for hide search input after scroll to bottom
  const detectedScrollDirection = useDetectScrollDirection();

  return (
    <div className="lg:hidden">
      <HumbergerMenu />
      <div className={'flex flex-col overflow-hidden'}>
        {/* logo, right-side menu btn, profile btn */}
        <div className="bg-c-gradient-blue">
          <div className="container">
            <div className="flex items-center justify-between px-1.5 py-3.5">
              <button
                onClick={() => {
                  toggleAtomStateHandler({
                    type: 'show',
                    setAtomState: setAtomStateIsShowHumbergerMenu,
                  });
                }}
              >
                <IconThreeDots />
              </button>
              <Link href={'/'}>
                <Image
                  src={IMAGES.template.header.logoWhite}
                  width={70}
                  height={70}
                  alt="لوگو مبیت"
                />
              </Link>
              <Link href={'/auth'}>
                <IconUser className={'fill-white'} />
              </Link>
            </div>
          </div>
        </div>
        {/* search filed */}
        <div
          className={
            cn(
              'absolute left-0 right-0 transition-all duration-500',
              {
                'top-[53px]': detectedScrollDirection === 'top',
                '-top-28': detectedScrollDirection === 'bottom',
              }
            )
          }
        >
          <div className="container">
            <div
              className={
                cn(
                  'container relative mb-3.5 flex items-center gap-2.5 rounded-xl border-2 border-transparent p-3 transition-all duration-200 focus-within:border-c-royal-blue',
                  {
                    '-top-10 bg-c-gray-100': isFocusSearchField,
                    'top-0 bg-[#3F41C5]': !isFocusSearchField,
                  }
                )
              }
            >
              <div className="flex w-5 justify-center">
                {isFocusSearchField ? (
                  <button
                    onClick={() =>
                      showAndHideSearchResultHandler({ type: 'hide' })
                    }
                  >
                    <IconChevron className={'h-[15px] fill-c-gray-400'} />
                  </button>
                ) : (
                  <IconMagnifier />
                )}
              </div>
              <input
                onFocus={() => showAndHideSearchResultHandler({ type: 'show' })}
                spellCheck={false}
                placeholder="جستجو در مبیت ..."
                className={
                  cn(
                    'w-full text-c-md placeholder-gray-200',
                    {
                      'placeholder-gray-400': isFocusSearchField,
                      'text-c-gray-200': !isFocusSearchField,
                    }
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
