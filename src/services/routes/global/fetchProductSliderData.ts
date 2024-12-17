import { productSliderData } from '@/resources/routes/home/productSliderData';
import { TProduct } from '@/types/routes/global/product';

type TResponse = TProduct[];

export const APIfetchProductSliderData = (): TResponse => {
  return productSliderData;
};
