import {
  IconCart,
  IconDiscountSquare,
  IconHome,
  IconUser,
} from '@/constants/icons';
import useDetectScrollDirection from '@/hooks/detect-scroll-direction';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { FC } from 'react';

const NavBottomMenu: FC = (): JSX.Element => {
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
      icon: (
        <IconDiscountSquare
          className={'h-[26px] fill-c-gray-300 stroke-white'}
        />
      ),
      url: '/',
    },
    {
      text: 'سبد خرید',
      icon: <IconCart className={'fill-c-gray-300'} />,
      url: '/',
    },
    {
      text: 'ورود',
      icon: <IconUser className={'fill-c-gray-300'} />,
      url: '/auth',
    },
  ];

  // detect scroll direction for hide navbar after scroll to bottom
  const detectedScrollDirection = useDetectScrollDirection();

  return (
    <nav
      className={cn(
      'fixed z-20 w-full border-t border-gray-100 bg-white transition-all duration-500',
      {
        'bottom-0': detectedScrollDirection === 'top',
        '-bottom-40': detectedScrollDirection !== 'top',
      }
      )}
    >
      <div className="container flex w-full justify-around py-2">
      {navBottomItems.map((item, index) => {
        return (
        <Link
          key={index}
          href={item.url}
          className="flex flex-col items-center justify-between gap-1 text-c-gray-400"
        >
          <div className="h-5.5">{item.icon}</div>
          <p className="text-c-2xs font-medium">{item.text}</p>
        </Link>
        );
      })}
      </div>
    </nav>
  );
};

export default NavBottomMenu;
