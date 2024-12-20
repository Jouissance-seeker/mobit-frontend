import { topCategoriesData } from '@/resources/routes/home/top-categories-data';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const TopCategories: FC = (): JSX.Element => {
  return (
    <section
      id="top-categories"
      className="[&::-webkit-scrollbar-thumb]:bg-c-royal-blue [&::-webkit-scrollbar-track]:bg-c-gray-200 container flex justify-between gap-8 overflow-x-auto overflow-y-hidden pb-3 lg:pb-0"
    >
      {topCategoriesData.map((item, index) => {
        return (
          <Link
            href={item.url}
            key={index}
            className="group flex flex-col items-center gap-2.5"
          >
            <div className="bg-c-gray-100 relative flex h-[70px] w-[70px] items-center justify-center overflow-hidden rounded-xl border border-transparent transition-all duration-300 group-hover:border-gray-200 lg:h-[75px] lg:w-[75px]">
              <Image
                className="transition-all duration-300 group-hover:scale-105
              "
                src={item.image}
                fill
                alt={item.text}
              />
            </div>
            <p className="text-c-xs text-c-gray-500 lg:text-c-sm flex justify-center whitespace-nowrap font-bold">
              {item.text}
            </p>
          </Link>
        );
      })}
    </section>
  );
};

export default TopCategories;
