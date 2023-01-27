import React from "react";
import "./buttons.scss";

interface ButtonProps {
  type: "primary" | "danger" | "info";
  title: string;
  fn: () => void;
  className?: string;
  Icon?: React.ReactNode;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  type,
  title,
  className,
  Icon,
  fn,
}) => {
  return (
    <button onClick={() => fn()} className={`button ${type} ${className}`}>
      {Icon}&nbsp;
      {title}
    </button>
  );
};

export default Button;
