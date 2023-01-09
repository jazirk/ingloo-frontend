import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: string | undefined;
  children: ReactNode;
  button?: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center gap-2">
    <div>
      <Link href="/">
        <a>
          <img src={props.logo} alt="Logo" />
        </a>
      </Link>
    </div>

    <nav>
      <ul className="navbar flex items-center font-normal text-base text-gray-800">
        {props.children}
      </ul>
    </nav>

    {props.button}

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }

        .navbar :global(li) {
          @apply text-base;
        }
      `}
    </style>
  </div>
);

export { Navbar };
