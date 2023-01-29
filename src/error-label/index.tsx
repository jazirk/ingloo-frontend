import { ReactNode } from 'react';

interface IErrorLabelProps {
  children: ReactNode;
}

const ErrorLabel = ({ children }: IErrorLabelProps) => {
  return <span className="text-red-600 text-xs">{children}</span>;
};

export { ErrorLabel };
