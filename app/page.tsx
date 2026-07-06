'use client'
import React, { useEffect, useRef, useState } from "react";

/**
 * Md Mahtab Alam — Front-end Developer
 * Converted from static HTML/CSS to TSX + Tailwind CSS.
 *
 * Notes on the conversion:
 * - All custom CSS (colors, easing curves, reveal-on-scroll animation) is
 *   reproduced with Tailwind utility classes + a small amount of arbitrary-value
 *   syntax (e.g. duration-[0.9s], ease-[cubic-bezier(...)]) since Tailwind has
 *   no built-in token for this exact easing curve.
 * - The IntersectionObserver reveal behavior from the <script> tag is now a
 *   `useReveal` hook attached to each section that fades/slides in on scroll,
 *   and respects prefers-reduced-motion just like the original.
 * - Global scroll-behavor: smooth and selection color are set via a small
 *   <style> block since Tailwind doesn't have first-class classes for either.
 */

// ---------- Reveal-on-scroll hook (mirrors the IntersectionObserver script) ----------
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ---------- Small reusable bits ----------

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

function IconGitHub({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.19-3.37-1.19-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49C19.14 20.61 22 16.77 22 12.25 22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function IconLinkedIn({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function IconPeerlist({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 9.5 12 4l9 5.5v5L12 20l-9-5.5v-5Z" />
      <path d="M3 9.5 12 15l9-5.5" />
      <path d="M12 15v5" />
    </svg>
  );
}

function IconArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className={`text-[13px] font-medium px-[18px] py-[9px] border border-[#dedede] rounded-full text-[#2b2b2b] transition-[border-color,transform] duration-[0.35s] ${EASE} hover:border-black hover:-translate-y-0.5`}>
      {children}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-semibold tracking-[0.5px] uppercase px-3 py-[5px] bg-[#f2f2f2] rounded-full text-[#2b2b2b]">
      {children}
    </span>
  );
}

function StatBox({ num, label }: { num: string; label: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`border border-[#dedede] rounded-2xl p-7 mt-4 first:mt-0 transition-all duration-700 ${EASE} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="text-[32px] font-bold tracking-[-1px] mb-1">{num}</div>
      <div className="text-[13px] text-[#5c5c5c] font-medium">{label}</div>
    </div>
  );
}

interface Project {
  index: string;
  glyph: string;
  tags: string[];
  title: string;
  description: string;
  href: string;
}

function ProjectCard({ project }: { project: Project }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`border border-[#dedede] rounded-[20px] p-10 mb-6 last:mb-0 grid grid-cols-1 md:grid-cols-2 gap-10 items-center transition-all duration-[0.45s] ${EASE} hover:border-black hover:-translate-y-[5px] hover:shadow-[0_16px_32px_-20px_rgba(0,0,0,0.25)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: visible ? "0.05s" : "0s" }}
    >
      <div className="aspect-[16/11] bg-[#f2f2f2] rounded-2xl flex items-center justify-center border border-[#dedede] overflow-hidden relative order-1 md:order-none">
        <span className="absolute top-4 left-[18px] text-xs font-semibold text-[#8f8f8f]">
          {project.index}
        </span>
        <span className="text-[64px] font-extrabold text-[#e4e4e4] tracking-[-3px]">
          {project.glyph}
        </span>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 mb-[18px]">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3 tracking-[-0.5px]">
          {project.title}
        </h3>
        <p className="text-[15px] text-[#5c5c5c] mb-[22px]">
          {project.description}
        </p>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group inline-flex items-center gap-2 text-sm font-semibold border-b border-black pb-0.5 transition-[gap] duration-[0.35s] ${EASE} hover:gap-[11px]`}
        >
          View on GitHub
          <IconArrowUpRight
            className={`transition-transform duration-[0.35s] ${EASE} group-hover:translate-x-[3px] group-hover:-translate-y-[3px]`}
          />
        </a>
      </div>
    </div>
  );
}

function SkillCell({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div className="bg-white p-8 px-7">
      <h4 className="text-xs font-semibold tracking-[1px] uppercase text-[#8f8f8f] mb-4">
        {heading}
      </h4>
      <ul className="list-none">
        {items.map((item, i) => (
          <li
            key={item}
            className={`text-[15px] font-medium py-2 ${
              i !== items.length - 1 ? "border-b border-[#f2f2f2]" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------- Section wrapper that applies the reveal treatment ----------
function RevealSection({
  id,
  className = "",
  borderless = false,
  children,
}: {
  id?: string;
  className?: string;
  borderless?: boolean;
  children: React.ReactNode;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-[88px] ${
        borderless ? "" : "border-b border-[#dedede]"
      } transition-all duration-[0.9s] ${EASE} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
      } ${className}`}
    >
      {children}
    </section>
  );
}

// ---------- Main component ----------

const projects: Project[] = [
  {
    index: "01",
    glyph: "TB",
    tags: ["HTML", "CSS", "JavaScript"],
    title: "Teabrew",
    description:
      "A front-end project focused on clean layout and interaction — built to sharpen fundamentals in HTML, CSS and JS.",
    href: "https://github.com/mdmahtab03/teabrew",
  },
  {
    index: "02",
    glyph: "DSA",
    tags: ["C", "Algorithms"],
    title: "DSA Practice",
    description:
      "A running collection of data structures and algorithm problems solved in C — the foundation work behind everything else I build.",
    href: "https://github.com/mdmahtab03/DSA",
  },
  {
    index: "03",
    glyph: "DB",
    tags: ["MySQL", "Database"],
    title: "MySQL Workbook",
    description:
      "Queries, schema design and database exercises — where I practice thinking about data before it hits the front end.",
    href: "https://github.com/mdmahtab03/MYSQL",
  },
];

export default function Portfolio() {
  const strip = useReveal<HTMLDivElement>();

  return (
    <div className="font-['Poppins',sans-serif] bg-white text-[#0a0a0a] leading-relaxed antialiased [scroll-behavior:smooth] selection:bg-black selection:text-white">
      <main>
        {/* HERO */}
        <section className="pt-[56px] pb-12 md:pt-[88px] md:pb-[72px]">
          <div className="max-w-[1080px] mx-auto px-6">
            <h1
              className="text-[38px] md:text-[68px] font-bold tracking-[-1.5px] leading-[1.08] mb-6 opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.05s_forwards]"
            >
              Md Mahtab Alam
            </h1>
            <p className="text-lg text-[#5c5c5c] max-w-[560px] mb-10 font-normal opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.18s_forwards]">
              MCA student and front-end developer who enjoys turning ideas
              into clean, functional interfaces — building with React,
              learning something new every week, and reading in between.
            </p>
            <div className="flex items-center gap-4 md:gap-[18px] flex-wrap opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.28s_forwards]">
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 text-sm font-semibold px-[26px] py-[14px] rounded-full border border-black bg-black text-white transition-[background,color,transform] duration-[0.4s] ${EASE} hover:bg-white hover:text-black hover:-translate-y-0.5`}
              >
                Get in Touch
              </a>
              <div className="flex items-center gap-[10px]">
                <a
                  href="https://github.com/mdmahtab03"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#dedede] text-[#2b2b2b] transition-[border-color,color,transform] duration-[0.35s] ${EASE} hover:border-black hover:text-black hover:-translate-y-0.5`}
                >
                  <IconGitHub />
                </a>
                <a
                  href="https://linkedin.com/in/mdmahtab03"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#dedede] text-[#2b2b2b] transition-[border-color,color,transform] duration-[0.35s] ${EASE} hover:border-black hover:text-black hover:-translate-y-0.5`}
                >
                  <IconLinkedIn />
                </a>
                <a
                  href="https://peerlist.io/mdmahtab03"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Peerlist"
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#dedede] text-[#2b2b2b] transition-[border-color,color,transform] duration-[0.35s] ${EASE} hover:border-black hover:text-black hover:-translate-y-0.5`}
                >
                  <IconPeerlist />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STACK STRIP */}
        <div
          ref={strip.ref}
          className={`border-b border-[#dedede] py-7 overflow-hidden transition-all duration-[0.9s] ${EASE} ${
            strip.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`}
        >
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="flex flex-wrap gap-3">
              <Chip>ReactJS</Chip>
              <Chip>JavaScript</Chip>
              <Chip>NodeJS</Chip>
              <Chip>HTML / CSS</Chip>
              <Chip>TailwindCSS</Chip>
              <Chip>MongoDB</Chip>
              <Chip>Git &amp; GitHub</Chip>
              <Chip>C</Chip>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <RevealSection id="about">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="flex justify-between items-end mb-10 md:mb-[52px] gap-6 flex-wrap">
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-1px]">
                A bit about me
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-start">
              <div>
                <p className="text-[15px] leading-[1.7] text-[#2b2b2b] mb-[18px]">
                  hey, i'm mahtab. doing my MCA right now and building stuff
                  on the side — mostly front-end, sometimes wherever the
                  project takes me.
                </p>
                <p className="text-[15px] leading-[1.7] text-[#2b2b2b] mb-[18px]">
                  started with plain HTML/CSS, got curious, kept going. now
                  it's react most days, some node when a project needs a
                  backend, and honestly a lot of time just stuck on DSA
                  problems trying to get better at the fundamentals.
                </p>
                <p className="text-[15px] leading-[1.7] text-[#2b2b2b]">
                  not big on writing about myself so — just check the
                  projects below, they say more than i can. always down to
                  talk if something here's interesting to you.
                </p>
              </div>
              <div>
                <StatBox num="8+" label="Repositories on GitHub" />
                <StatBox num="MCA" label="Currently pursuing" />
                <StatBox num="24/7" label="Curious & learning" />
              </div>
            </div>
          </div>
        </RevealSection>

        {/* WORK */}
        <RevealSection id="work">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="flex justify-between items-end mb-10 md:mb-[52px] gap-6 flex-wrap">
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-1px]">
                Selected projects
              </h2>
            </div>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </RevealSection>

        {/* SKILLS */}
        <RevealSection id="skills">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="flex justify-between items-end mb-10 md:mb-[52px] gap-6 flex-wrap">
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-1px]">
                What I work with
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#dedede] border border-[#dedede] rounded-[20px] overflow-hidden">
              <SkillCell
                heading="Front-end"
                items={["HTML & CSS", "JavaScript", "ReactJS", "TailwindCSS"]}
              />
              <SkillCell
                heading="Back-end & Data"
                items={["NodeJS", "MongoDB", "MySQL"]}
              />
              <SkillCell
                heading="Tools & Foundations"
                items={["Git & GitHub", "C Programming", "Linux"]}
              />
            </div>
          </div>
        </RevealSection>

        {/* CONTACT */}
        <RevealSection id="contact" borderless className="text-center">
          <div className="max-w-[1080px] mx-auto px-6">
            <h2 className="text-[32px] md:text-[56px] font-bold tracking-[-1.5px] mb-5 max-w-[700px] mx-auto">
              Let's build something together.
            </h2>
            <p className="text-[#5c5c5c] text-base max-w-[460px] mx-auto mb-10">
              Open to front-end roles, internships, and interesting
              projects. Feel free to reach out — I reply fast.
            </p>
            <div className="flex justify-center gap-[14px] flex-wrap mb-14">
              <a
                href="https://linkedin.com/in/mdmahtab03"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-semibold px-[26px] py-[14px] rounded-full border border-black bg-black text-white transition-[background,color,transform] duration-[0.4s] ${EASE} hover:bg-white hover:text-black hover:-translate-y-0.5`}
              >
                Say Hello on LinkedIn
              </a>
              <a
                href="https://github.com/mdmahtab03"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-semibold px-[26px] py-[14px] rounded-full border border-black bg-white text-black transition-[background,color,transform] duration-[0.4s] ${EASE} hover:bg-black hover:text-white hover:-translate-y-0.5`}
              >
                See GitHub
              </a>
            </div>
            <div className="flex justify-center gap-8 flex-wrap text-sm font-medium text-[#5c5c5c]">
              <a
                href="https://github.com/mdmahtab03"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-[7px] transition-colors duration-[0.35s] ${EASE} hover:text-black`}
              >
                <IconGitHub className="w-[17px] h-[17px]" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/mdmahtab03"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-[7px] transition-colors duration-[0.35s] ${EASE} hover:text-black`}
              >
                <IconLinkedIn className="w-[17px] h-[17px]" />
                LinkedIn
              </a>
              <a
                href="https://peerlist.io/mdmahtab03"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-[7px] transition-colors duration-[0.35s] ${EASE} hover:text-black`}
              >
                <IconPeerlist className="w-[17px] h-[17px]" />
                Peerlist
              </a>
            </div>
          </div>
        </RevealSection>
      </main>

      {/* Keyframes not expressible as pure Tailwind utilities */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
}