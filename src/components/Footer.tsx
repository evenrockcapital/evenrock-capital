import { socials } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[13px] tracking-wide text-stone-300">
          &copy; {new Date().getFullYear()} Evenrock Capital
        </span>
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-stone-900 transition-colors duration-300"
              title={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
