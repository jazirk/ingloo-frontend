import { ReactNode } from 'react';

import className from 'classnames';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  xl?: boolean;
  rounded?: boolean;
  classname?: string;
  children: ReactNode;
  secondary?: boolean;
  transparent?: boolean;
}

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': !props.secondary && !props.transparent,
    'btn-secondary': props.secondary,
    'btn-rounded': props.rounded,
    'btn-transparent': props.transparent,
  });

  // eslint-disable-next-line unused-imports/no-unused-vars
  const { children, rounded, secondary, transparent, ...rest } = props;

  return (
    <div className={`${btnClass} ${props.classname}`} {...rest}>
      {children}

      <style jsx>
        {`
          .btn {
            @apply normal-case;
            @apply cursor-pointer;
            @apply flex text-center gap-2;
          }

          .btn-base {
            @apply text-base font-semibold py-1.5 px-6;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply cursor-pointer;
            @apply text-[#F85C3A] border-x-[#F85C3A] border-y-[#F85C3A] border-solid border bg-white;
          }

          .btn-primary:hover {
            @apply bg-[#F85C3A];
            @apply text-white;
          }

          .btn-secondary {
            @apply text-white border-x-[#F85C3A] border-y-[#F85C3A] border-solid border bg-[#F85C3A];
          }

          .btn-rounded {
            @apply rounded-full;
          }

          .btn-transparent {
            @apply border-white;
            @apply text-white;
            background-color: transparent;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
