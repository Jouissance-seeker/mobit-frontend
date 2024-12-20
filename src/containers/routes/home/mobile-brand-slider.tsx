'use client';

import { mobileBrandSliderData } from '@/resources/routes/home/mobile-brand-slider-data';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const MobileBrandSlider: FC = (): JSX.Element => {
  return (
    <section className="container relative !z-0 flex">
      <Swiper
        slidesPerView={2}
        id="mobile-brand-slider"
        className='!static'
        navigation
        modules={[Navigation]}
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
      >
        {mobileBrandSliderData.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
            >
              <Link
                href={item.reference}
                className="flex flex-col items-center"
              >
                <div className="relative h-full w-full aspect-h-1 aspect-w-1">
                  <Image src={item.image} alt={item.text} fill />
                </div>
                <p className="text-c-md font-semibold">{item.text}</p>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default MobileBrandSlider;
