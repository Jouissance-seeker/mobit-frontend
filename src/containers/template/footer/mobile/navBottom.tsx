import { atomIsShowSearchResult } from '@/atoms/template/header/global/isShowSearchResult';
import { atomIsShowHumbergerMenu } from '@/atoms/template/header/mobile/isShowHumbergerMenu';
import {
  IconCart,
  IconDiscountSquare,
  IconHome,
  IconUser,
} from '@/constants/global/icons';
import useDetectScrollDirection from '@/hooks/template/header/detectScrollDirection';
import Link from 'next/link';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

const NavBottom: FC = (): JSX.Element => {
  // nav-bottom items for render
  const navBottomItems: {
    text: string;
    icon: JSX.Element;
    url: string;
  }[] = [
    {
      text: 'صفحه اصلی',
      icon: <IconHome />,
      url: '/',
    },
    {
      text: 'پیشنهاد شگفت انگیز',
      icon: <IconDiscountSquare color={'base-gray-300'} />,
      url: '/',
    },
    {
      text: 'سبد خرید',
      icon: <IconCart color={'base-gray-300'} />,
      url: '/',
    },
    {
      text: 'ورود',
      icon: <IconUser color={'base-gray-300'} />,
      url: '/',
    },
  ];

  // detect scroll direction for hide navbar after scroll to bottom
  const detectedScrollDirection = useDetectScrollDirection();

  return (
    <nav
      className={`fixed w-full border-t border-gray-100  bg-white transition-all duration-500 ${
      detectedScrollDirection === 'top' ? 'bottom-0' : '-bottom-40'
      }`}
    >
      <div className="container flex w-full justify-around py-2">
        {navBottomItems.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.url}
              className="flex flex-col items-center justify-between gap-1.5 text-base-gray-400"
            >
              <div className="h-5.5">{item.icon}</div>
              <p className="text-base-2xs font-medium">{item.text}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBottom;