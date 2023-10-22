import React from "react";

type Props = {
  width: number;
  height: number;
  src: string;
  alt: string;
  className?: string;
  onClick?: (value?: any) => void;
};

const Image = (props: Props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{ width: props.width, height: props.height }}
      className={props.className}
      onClick={props.onClick}
    />
  );
};

export default Image;
