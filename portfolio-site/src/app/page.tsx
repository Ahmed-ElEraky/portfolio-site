export default function Home() {
  return (
    <main className="flex-1">
      {/* PRE-FLIGHT / HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 relative overflow-hidden">
        <p className="font-mono text-sm text-accent tracking-widest uppercase mb-6">
          SYSTEMS CHECK — ONLINE
        </p>
        <h1 className="font-sans text-4xl md:text-7xl leading-[1.05] max-w-4xl">
          Engineering judgment, proven on the aircraft.
          <span className="block text-text-secondary">
            Applied to the systems that will run the next one.
          </span>
        </h1>
        <p className="font-mono text-text-secondary text-sm md:text-base mt-8 max-w-xl">
          EASA Part-66 A&amp;C · ECAA B1 &nbsp;|&nbsp; 14+ years line
          maintenance, CAMO &amp; AOG &nbsp;|&nbsp; Builder of AI-powered
          fleet intelligence systems
        </p>
        <div className="mt-12 flex gap-4 font-mono text-sm">
          <a
            href="#contact"
            className="px-6 py-3 bg-accent text-background rounded-md hover:opacity-90 transition"
          >
            Contact
          </a>
          <a
            href="#case-studies"
            className="px-6 py-3 border border-text-secondary/30 rounded-md hover:border-accent transition"
          >
            View case studies
          </a>
        </div>
      </section>

      {/* PLACEHOLDER FOR NEXT PHASES */}
      <section
        id="case-studies"
        className="min-h-[50vh] flex items-center justify-center border-t border-panel"
      >
        <p className="font-mono text-text-secondary">
          [ Taxi / Takeoff / Cruise sections go here — About, Case Studies, Certifications ]
        </p>
      </section>

      <section
        id="contact"
        className="min-h-[40vh] flex items-center justify-center border-t border-panel"
      >
        <p className="font-mono text-text-secondary">[ Landing / Contact section ]</p>
      </section>
    </main>
  );
}
