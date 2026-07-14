import { clsx } from "clsx";
export default function Badge({ color, variant, children }) {
  const className = clsx("badge", `text-${color}`, `bg-${color}`, variant);
  return <span className={className}>{children}</span>;
}
