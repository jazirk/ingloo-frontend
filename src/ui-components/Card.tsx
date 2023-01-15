interface CardProps {
  children: React.ReactNode;
  clasName?: string;
}

const Card = (props: CardProps) => (
  <div className={`card lg:card-side shadow-xl ${props.clasName}`}>
    {props.children}
  </div>
);

export { Card };
