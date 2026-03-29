import { socials } from "@/data/socials";

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

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Rivet rail — like the structural seam at the base of the Green Monster */}
      <div className="flex items-center justify-center gap-5 px-8 py-2 bg-black/15">
        <Rivet /><Rivet /><Rivet /><Rivet /><Rivet />
        <Rivet /><Rivet /><Rivet /><Rivet /><Rivet />
        <Rivet /><Rivet /><Rivet /><Rivet /><Rivet />
        <Rivet /><Rivet /><Rivet /><Rivet /><Rivet />
        <Rivet />
      </div>

      {/* Footer content — dark recessed panel */}
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
          {/* 310 — Fenway's left field distance marker */}
          <span
            className="font-[family-name:var(--font-eb-garamond)] italic text-[16px] hidden sm:block"
            style={{ color: "rgba(244,238,213,0.07)" }}
            title="Left field distance at Fenway Park"
          >
            310
          </span>
        </div>
      </div>
    </footer>
  );
}
