import { FaDog } from "react-icons/fa6";
import { clsx } from "clsx";
export default function CardIcon({ children, color="blue" }) {
  const className = clsx("card-icon", `text-${color}`, `bg-${color}-dark`);
  if (children) return <div className={className}>{children}</div>;
  return (
    <div className={className}>
      <FaDog size={24} />
    </div>
  );
}
