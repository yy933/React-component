import React, { createContext } from "react";
import { clsx } from "clsx";

const BannerContext = createContext();
export default function Banner({
  children,
  status = "success",
  className,
  style,
  ...rest
}) {
  const childrenArray = React.Children.toArray(children);

  const hasDescription = childrenArray.some(
    (child) =>
      React.isValidElement(child) &&
      child.type &&
      child.type.componentType === "BannerDescription",
  );

  const statusColor = {
    success: "green",
    warning: "yellow",
    error: "red",
    neutral: "blue",
  };
  const combinedClassName = clsx(
    "banner",
    hasDescription ? "multi-line" : "single-line",
    `bg-${statusColor[status]}-light`,
    `text-${statusColor[status]}`,
    className,
  );
  return (
    <BannerContext.Provider value={{ status }}>
      <div className={combinedClassName} style={style} {...rest}>
        {children}
      </div>
    </BannerContext.Provider>
  );
}

export { BannerContext };
