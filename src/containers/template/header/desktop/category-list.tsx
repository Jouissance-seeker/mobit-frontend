import { atomIsShowCategoryList } from '@/atoms/template/header/desktop/is-show-category-list';
import { categoryData } from '@/resources/routes/template/header/category-data';
import { TCategoryItem } from '@/types/template/header/category-item';
import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { FC, Fragment, useState } from 'react';

const CategoryList: FC = (): JSX.Element => {
  // detect is-show category list
  const [atomStateIsShowCategoryList] =
    useAtom(atomIsShowCategoryList);

  // for Detect current hovered category
  const [activedCategoryData, setActivedCategoryData] =
    useState<TCategoryItem>(categoryData[0]!);

  return (
    <section
      className={`absolute top-[68.5px] ${
        atomStateIsShowCategoryList
          ? 'visible opacity-100'
          : 'invisible opacity-0'
      }`}
    >
      {/* if fetched category data and set default activedCategory level one (index 0) ? render category list : show skeleton loader */}
      <div
        className={`flex rounded-b-lg border border-x border-b border-gray-100 bg-white transition-all duration-300 after:absolute h-[370px] after:-top-[22px] after:h-[23px] after:w-[200px]`}
      >
        {/* category level one */}
        <div
          id={'header-desktop_category-level-one'}
          className="h-fit w-48 border-l py-2"
        >
          {categoryData?.map((item: TCategoryItem) => {
            return (
              <Link
                href={item.refrence}
                onMouseEnter={() => setActivedCategoryData(item)}
                key={item.id}
                className={`flex items-center border-y ${
                  item.id === activedCategoryData?.id
                    ? 'border-gray-100 bg-c-gray-50'
                    : 'border-transparent'
                }`}
              >
                <Image
                  className="mx-1 my-1"
                  src={String(item.picture_link)}
                  width={40}
                  height={40}
                  alt={item.name}
                />
                <p
                  className={`w-full truncate text-c-sm text-c-gray-500 ${
                    item.id === activedCategoryData?.id
                      ? 'font-extrabold text-c-royal-blue'
                      : 'font-bold'
                  }`}
                >
                  {item.name}
                </p>
              </Link>
            );
          })}
        </div>
        {/* category level two, category level tree */}
        <div className="flex flex-col flex-wrap gap-x-5 gap-y-2 p-3.5 text-c-xs font-bold text-c-gray-400">
          {activedCategoryData.children.map((item: TCategoryItem) => {
            return (
              <Fragment key={item.id}>
                {/* category level one */}
                <Link
                  key={item.id}
                  href={item.refrence}
                  className="relative w-[160px] truncate py-[3.5px] pr-3 after:absolute after:bottom-0 after:right-0 after:top-0 after:h-full after:w-1 after:rounded-md after:bg-c-royal-blue hover:text-c-royal-blue"
                >
                  {item.name}
                </Link>
                {/* category level two */}
                {!!item.children.length &&
                  item.children.map((item: TCategoryItem) => {
                    return (
                      <Link
                        key={item.id}
                        href={item.refrence}
                        className="w-[160px] truncate py-[3.5px] hover:text-c-royal-blue"
                      >
                        {item.name}
                      </Link>
                    );
                  })}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
