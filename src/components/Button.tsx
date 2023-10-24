type Props = {
  children: any;
  className?: string;
  onClick?: (e?: any) => void;
};

// Component for displaying button with optional className and onClick
const Button = (props: Props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Button;
