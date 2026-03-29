export default function SubstackFeedSkeleton() {
  return (
    <div className="mt-12 flex flex-col gap-6">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="border-l-2 border-[#d4a843]/10 pl-6 py-2 animate-pulse"
        >
          <div className="h-3 w-24 bg-white/5 rounded mb-2" />
          <div className="h-5 w-64 bg-white/5 rounded mb-3" />
          <div className="h-4 w-full max-w-md bg-white/5 rounded" />
        </div>
      ))}
    </div>
  );
}
