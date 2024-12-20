// global
import { default as Chevron } from '@/constants/icons/global/chevron';
import { default as Discount } from '@/constants/icons/global/discount';
import { default as DiscountSquare } from '@/constants/icons/global/discount-square';
import { default as FastDelivery } from '@/constants/icons/global/fast-delivery';
import { default as Star } from '@/constants/icons/global/star';
// template/global
import { default as User } from '@/constants/icons/template/global/user';
// template/header
import { default as Magnifier } from '@/constants/icons/template/header/magnifier';
import { default as ThreeDots } from '@/constants/icons/template/header/three-dots';
import { default as Window } from '@/constants/icons/template/header/window';
// template/footer
import { default as Home } from '@/constants/icons/template/footer/home';
import { default as Cart } from '@/constants/icons/template/global/cart';

const ICONS = {
  global: {
    chevron: Chevron,
    discountSquare: DiscountSquare,
    discount: Discount,
    fastDelivery: FastDelivery,
    star: Star,
  },
  template: {
    global: {
      user: User,
      cart: Cart,
    },
    header: {
      threeDots: ThreeDots,
      magnifier: Magnifier,
      window: Window,
    },
    footer: {
      home: Home,
    },
  },
};

// global
export const IconChevron = ICONS.global.chevron;
export const IconDiscountSquare = ICONS.global.discountSquare;
export const IconDiscount = ICONS.global.discount;
export const IconFastDelivery = ICONS.global.fastDelivery;
export const IconStar = ICONS.global.star;
// template/global
export const IconUser = ICONS.template.global.user;
export const IconCart = ICONS.template.global.cart;
// template/header
export const IconThreeDots = ICONS.template.header.threeDots;
export const IconMagnifier = ICONS.template.header.magnifier;
export const IconWindow = ICONS.template.header.window;
// template/footer
export const IconHome = ICONS.template.footer.home;
