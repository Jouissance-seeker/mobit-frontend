import {
  IconDiscount,
  IconDiscountSquare,
  IconFastDelivery,
  IconStar,
} from '@/constants/icons';
import { TProduct } from '@/types/routes/global/product';
import { cn } from '@/utils/cn';
import convertNumber from '@/utils/convert-number';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface IProps {
  type: 'vertical' | 'horizontal';
  data: TProduct;
}

const ProductCard: FC<IProps> = ({ ...props }): JSX.Element => {
  return (
    <Link href={props.data.refrence} className="flex flex-col gap-2">
      <div className="group relative flex h-[150px] w-full items-center justify-center rounded-xl bg-c-gray-100">
        {/* image */}
        <div className="relative h-[130px] w-[130px]">
          <Image
            className="transition-all duration-300 group-hover:scale-105"
            src={props.data.image}
            alt={props.data.name}
            fill
          />
        </div>
        <div className=" absolute right-2.5 top-2.5 flex flex-col gap-1.5">
          {/* discount */}
          {!!props.data.discount && (
            <div className="flex items-center gap-0.5 rounded-md bg-c-red px-[7px]">
              <p className="pt-0.5 text-c-md font-semibold text-white">
                {convertNumber({
                  number: String(props.data.discount),
                  type: 'to-persian',
                })}
              </p>
              <IconDiscount />
            </div>
          )}
          {/* fast delivery */}
          {props.data.fastDelivery && (
            <div className="w-fit rounded-md bg-c-yellow px-1.5 py-[3px]">
              <IconFastDelivery />
            </div>
          )}
        </div>
        {/* super discount */}
        {props.data.superDiscount && (
          <div className="absolute left-2.5 top-2.5">
            <IconDiscountSquare className="h-[24px] fill-transparent stroke-c-red" />
          </div>
        )}
        {/* colors */}
        <div
          className={cn(
            'absolute bottom-2.5 right-2.5 flex gap-[5px] rounded-[5px] bg-c-gray-200 p-[7px]',
            {
              'pl-5 after:absolute after:left-[6px] after:top-0 after:font-medium after:text-c-gray-500 after:content-["_+"]':
                !!(props.data.colors.length > 3),
            },
          )}
        >
          {props.data.colors.slice(0, 3).map((item, index) => {
            return (
              <span
                key={index}
                className="rounded-lg p-[3.5px]"
                style={{ backgroundColor: item }}
              />
            );
          })}
        </div>
      </div>
      {/* title */}
      <h4 className="my-1 line-clamp-2 w-full text-c-sm font-semibold leading-5">
        {props.data.name}
      </h4>
      {/* price */}
      <div className="flex justify-end gap-2">
        {!!props.data.discount && (
          <del className="lg:text-c-lg text-c-md font-semibold text-c-gray-400">
            {Math.round(Number(props.data.price)).toLocaleString('fa')}
          </del>
        )}
        <div className="flex gap-[3px] text-c-sm font-semibold text-c-gray-600">
          <p className="lg:text-c-lg text-c-md text-black">
            {Math.round(
              Number(props.data.price) * (1 - props.data.discount / 100),
            ).toLocaleString('fa')}
          </p>{' '}
          تومان
        </div>
      </div>
      <div className="flex items-center justify-end gap-1.5">
        {/* comment */}
        <div className="text-c-sm font-semibold">
          {!!props.data.commentsLength ? (
            <p className="text-c-gray-300">
              (
              {convertNumber({
                number: String(props.data.commentsLength),
                type: 'to-persian',
              })}{' '}
              نظر)
            </p>
          ) : (
            <p className="text-c-royal-blue">نظر دهید</p>
          )}
        </div>
        {/* rate */}
        <div className="lg:text-c-lg flex gap-1 text-c-md font-medium text-c-gray-400">
          <p>
            {convertNumber({
              number: String(props.data.rating),
              type: 'to-persian',
            })}
          </p>
          <IconStar />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
