export default function RivetedSeam({ className = "" }: { className?: string }) {
  return (
    <div className={`max-w-6xl mx-auto px-8 ${className}`}>
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />
    </div>
  );
}
