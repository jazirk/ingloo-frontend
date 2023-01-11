import { ReactNode } from 'react';

import className from 'classnames';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  xl?: boolean;
  rounded?: boolean;
  classname?: string;
  children: ReactNode;
}

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
    'btn-rounded': props.rounded,
  });

  const { children, ...rest } = props;

  return (
    <div className={`${btnClass} ${props.classname}`} {...rest}>
      {children}

      <style jsx>
        {`
          .btn {
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
            @apply text-[#F85C3A] border-x-[#F85C3A] border-y-[#F85C3A] border-solid border;
          }

          .btn-primary:hover {
            @apply bg-[#F85C3A];
            @apply text-white;
          }

          .btn-rounded {
            @apply rounded-full;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
