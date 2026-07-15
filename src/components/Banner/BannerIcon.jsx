import React from "react";
import { BannerContext } from "./Banner.jsx";
import {
  LuCircleCheck,
  LuCircleAlert,
  LuCircleX,
  LuInfo,
} from "react-icons/lu";

export default function BannerIcon({ children }) {
  const { status } = React.useContext(BannerContext);
  if (children) {
    return <div className="banner-icon">{children}</div>;
  }
  const iconMap = {
    success: <LuCircleCheck size={18} />,
    warning: <LuCircleAlert size={18} />,
    error: <LuCircleX size={18} />,
    neutral: <LuInfo size={18} />,
  };
  return (
    <span className={`banner-icon icon-${status}`}>{iconMap[status]}</span>
  );
}

BannerIcon.componentType = "BannerIcon";
