export default function TestimonialWithImage({ children, image, imageAlt }) {
  return (
    <div className="testimonial-layout-with-image">
      {image && (
        <div className="testimonial-image-container">
          <img src={image} alt={imageAlt} className="testimonial-image" />
        </div>
      )}
      <div className="testimonial-body">{children}</div>
    </div>
  );
}
