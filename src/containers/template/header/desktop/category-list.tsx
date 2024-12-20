import { atomIsShowCategoryList } from '@/atoms/is-show-category-list';
import { categoryData } from '@/resources/routes/template/header/category-data';
import { TCategoryItem } from '@/types/template/header/category-item';
import { cn } from '@/utils/cn';
import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { FC, Fragment, useState } from 'react';

const CategoryList: FC = (): JSX.Element => {
  // detect is-show category list
  const [atomStateIsShowCategoryList] = useAtom(atomIsShowCategoryList);

  // for Detect current hovered category
  const [activedCategoryData, setActivedCategoryData] = useState<TCategoryItem>(
    categoryData[0]!,
  );

  return (
    <section
      className={cn('absolute top-[68.5px]', {
        'visible opacity-100': atomStateIsShowCategoryList,
        'invisible opacity-0': !atomStateIsShowCategoryList,
      })}
    >
      {/* if fetched category data and set default activedCategory level one (index 0) ? render category list : show skeleton loader */}
      <div
        className={
          'flex rounded-b-lg border border-x border-b border-gray-100 bg-white transition-all duration-300 after:absolute h-[370px] after:-top-[22px] after:h-[23px] after:w-[200px]'
        }
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
                className={cn('flex items-center border-y', {
                  'border-gray-100 bg-c-gray-50':
                    item.id === activedCategoryData.id,
                  'border-transparent': item.id !== activedCategoryData.id,
                })}
              >
                <Image
                  className="mx-1 my-1"
                  src={String(item.picture_link)}
                  width={40}
                  height={40}
                  alt={item.name}
                />
                <p
                  className={cn('w-full truncate text-c-sm text-c-gray-500', {
                    'font-extrabold text-c-royal-blue':
                      item.id === activedCategoryData.id,
                    'font-bold': item.id !== activedCategoryData.id,
                  })}
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
