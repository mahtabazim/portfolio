import Image from "next/image";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PeerlistIcon,
  XIcon,
} from "../components/icons";

const socials = [
  {
    href: "https://github.com/mahtabazim",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://x.com/themahtabazim",
    label: "X (Twitter)",
    icon: XIcon,
  },
  {
    href: "https://www.linkedin.com/in/mahtabazim/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "https://peerlist.io/mahtabazim",
    label: "Peerlist",
    icon: PeerlistIcon,
  },
  {
    href: "mailto:mdmahtab9006@gmail.com",
    label: "Email",
    icon: MailIcon,
  },
];

const projects = [
  {
    number: "01",
    title: "dusty-pages",
    description:
      "A community book exchange platform. Sell used books to readers near you, earn coins, and spend them on books from the community, with escrow-protected meetups.",
    tech: ["Next.js", "TypeScript"],
    href: "https://dustypages.vercel.app/",
    repo: "https://github.com/mahtabazim/dusty-pages",
    image: "/dusty-pages.png",
  },
  {
    number: "02",
    title: "teabrew",
    description:
      "Find tea rooms and cafés within walking distance, then brew what you liked at home with six recipe guides covering ratios, water temperatures, and steeping timers. Runs entirely in the browser on OpenStreetMap data, no account needed.",
    tech: ["Next.js", "TypeScript", "Leaflet"],
    href: "https://teabrew.vercel.app/",
    repo: "https://github.com/mahtabazim/teabrew",
    image: "/teabrew.png",
  },
];

const skills = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "MySQL", "REST APIs"],
  },
  {
    group: "Languages",
    items: ["Java", "C", "SQL"],
  },
  {
    group: "Tools",
    items: ["Git", "Linux", "VS Code"],
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md Mahtab Alam",
  alternateName: ["mahtabazim", "themahtabazim"],
  url: "https://mahtabazim.me",
  image: "https://mahtabazim.me/profile.jpg",
  jobTitle: "Full-stack Developer",
  email: "mailto:mdmahtab9006@gmail.com",
  sameAs: [
    "https://github.com/mahtabazim",
    "https://x.com/themahtabazim",
    "https://www.threads.com/@themahtabazim",
    "https://www.linkedin.com/in/mahtabazim/",
    "https://peerlist.io/mahtabazim",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "MySQL",
    "Tailwind CSS",
  ],
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 font-mono text-sm font-medium uppercase tracking-widest text-muted">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <main className="mx-auto max-w-2xl px-6">
        {/* Hero */}
        <section className="pb-20 pt-24">
          <div className="relative mb-8 h-20 w-20 overflow-hidden rounded-full border border-border">
            <Image
              src="/profile.jpg"
              alt="Md Mahtab Alam"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Md Mahtab Alam
          </h1>
          <p className="mt-2 text-lg text-muted">
            Full-stack Developer
          </p>
          <p className="mt-6 max-w-lg leading-relaxed text-muted">
            I build web apps with React and Next.js, the kind that load fast,
            make sense at a glance, and quietly do their job. Comfortable
            anywhere from the database to the terminal.
          </p>
          <ul className="mt-8 flex items-center gap-4">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 border-t border-border py-20">
          <SectionHeading>About</SectionHeading>
          <div className="space-y-4 leading-relaxed text-muted">
            <p>
              Hi, I&apos;m Mahtab, a developer who enjoys building for the
              web. Most of my time goes into React and Next.js on the
              frontend, with Node.js and MySQL doing the quiet work behind the
              scenes. I&apos;ve shipped things like a community book exchange
              and a tea room finder, mostly because I wanted them to exist.
            </p>
            <p>
              Away from the browser, I like keeping my fundamentals honest:
              data structures in C, a good amount of Java, and enough Linux to
              feel at home in a terminal. If an interface is simple, fast, and
              stays out of your way, chances are I enjoyed making it.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-20 border-t border-border py-20"
        >
          <SectionHeading>Projects</SectionHeading>
          <ul className="space-y-4">
            {projects.map((project) => (
              <li
                key={project.number}
                className="group relative overflow-hidden rounded-lg border border-border transition-colors hover:bg-surface"
              >
                {project.image && (
                  <div className="relative aspect-[1200/630] border-b border-border">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(min-width: 672px) 624px, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-muted">
                      {project.number}
                    </span>
                    <h3 className="font-medium">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="after:absolute after:inset-0 group-hover:underline group-hover:underline-offset-4"
                      >
                        {project.title}
                      </a>
                    </h3>
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="relative z-10 ml-auto text-muted transition-colors hover:text-foreground"
                      >
                        <GitHubIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="scroll-mt-20 border-t border-border py-20"
        >
          <SectionHeading>Skills</SectionHeading>
          <dl className="space-y-6">
            {skills.map(({ group, items }) => (
              <div
                key={group}
                className="flex flex-col gap-2 sm:flex-row sm:items-baseline"
              >
                <dt className="w-28 shrink-0 font-mono text-sm text-muted">
                  {group}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border px-2.5 py-1 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-8 text-sm text-muted">
          <p>© {new Date().getFullYear()} Md Mahtab Alam</p>
          <a
            href="#top"
            className="transition-colors hover:text-foreground"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
