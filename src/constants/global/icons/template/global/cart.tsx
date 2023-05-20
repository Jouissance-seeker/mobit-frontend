import { FC } from 'react';
import classNames from 'classnames';

interface IProps {
  color: 'white' | 'base-gray-300';
}

const IconCart: FC<IProps> = ({ ...props }): JSX.Element => {
  const iconColor = classNames({
    'fill-white': props.color === 'white',
    'fill-base-gray-300': props.color === 'base-gray-300',
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="23"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        className={iconColor}
        d="M16 8.75c-.41 0-.75-.34-.75-.75V4.5c0-1.08-.67-1.75-1.75-1.75h-3c-1.08 0-1.75.67-1.75 1.75V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.5c0-1.91 1.34-3.25 3.25-3.25h3c1.91 0 3.25 1.34 3.25 3.25V8c0 .41-.34.75-.75.75z"
      ></path>
      <path
        className={iconColor}
        d="M8 17.78a.749.749 0 110-1.5h11.76c.3 0 .53-.26.5-.56l-.68-5.69C19.34 8.09 19 6.5 15.6 6.5H8.4c-3.4 0-3.74 1.59-3.97 3.53l-.9 7.5C3.24 19.99 4 22 7.51 22h8.98c3.16 0 4.09-1.63 4.04-3.75a.49.49 0 00-.5-.47H8z"
      ></path>
    </svg>
  );
};

export default IconCart;
