'use client';

import ProductCard from '@/components/routes/home/productCard';
import { IconChevron, IconDiscountSquare } from '@/constants/icons';
import { TProduct } from '@/types/routes/global/product';
import convertNumber from '@/utils/convertNumber';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IProps {
  data: TProduct[];
  type:
    | 'most-visited'
    | 'new-products'
    | 'new-phones'
    | 'similar-products'
    | 'special-offer';
}

const ProductCardSlider: FC<IProps> = ({ ...props }): JSX.Element => {
  // get title with props.type
  const switchTitle = (type: string): string => {
    const list: any = {
      'most-visited': 'پربازدید های ماه',
      'new-products': 'محصولات جدید',
      'new-phones': 'جدیدترین گوشی ها',
      'similar-products': 'محصولات مشابه',
      'special-offer': 'پیشنهاد ویژه',
    };
    return list[type];
  };

  // get title with props.type
  const switchSeeAllReference = (type: string): string => {
    const list: any = {
      'most-visited': '/',
      'new-products': '/',
      'new-phones': '/',
      'similar-products': '/',
      'special-offer': '/',
    };
    return list[type];
  };

  // special offer timer
  const [timeLeftFromDay, setTimeLeftFromDay] = useState<number[] | null>(null);
  const interval = setInterval(() => {
    const currentTime: any = new Date();
    const endOfDay: any = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    const timeDiff = endOfDay - currentTime;
    const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeDiff / (1000 * 60)) % 60);
    const secondsLeft = Math.floor((timeDiff / 1000) % 60);
    setTimeLeftFromDay([hoursLeft, minutesLeft, secondsLeft]);
    if (timeDiff < 0) {
      clearInterval(interval);
    }
  }, 1000);

  return (
    <section className="container relative flex flex-col gap-4">
      {/* head */}
      <div
        className={`flex h-[50px] items-center justify-between rounded-xl px-2.5 lg:h-[57px] lg:px-4 ${
          props.type === 'special-offer' ? 'bg-c-red' : 'bg-c-gray-100'
        }`}
      >
        {/* title */}
        <div className="flex items-center gap-1 lg:gap-2">
          {!!(props.type === 'special-offer') && (
            <>
              <div className="block lg:hidden">
                <IconDiscountSquare className="h-[26px] fill-transparent stroke-white" />
              </div>
              <div className="hidden lg:block">
                <IconDiscountSquare className="h-[29px] fill-transparent stroke-white" />
              </div>
            </>
          )}
          <h3
            className={`text-c-sm font-extrabold lg:text-c-xl ${
              props.type === 'special-offer' ? 'text-white' : 'text-black'
            }`}
          >
            {switchTitle(props.type)}
          </h3>
        </div>
        {/* time left from today [only props.type === 'special-offer'] */}
        {!!(props.type === 'special-offer') && (
          <div
            className={`flex items-center gap-1.5 transition-all duration-300 lg:gap-2 ${
              timeLeftFromDay ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
          >
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-white p-3 text-c-md font-extrabold lg:h-11 lg:w-11 lg:rounded-xl lg:text-c-xl lg:font-black">
              {timeLeftFromDay &&
                convertNumber({
                  number:
                    String(timeLeftFromDay[2]).length === 1
                      ? String('0' + timeLeftFromDay[2])
                      : String(timeLeftFromDay[2]),
                  type: 'to-persian',
                })}
            </div>
            <p className="text-c-xl font-black text-white">:</p>
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-white p-3 text-c-md font-extrabold lg:h-11 lg:w-11 lg:rounded-xl lg:text-c-xl lg:font-black">
              {timeLeftFromDay &&
                convertNumber({
                  number:
                    String(timeLeftFromDay[1]).length === 1
                      ? String('0' + timeLeftFromDay[1])
                      : String(timeLeftFromDay[1]),
                  type: 'to-persian',
                })}
            </div>
            <p className="text-c-xl font-black text-white">:</p>
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-white p-3 text-c-md font-extrabold lg:h-11 lg:w-11 lg:rounded-xl lg:text-c-xl lg:font-black">
              {timeLeftFromDay &&
                convertNumber({
                  number:
                    String(timeLeftFromDay[0]).length === 1
                      ? String('0' + timeLeftFromDay[0])
                      : String(timeLeftFromDay[0]),
                  type: 'to-persian',
                })}
            </div>
          </div>
        )}
        {/* see-all reference */}
        <Link
          href={switchSeeAllReference(props.type)}
          className={`items-center gap-1.5 lg:gap-2 ${
            props.type === 'special-offer' ? 'hidden sm:flex' : 'flex'
          }`}
        >
          <span
            className={`text-c-sm font-semibold lg:font-bold ${
              props.type === 'special-offer' ? 'text-white' : 'text-c-gray-400'
            }`}
          >
            مشاهده همه
          </span>
          <IconChevron
            className={`h-[13px] rotate-180 ${
              props.type === 'special-offer' ? 'fill-white' : 'fill-c-gray-400'
            }`}
          />
        </Link>
      </div>
      {/* body */}
      <div>
        <Swiper
          slidesPerView={2}
          className="!static"
          id="product-slider"
          spaceBetween={15}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          navigation
          modules={[Navigation]}
        >
          {props.data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductCard data={item} type={'vertical'} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCardSlider;
