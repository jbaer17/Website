// src/components/ui/card.jsx
export function Card({ children }) {
  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}
    >
      {children}
    </div>
  )
}
