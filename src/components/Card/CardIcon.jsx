import { FaDog } from "react-icons/fa6";
export default function CardIcon({ children }) {
  if (children) return <div className="card-icon">{children}</div>;
  return (
    <div className="card-icon">
      <FaDog size={24} />
    </div>
  );
}
