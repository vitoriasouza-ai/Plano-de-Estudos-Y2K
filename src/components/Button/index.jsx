import "./button.style.css";

export function Button({ children, ...rest }) {
  return (
    <button {...rest} className="btn-save">
      {children}
    </button>
  );
}
