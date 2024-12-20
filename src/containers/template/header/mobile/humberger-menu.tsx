import { atomIsShowHumbergerMenu } from '@/atoms/is-show-humberger-menu';
import { IconChevron, IconDiscountSquare, IconWindow } from '@/constants/icons';
import IMAGES from '@/constants/images';
import { categoryData } from '@/resources/routes/template/header/category-data';
import { TCategoryItem } from '@/types/template/header/category-item';
import toggleAtomStateHandler from '@/utils/toggle-atom-state';
import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { cn } from '@/utils/cn';

interface IPropsCategoryLevel {
  categoryData: TCategoryItem;
}

const HumbergerMenu: FC = (): JSX.Element => {
  // detect is-show humberger menu / hide humberger-menu handler
  const [atomStateIsShowHumbergerMenu, setAtomStateIsShowHumbergerMenu] =
    useAtom(atomIsShowHumbergerMenu);

  // category level one with sub-category, category level two with sub-category
  const CategoryLevelOneWithSubCategory: FC<IPropsCategoryLevel> = ({
    ...props
  }) => {
    // for detect isopen sub category
    const [isOpenSubCategory, setIsOpenSubCategory] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpenSubCategory((prev) => !prev)}
          className="flex w-full items-center justify-between pl-2"
        >
          <div className="flex items-center gap-1 text-c-sm font-bold text-c-gray-400">
            <Image
              src={String(props.categoryData.picture_link)}
              width={40}
              height={40}
              alt={props.categoryData.name}
            />
            <span className="truncate pl-1">{props.categoryData.name}</span>
          </div>
          <IconChevron
            className={cn('h-[13px] fill-c-gray-300', {
              '-rotate-90': isOpenSubCategory,
              'rotate-90': !isOpenSubCategory,
            })}
          />
        </button>
        <ul
          className={cn(
            'pr-3 text-c-xs font-bold text-c-gray-400 transition-all duration-300',
            {
              'visible opacity-100': isOpenSubCategory,
              'invisible h-0 overflow-hidden opacity-0': !isOpenSubCategory,
            },
          )}
        >
          <Link href={props.categoryData.refrence}>
            <li className="border-b border-r border-gray-200 border-opacity-60 px-3 py-2 text-c-gray-400 text-opacity-80">
              مشاهده این دسته بندی
            </li>
          </Link>
          <ul>
            {props.categoryData.children.map((item: TCategoryItem) => {
              return (
                <li
                  key={item.id}
                  className="border-r border-gray-200 border-opacity-60 py-0.5 [&:not(:last-child)]:border-b"
                >
                  {item.children?.length ? (
                    <CategoryLevelTwoWithSubCategory categoryData={item} />
                  ) : (
                    <Link
                      href={item.refrence}
                      className="ml-2 flex w-full items-center justify-between"
                    >
                      <div className="flex items-center gap-1 px-3 py-2 text-c-gray-400">
                        <span className="truncate pl-1">{item.name}</span>
                      </div>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  };
  const CategoryLevelTwoWithSubCategory: FC<IPropsCategoryLevel> = ({
    ...props
  }) => {
    // for detect isopen sub category
    const [isOpenSubCategory, setIsOpenSubCategory] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpenSubCategory((prev) => !prev)}
          className="flex w-full items-center justify-between pl-2"
        >
          <div className="flex items-center gap-1 px-3 py-2 text-c-gray-400">
            <span className="truncate pl-1">{props.categoryData.name}</span>
          </div>
          <IconChevron
            className={cn('h-[13px] fill-c-gray-300', {
              '-rotate-90': isOpenSubCategory,
              'rotate-90': !isOpenSubCategory,
            })}
          />
        </button>
        <ul
          className={cn(
            'pr-3 text-c-xs font-bold text-c-gray-400 transition-all duration-300',
            {
              'visible opacity-100': isOpenSubCategory,
              'invisible h-0 overflow-hidden opacity-0': !isOpenSubCategory,
            },
          )}
        >
          <Link href={props.categoryData.refrence}>
            <li className="border-b border-r border-gray-200 border-opacity-60 px-3 py-2 text-c-gray-400 text-opacity-70">
              مشاهده این دسته بندی
            </li>
          </Link>
          <ul>
            {props.categoryData.children.map((item: TCategoryItem) => {
              return (
                <li
                  key={item.id}
                  className="border-r border-gray-200 border-opacity-60 [&:not(:last-child)]:border-b"
                >
                  <Link
                    href={item.refrence}
                    className="flex w-full items-center justify-between"
                  >
                    <div className="flex w-full items-center gap-1 px-3 py-2 text-c-gray-400">
                      <span className="truncate">{item.name}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  };

  return (
    <div
      className={cn('modal_overlay bottom-0 left-0 right-0 top-0', {
        'visible bg-black/20': atomStateIsShowHumbergerMenu,
        'invisible opacity-0': !atomStateIsShowHumbergerMenu,
      })}
    >
      <div
        onClick={() =>
          toggleAtomStateHandler({
            type: 'hide',
            setAtomState: setAtomStateIsShowHumbergerMenu,
          })
        }
        className="fixed bottom-0 left-0 right-0 top-0"
      ></div>
      <div
        className={cn(
          'fixed bottom-0 left-0 right-0 top-0 h-screen w-[270px] bg-white font-bold transition-all duration-500',
          {
            'translate-x-0': atomStateIsShowHumbergerMenu,
            '!translate-x-80': !atomStateIsShowHumbergerMenu,
          },
        )}
      >
        {/* logo and close btn */}
        <div className="flex w-full items-center bg-c-gradient-blue p-[18px]">
          <button
            onClick={() =>
              toggleAtomStateHandler({
                type: 'hide',
                setAtomState: setAtomStateIsShowHumbergerMenu,
              })
            }
          >
            <IconChevron className={'h-[13px] fill-white'} />
          </button>
          <div className="flex w-full justify-center">
            <Link href="/">
              <Image
                src={IMAGES.template.header.logoWhite}
                width={60}
                height={60}
                alt="لوگو مبیت"
              />
            </Link>
          </div>
        </div>
        {/* amazing discount */}
        <Link href="/">
          <div
            className={
              'mx-2 flex items-cente</Link>r justify-between border-b border-gray-200 px-1 py-3.5'
            }
          >
            <div className="flex i</div>tems-center gap-2.5">
              <IconDiscountSquare
                className={'h-[23px] fill-transparent stroke-c-red'}
              />
              <p className="text-c-sm font-bold text-c-gray-500">
                پیشنهاد های شگفت انگیز
              </p>
            </div>
          </div>
        </Link>
        {/* category list */}
        <div
          className={
            'mx-2 flex items-center justify-between border-b border-gray-200 px-1 py-3.5'
          }
        >
          <div className="flex items-center gap-2.5">
            <IconWindow className={'fill-c-royal-blue'} />
            <p className="!text-c-sm font-bold text-c-gray-500">دسته بندی ها</p>
          </div>
        </div>
        <div className="mx-2 border-b border-gray-200">
          <div>
            <div className={'flex justify-center overflow-hidden'}>
              <div
                className={
                  'minimal-scrollbar my-1.5 max-h-[calc(100vh_-_250px)] w-full justify-center pl-1 transition-all duration-500'
                }
              >
                <ul>
                  {categoryData.map((item: TCategoryItem) => {
                    return (
                      <li
                        key={item.id}
                        className="mr-2 border-r border-gray-200 border-opacity-60 py-1 [&:not(:last-child)]:border-b"
                      >
                        <CategoryLevelOneWithSubCategory categoryData={item} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumbergerMenu;
