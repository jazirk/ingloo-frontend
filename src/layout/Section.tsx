import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  xPadding?: string;
  children: ReactNode;
  border?: string;
  name?: string;
  id?: string | undefined;
};

const Section = (props: ISectionProps) => (
  <div
    id={props.id}
    className={`max-w-full px-12 ${
      props.yPadding ? props.yPadding : 'py-8 md:py-16 lg:py-16'
    } 
    ${props.xPadding ? props.xPadding : 'px-8 md:px-8 lg:px-8'}
    ${props.border ? props.border : ''}`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl text-gray-900 font-bold">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
