export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-6 py-3 rounded font-semibold transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
