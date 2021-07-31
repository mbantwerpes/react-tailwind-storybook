interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className="bg-white rounded shadow w-full p-2">{children}</div>;
};
