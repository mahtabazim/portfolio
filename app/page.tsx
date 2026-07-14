import Image from "next/image";
import Nav from "../components/nav";
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
    href: "https://x.com/mdmahtab03",
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
      "A community book exchange platform — sell used books to readers near you, earn coins, and spend them on books from the community, with escrow-protected meetups.",
    tech: ["Next.js", "TypeScript"],
    href: "https://dustypages.vercel.app/",
    repo: "https://github.com/mahtabazim/dusty-pages",
  },
  {
    number: "02",
    title: "teabrew",
    description:
      "A web app that helps you find tea shops near you — locate the closest spot for a good cup of chai.",
    tech: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/mahtabazim/teabrew",
  },
  {
    number: "03",
    title: "task-flow",
    description:
      "A simple task management app for organizing your day — create, track, and complete tasks without the clutter.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/mahtabazim",
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
            Full-stack Developer · India
          </p>
          <p className="mt-6 max-w-lg leading-relaxed text-muted">
            I build clean, functional web applications with React and Next.js,
            backed by practical full-stack foundations — from databases to
            Linux.
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
              I&apos;m a developer from India focused on building for the web.
              My core stack is React and Next.js on the frontend, with Node.js
              and MySQL behind it.
            </p>
            <p>
              Beyond the browser, I keep my fundamentals sharp — data
              structures in C, Java programming, and a working comfort with
              Linux. I care about simple, minimal interfaces that do their job
              without getting in the way.
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
                className="group relative rounded-lg border border-border p-6 transition-colors hover:bg-surface"
              >
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

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-20 border-t border-border py-20"
        >
          <SectionHeading>Contact</SectionHeading>
          <p className="max-w-lg leading-relaxed text-muted">
            Open to interesting projects and opportunities. The fastest way to
            reach me is email.
          </p>
          <a
            href="mailto:mdmahtab9006@gmail.com"
            className="mt-6 inline-block rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            mdmahtab9006@gmail.com
          </a>
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
