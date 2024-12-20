import { IconChevron } from '@/constants/icons';
import IMAGES from '@/constants/images';
import convertNumber from '@/utils/convert-number';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Global: FC = (): JSX.Element => {
  return (
    <div className="container">
      {/* fast access to app section */}
      <div>
        <div className="flex w-full justify-center">
          <button
            onClick={() => {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }}
            className="flex items-center gap-2 rounded-t-lg bg-c-gray-100 px-3.5 py-1.5 text-c-xs font-bold text-c-gray-500 lg:text-c-sm"
          >
            <p>بازگشت به بالا</p>
            <IconChevron className={`h-[11.5px] -rotate-90 fill-c-gray-600`} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-3 rounded-xl bg-c-gray-100 p-5 sm:flex-row sm:justify-between sm:p-3">
          <div className="flex items-center gap-3">
            <Image
              src={IMAGES.template.footer.logoIcon}
              width={40}
              height={40}
              alt="لوگو مبیت"
            />
            <p className="text-c-lg font-extrabold text-c-royal-blue lg:text-c-xl lg:font-black">
              دسترسی سریع به اپلیکیشن
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/"
              className="flex items-center rounded-xl bg-white px-3.5 py-1.5 shadow-lg shadow-gray-200"
            >
              <Image
                src={IMAGES.template.footer.downloadAppFromCafebazzar}
                height={30}
                width={110}
                alt="دانلود اپلیکیشن مبیت از کافه بازار"
              />
            </Link>
            <Link
              href="/"
              className="flex items-center rounded-xl bg-white px-3.5 py-1.5 shadow-lg shadow-gray-200"
            >
              <Image
                src={IMAGES.template.footer.downloadAppFromIapps}
                height={30}
                width={110}
                alt="دانلود اپلیکیشن مبیت از آی اپس"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* namads, what is mobit? */}
      <div className="flex flex-col gap-3 py-5 sm:flex-row sm:justify-between">
        {/* what is mobit */}
        <div className="flex max-w-sm flex-col lg:max-w-md">
          <h1 className="lg:text-c-lg text-c-sm font-extrabold text-c-gray-500">
            فروشگاه اینترنتی مبیت، خرید آسان کالای دیجیتال
          </h1>
          <h2 className="text-c-xs font-bold text-c-gray-400 lg:text-c-sm">
            فروشگاه اینترنتی مبیت از جمله عرضه‌کنندگان کالای دیجیتال در سراسر
            کشور است که انواع کالاهای دیجیتال از جمله گوشی موبایل، لپ تاپ، تبلت
            و لوازم جانبی گوشی را قیمت مناسب و ضمانت اصالت کالا به فروش
            می‌رساند.
          </h2>
        </div>
        {/* namads */}
        <div className="flex items-center justify-center gap-2">
          <Link href="/">
            <Image
              src={IMAGES.template.footer.namadEtehadieh}
              width={80}
              height={80}
              alt="نماد اتحادیه"
            />
          </Link>
          <Link href="/">
            <Image
              src={IMAGES.template.footer.namadSamandehi}
              width={80}
              height={80}
              alt="نماد ساماندهی"
            />
          </Link>{' '}
          <Link href="/">
            <Image
              src={IMAGES.template.footer.namadSep}
              width={80}
              height={80}
              alt="نماد سپ"
            />
          </Link>
        </div>
      </div>
      {/* copyright */}
      <p className="flex justify-center border-t py-3 text-c-sm font-semibold text-c-gray-400">
        طراحی و توسعه در اردیبهشت{' '}
        {convertNumber({ number: '1402', type: 'to-persian' })}
      </p>
    </div>
  );
};

export default Global;
