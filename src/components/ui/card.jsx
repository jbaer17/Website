export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-lg border border-slate-800 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
