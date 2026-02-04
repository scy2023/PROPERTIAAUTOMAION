export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-4 text-[11px] text-slate-400 flex justify-between">
        <p>© {new Date().getFullYear()} Propertia Automation</p>
        <p>Built with Next.js, TypeScript & AI‑ready APIs</p>
      </div>
    </footer>
  );
}
