import { cn } from '@/utils/cn';
import { FC } from 'react';

interface IProps {
  className: string;
}

const IconChevron: FC<IProps> = ({ ...props }): JSX.Element => {
  return (
    <svg
      className={cn('transition-all duration-300', props.className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9.017 16.500"
    >
      <path
      id="Path_1333"
      data-name="Path 1333"
      d="M1,16.031a1,1,0,0,1-.709-1.711L6.6,8.016.293,1.71A1,1,0,0,1,1.71.293L8.723,7.305a1,1,0,0,1,0,1.418L1.711,15.737A1,1,0,0,1,1,16.031Z"
      />
    </svg>
  );
};

export default IconChevron;
