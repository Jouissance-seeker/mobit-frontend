'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC, useRef } from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IconChevron } from '@/constants/icons';
import useDetectScreenSize from '@/hooks/detectScreenSize';
import { heroSliderData } from '@/resources/routes/home/heroSliderData';

const HeroSlider: FC = (): JSX.Element => {
  const swiperRef = useRef<any>(null);

  // detect current innerWidth for conditional render slider image
  const { innerWidth } = useDetectScreenSize();

  return (
    <section
      id="hero_slider"
      dir="ltr"
      className="group/hero-slider container relative"
    >
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{
          clickable: true,
          el: '.pagination',
        }}
        modules={[Autoplay, Pagination]}
        className="overflow-hidden rounded-xl"
      >
        {heroSliderData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link href={'/'}>
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-xl bg-c-gray-100 sm:aspect-h-2 sm:aspect-w-7">
                  {!!innerWidth && (
                    <Image
                      fill
                      src={
                        innerWidth <= 640 ? item.imageMobile : item.imageDesktop
                      }
                      className="block h-full w-full object-cover object-center"
                      alt="تصویر اسلایدر"
                    />
                  )}
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* custom pagination and custom navigation for hero slider */}
      <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center">
        <div className="flex w-fit gap-2">
          <button
            className="group/hero-slider_navigation flex w-6 items-center justify-center rounded-[5px] bg-white opacity-0 transition-all duration-300 group-hover/hero-slider:opacity-100"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <IconChevron
              className={`h-[11.5px] rotate-180 fill-c-gray-400 group-hover/hero-slider_navigation:fill-c-gray-600`}
            />
          </button>
          <div className="pagination" />
          <button
            className="group/hero-slider_navigation flex w-6 items-center justify-center rounded-[5px] bg-white opacity-0 transition-all duration-300 group-hover/hero-slider:opacity-100"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <IconChevron
              className={`h-[11.5px] fill-c-gray-400 group-hover/hero-slider_navigation:fill-c-gray-600`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
