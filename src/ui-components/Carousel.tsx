// import { Children } from 'react';

import { Children } from 'react';

interface CarouselProps {
  children: React.ReactNode;
  itemWidth?: string;
}

const Carousel = ({ children, itemWidth }: CarouselProps) => {
  const arrayChildren = Children.toArray(children);

  return (
    <div className="carousel p-4 space-x-4 rounded-box gap-10 flex-col md:flex-row lg:flex-row">
      {Children.map(arrayChildren, (child, _index) => {
        return (
          <div className={`carousel-item ${itemWidth || ''}`}>{child}</div>
        );
      })}
    </div>
  );
};

export { Carousel };
