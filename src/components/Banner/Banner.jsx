import React from "react";
import { clsx } from "clsx";

export default function Banner({ children, status = "succeess" }) {
  const childrenArray = React.Children.toArray(children);

  const hasDescription = childrenArray.some((child) => 
    React.isValidElement(child) &&
      child.type &&
      child.type.componentType === "BannerDescription"
  );

  
  const statusColor = {
    success: "green",
    warning: "yellow",
    error: "red",
    neutral: "blue",
  };
  const className = clsx(
    "banner",
    hasDescription ? "multi-line" : "single-line",
    `bg-${statusColor[status]}`,
    `text-${statusColor[status]}`,
  );
  return <div className={className}>{children}</div>;
}
