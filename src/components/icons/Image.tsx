type Props = {
  width?: number;
  height?: number;
  src: string;
  alt: string;
  className?: string;
  onClick?: (value?: any) => void;
};

// Component for displaying images with width and height, and optional className and onClick
const Image = (props: Props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{
        width: props.width ? props.width : "100%",
        height: props.height ? props.height : "100%",
      }}
      className={props.className}
      onClick={props.onClick}
    />
  );
};

export default Image;
