import { clsx } from "clsx";
export default function TestimonialWithImage({
  children,
  image,
  imageAlt,
  className,
  style,
  ...rest
}) {
  const combinedClassName = clsx("testimonial-layout-with-image", className);
  return (
    <div className={combinedClassName} style={style} {...rest}>
      {image && (
        <div className="testimonial-image-container">
          <img src={image} alt={imageAlt} className="testimonial-image" />
        </div>
      )}
      <div className="testimonial-body">{children}</div>
    </div>
  );
}
