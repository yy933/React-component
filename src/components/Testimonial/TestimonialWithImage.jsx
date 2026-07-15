export default function TestimonialWithImage({ children, image }) {
  return (
    <div className="testimonial-with-image">
      <img src={image} className="testimonial-image" />
      {children}
    </div>
  );
}
