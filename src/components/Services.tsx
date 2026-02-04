const services = [
  {
    title: "AI tenant support",
    description:
      "24/7 AI assistant to answer tenant questions and log issues."
  },
  {
    title: "Workflow automation",
    description:
      "Automate repetitive tasks like reminders, emails, and updates."
  },
  {
    title: "Custom integrations",
    description:
      "Connect to your CRM, WhatsApp, email, and property management tools."
  },
  {
    title: "Analytics & insights",
    description:
      "Track response times, common issues, and operational bottlenecks."
  }
];

export default function Services() {
  return (
    <section id="services" className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">
        What Propertia Automation can do for you
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-4"
          >
            <h3 className="text-sm font-semibold mb-1">{s.title}</h3>
            <p className="text-xs text-slate-300">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
