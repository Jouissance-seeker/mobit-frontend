import ProductCardSlider from '@/containers/routes/global/product-slider';
import HeroSlider from '@/containers/routes/home/hero-slider';
import MobileBrandSlider from '@/containers/routes/home/mobile-brand-slider';
import TopCategories from '@/containers/routes/home/top-categories';
import { productSliderData } from '@/resources/routes/home/product-slider-data';
import { Metadata } from 'next';

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'فروشگاه اینترنتی مبیت',
    description:
      'فروشگاه اینترنتی موبایل مبیت عرضه کننده انواع کالاهای دیجیتال در ایران است.خرید اینترنتی موبایل,تبلت,هارد اکسترنال,فلش مموری,کنسول بازی فقط با چند کلیک ساده',
  };
}

export default async function Page() {
  return (
    <>
      <HeroSlider />
      <TopCategories />
      <ProductCardSlider type={'special-offer'} data={productSliderData} />
      <MobileBrandSlider />
      <ProductCardSlider type={'most-visited'} data={productSliderData} />
      <ProductCardSlider type={'new-phones'} data={productSliderData} />
      <ProductCardSlider type={'new-products'} data={productSliderData} />
    </>
  );
}
