import { ReactNode } from 'react';

import className from 'classnames';

type IButtonGroupProps = {
  xl?: boolean;
  multiple?: boolean;
  rounded?: boolean;
  children: ReactNode;
};

const ButtonGroup = (props: IButtonGroupProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
    'btn-group': props.multiple,
    'btn-rounded': props.rounded,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn-group {
            @apply flex text-center;
          }

          .btn-group :global(:first-child) {
            @apply rounded-l-full border-r-0;
          }

          .btn-group :global(:not(:last-child)) {
            @apply border-r-0;
          }

          .btn-group :global(:last-child) {
            @apply rounded-r-full;
          }
        `}
      </style>
    </div>
  );
};

export { ButtonGroup };
