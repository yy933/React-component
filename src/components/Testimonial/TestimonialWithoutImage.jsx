import { clsx } from "clsx";

export default function TestimonialWithoutImage({
  children,
  className,
  style,
  ...rest
}) {
  const combinedClassName = clsx("testimonial-layout-without-image", className);
  return (
    <div className={combinedClassName} style={style} {...rest}>
      <div className="testimonial-grid-bg"></div>
      <div className="testimonial-body-centered">{children}</div>
    </div>
  );
}
