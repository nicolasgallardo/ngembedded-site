export default function NicolasGallardoConsultingWebsite() {
  const projects = [
    {
      title: "Robotic Hand System",
      subtitle: "Alt-Bionics",
      summary:
        "Delivered a multi-actuator robotic hand from concept to market-ready prototype in about four months, covering hardware, firmware, controls, and integration.",
      bullets: [
        "Custom PCB design and embedded firmware",
        "Real-time multi-finger control",
        "Supported early sales and demos",
      ],
    },
    {
      title: "IoT & Tracking Systems",
      subtitle: "Allosense",
      summary:
        "Built connected hardware for industrial and defense use, including cellular, GPS, BLE, sensor integration, and indoor positioning systems.",
      bullets: [
        "Field-deployed devices",
        "Sub-meter indoor tracking",
        "Battery and system validation platforms",
      ],
    },
    {
      title: "Autonomous Drone Systems",
      subtitle: "Embedded electronics + power architecture",
      summary:
        "Designed embedded electronics, compute carrier boards, and redundant power systems for mission-critical autonomous platforms.",
      bullets: [
        "High-speed IO integration",
        "Redundant power architecture",
        "Reliability-focused design",
      ],
    },
    {
      title: "Medical Device",
      subtitle: "Romet electrolarynx",
      summary:
        "Developed hardware products used by thousands globally, with a focus on manufacturable design, reliability, and production handoff.",
      bullets: [
        "Concept to production",
        "Battery-powered embedded design",
        "Manufacturing coordination",
      ],
    },
  ];

  const services = [
    "End-to-end hardware product development",
    "Production-ready PCB design",
    "Embedded firmware development",
    "System integration across sensors, comms, and power",
    "Manufacturing handoff and productization",
    "Commercial launch support, including Amazon product rollout",
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-neutral-300 px-3 py-1 text-xs tracking-[0.2em] text-neutral-600 uppercase">
              Embedded Systems & Hardware Consultant
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              I build embedded hardware products from concept to production.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
              I help companies turn complex ideas into working, manufacturable
              products across robotics, IoT, embedded systems, and connected
              devices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:ng.embedded@gmail.com"
                className="rounded-2xl bg-neutral-900 px-5 py-3 text-white transition hover:bg-neutral-700"
              >
                Contact
              </a>
              <a
                href="https://www.linkedin.com/in/nicolasgallardoEE"
                className="rounded-2xl border border-neutral-300 px-5 py-3 transition hover:border-neutral-500"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/nicolasgallardo"
                className="rounded-2xl border border-neutral-300 px-5 py-3 transition hover:border-neutral-500"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 p-6 shadow-sm">
            <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              What I deliver
            </div>
            <div className="mt-5 space-y-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-2xl bg-neutral-50 px-4 py-3 text-sm leading-6 text-neutral-700"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-4 md:px-10">
          <div>
            <div className="text-3xl font-semibold">4 mo</div>
            <div className="mt-1 text-sm text-neutral-600">Robotic hand to market-ready prototype</div>
          </div>
          <div>
            <div className="text-3xl font-semibold">End-to-end</div>
            <div className="mt-1 text-sm text-neutral-600">Hardware, firmware, integration, production</div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Global use</div>
            <div className="mt-1 text-sm text-neutral-600">Medical device products used by thousands</div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Amazon</div>
            <div className="mt-1 text-sm text-neutral-600">Direct-to-consumer product launch experience</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Selected work
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Built for real-world use, not just prototypes.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-neutral-200 p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                {project.subtitle}
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                {project.summary}
              </p>
              <div className="mt-6 space-y-2">
                {project.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 text-sm text-neutral-700">
                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10 md:pb-24">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl bg-neutral-900 p-8 text-white shadow-sm">
            <div className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Core skills
            </div>
            <div className="mt-5 grid gap-3 text-sm text-neutral-200 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 px-4 py-3">STM32, C/C++, embedded firmware</div>
              <div className="rounded-2xl bg-white/5 px-4 py-3">Altium, PCB design, DFM</div>
              <div className="rounded-2xl bg-white/5 px-4 py-3">Robotics, IoT, sensor integration</div>
              <div className="rounded-2xl bg-white/5 px-4 py-3">CAN, SPI, I2C, BLE, cellular</div>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 p-8 shadow-sm">
            <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Productization
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              I also build and launch my own hardware products.
            </h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Beyond consulting, I am building a small hardware product line and
              bringing products to direct-to-consumer sale. That experience adds
              practical perspective on manufacturability, packaging, launch, and
              what it takes to ship something customers will actually buy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
