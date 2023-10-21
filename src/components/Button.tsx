import React from "react";

type Props = {
  children: any;
  className?: string;
  onClick?: (e?: any) => void;
};

const Button = (props: Props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Button;
