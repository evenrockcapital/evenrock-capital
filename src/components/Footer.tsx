import { socials } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Simple divider */}
      <div className="max-w-6xl mx-auto px-8">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
          }}
        />
      </div>

      {/* Footer content */}
      <div className="bg-black/10 py-6">
        <div className="max-w-6xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[13px] tracking-wide text-white/20">
            &copy; {new Date().getFullYear()} Evenrock Capital
          </span>
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/20 hover:text-[#d4a843] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4a843]"
                title={s.name}
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
