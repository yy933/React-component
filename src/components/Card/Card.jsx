import { clsx } from "clsx";
export default function Card({ children, className, style, ...rest }) {
  const combinedClassName = clsx("card", className);
  return (
    <div className={combinedClassName} style={style} {...rest}>
      {children}
    </div>
  );
}
