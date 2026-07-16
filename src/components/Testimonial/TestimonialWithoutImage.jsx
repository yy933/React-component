export default function TestimonialWithoutImage({ children }) {
  return (
    <div className="testimonial-layout-without-image">
      <div className="testimonial-grid-bg"></div>
      <div className="testimonial-body-centered">{children}</div>
    </div>
  );
}
