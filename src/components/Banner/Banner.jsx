import {clsx} from "clsx";
export default function Banner({ children, status }) {
  const statusColor = {
    success: "green",
    warning: "yellow",
    error: "red",
    neutral: "blue",
  };
  const className = clsx("banner", `bg-${statusColor[status]}`, `text-${statusColor[status]}`);
  return <div className={className}>Banner</div>;
}
