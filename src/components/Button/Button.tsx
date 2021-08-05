interface ButtonProps {
  children: string;
  styleType: "primary" | "secondary" | "warning";
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, styleType, type, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${
        styleType === "primary"
          ? "bg-blue-400"
          : styleType === "secondary"
          ? "bg-transparent"
          : "bg-red-500"
      } pl-3 pr-3 pt-2 pb-2 rounded text-white`}
    >
      {children}
    </button>
  );
};
