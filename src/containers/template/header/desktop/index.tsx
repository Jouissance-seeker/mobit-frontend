import { atomIsShowCategoryList } from '@/atoms/template/header/desktop/is-show-category-list';
import { atomIsShowSearchResult } from '@/atoms/template/header/global/is-show-search-result';
import {
  IconCart,
  IconDiscountSquare,
  IconMagnifier,
  IconUser,
  IconWindow,
} from '@/constants/icons';
import IMAGES from '@/constants/images';
import toggleAtomStateHandler from '@/utils/toggle-atom-state';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import CategoryList from './category-list';
import { useAtom } from 'jotai';

const Desktop: FC = (): JSX.Element => {
  // show and hide search result handler
  const [,setAtomStateIsShowSearchResult] = useAtom(
    atomIsShowSearchResult,
  );

  // show and hide category list handler / detect isShow category list
  const [atomStateIsShowCategoryList, setAtomStateIsShowCategoryList] =
    useAtom<boolean>(atomIsShowCategoryList);

  return (
    <div className="hidden w-full bg-c-gradient-blue py-3 lg:block">
      <div className="container flex w-full items-center justify-between">
        <div className="flex items-center">
          {/* logo */}
          <Link href={'/'} className="ml-6 xl:ml-9">
            <Image
              src={IMAGES.template.header.logoWhite}
              width={80}
              height={80}
              alt="لوگو مبیت"
            />
          </Link>
          <div className="flex gap-3 xl:gap-5">
            {/* category btn, category list */}
            <div
              onMouseEnter={() =>
                toggleAtomStateHandler({
                  type: 'show',
                  setAtomState: setAtomStateIsShowCategoryList,
                })
              }
              onMouseLeave={() =>
                toggleAtomStateHandler({
                  type: 'hide',
                  setAtomState: setAtomStateIsShowCategoryList,
                })
              }
            >
              <div
                className={`relative flex h-5 cursor-pointer items-center gap-2 px-1 text-c-sm font-bold text-white after:absolute after:-bottom-[18px] after:left-0 after:right-0 after:block after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full ${
                  !!atomStateIsShowCategoryList && 'after:w-full'
                }`}
              >
                <IconWindow className={'fill-white'} />
                <p>دسته بندی ها</p>
              </div>
              {/* show category list after hover category btn */}
              <CategoryList />
            </div>
            {/* amazing discount */}
            <Link
              href="/"
              className="relative flex h-5 items-center gap-2 px-1 text-c-sm font-bold text-white after:absolute after:-bottom-[18px] after:left-0 after:right-0 after:block after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full"
            >
              <IconDiscountSquare className="h-[23px] fill-transparent stroke-white" />
              <p>پیشنهاد های شگفت انگیز</p>
            </Link>
          </div>
        </div>
        {/* search field */}
        <div className="w-[350px] xl:w-[400px]">
          <div
            className={`container flex items-center gap-2.5 rounded-xl border-2 border-transparent bg-[#4E51D3] p-[11px] text-white transition-all duration-200 focus-within:border-white`}
          >
            <div className="relative flex w-5 justify-center after:absolute after:-top-1.5 after:left-0 after:right-7 after:h-8 after:w-[1px] after:bg-white">
              <IconMagnifier />
            </div>
            <input
              spellCheck={false}
              placeholder="جستجو در مبیت ..."
              onFocus={() =>
                toggleAtomStateHandler({
                  type: 'show',
                  setAtomState: setAtomStateIsShowSearchResult,
                })
              }
              onBlur={() =>
                toggleAtomStateHandler({
                  type: 'hide',
                  setAtomState: setAtomStateIsShowSearchResult,
                })
              }
              className={`mr-3 w-full text-c-sm placeholder:font-medium placeholder:text-white/95`}
            />
          </div>
        </div>
        {/* login/profile, cart */}
        <div className="flex gap-5 xl:gap-7">
          <Link href="/auth" className="flex cursor-pointer items-center gap-2">
            <IconUser className={'fill-white'} />
            <p className="text-c-sm font-bold text-white">ورود / ثبت نام</p>
          </Link>
          <div className="flex cursor-pointer items-center gap-2">
            <IconCart className="fill-white" />
            <p className="text-c-sm font-bold text-white">سبد خرید</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
