export default function RivetedSeam({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-4 justify-center px-8 py-2 ${className}`}
    >
      <Rivet />
      <Rivet />
      <div className="flex-1 h-px bg-white/[0.08]" />
      <Rivet />
      <Rivet />
      <div className="flex-1 h-px bg-white/[0.08]" />
      <Rivet />
      <Rivet />
    </div>
  );
}

function Rivet() {
  return (
    <span
      className="block w-[4px] h-[4px] rounded-full shrink-0"
      style={{
        backgroundColor: "#2a5436",
        boxShadow:
          "inset 0 1px 1px rgba(255,255,255,0.1), 0 1px 1px rgba(0,0,0,0.3)",
      }}
    />
  );
}
