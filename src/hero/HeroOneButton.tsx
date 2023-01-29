import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string | ReactNode;
  button: ReactNode;
  image: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <div className="flex flex-col lg:flex-row lg:justify-between">
    <div className="lg:w-1/2">
      <h1 className="text-6xl text-gray-900 font-bold whitespace-pre-line leading-hero mt-8 lg:mt-16 mb-8">
        {props.title}
      </h1>
      <div className="text-2xl mt-8 mb-16 text-black">{props.description}</div>

      <div className="flex">{props.button}</div>
    </div>
    <div className="lg:w-1/2 flex justify-center items-center">
      {props.image}
    </div>
  </div>
);

export { HeroOneButton };
