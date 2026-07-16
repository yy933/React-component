import { clsx } from "clsx";
export default function Badge({
  color,
  variant,
  children,
  className,
  style,
  ...rest
}) {
  const combinedClassName = clsx(
    "badge",
    `text-${color}`,
    `bg-${color}-light`,
    variant,
    className,
  );
  return (
    <span className={combinedClassName} style={style} {...rest}>
      {children}
    </span>
  );
}
