export default function Hero() {
  return (
    <section className="pt-6">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Automate your property workflows
            <span className="text-brand-light"> with AI.</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Propertia Automation helps landlords, agencies, and property
            managers streamline operations using AI and cloud automation.
          </p>
        </div>
      </div>
    </section>
  );
}
