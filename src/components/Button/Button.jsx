import "./Button.css";
export default function Button({
  children,
  onClick,
  className = "",
  ariaLabel = "button",
}) {
  return (
    <button onClick={onClick} className={className} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
