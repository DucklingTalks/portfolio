import { StrictMode, useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBriefcase,
  faCertificate,
  faCheck,
  faCode,
  faCopy,
  faDatabase,
  faFileExport,
  faGraduationCap,
  faMugHot,
  faTerminal,
  faServer,
  faPersonHiking,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAws,
  faGitAlt,
  faGithub,
  faJs,
  faLinkedin,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./styles.css";
import profileImage from "../resources/images/perfil.jpeg";
import developerCvEnglish from "../resources/cv/Developer - English.pdf";
import developerCvSpanish from "../resources/cv/Developer - Español.pdf";

const links = {
  github: "https://github.com/DucklingTalks",
  linkedin: "https://www.linkedin.com/in/jonattan-lima/",
  email: "jonattanlima@gmail.com",
};

const content = {
  en: {
    nav: ["About", "Experience", "Projects", "Education", "Contact"],
    roles: ["Backend Developer", "Data Engineer"],
    eyebrow: "Backend systems · data workflows · meaningful outcomes",
    intro:
      "Before thinking about how to write the code, I like to understand what problem we're actually trying to solve.",
    download: "Download Resume",
    copy: "Copy email",
    copied: "Copied",
    scroll: "Scroll to explore",
    aboutTitle: "About me",
    about:
      "I like to understand the problem before writing code.\nIt's not just about building something that works, but also about thinking about how it is designed, how it scales, how it is maintained, and what information it can generate to support better decisions.\nFor me, a good solution is one that someone else can pick up tomorrow and understand without needing to ask the person who wrote it.",
    experienceTitle: "Experience",
    experienceKicker:
      "Throughout my career, I've mainly worked with data and solution development, and one thing I've always enjoyed is sitting down with users or clients, understanding what they actually need, and translating that problem into a technical solution that fits both the business context and the reality of implementation.",
    experience: [
      {
        role: "Data Integrity Analyst",
        company: "Hinweiss",
        date: "Oct 2023 — Apr 2026",
        text: "Developed backend solutions for system integration and real-time data synchronization\nBuilt internal tools and dashboards for business data consumption\nWorked directly with stakeholders to understand their needs and translate them into technical solutions.",
      },
      {
        role: "RPA Provisioning",
        company: "Asignet Technology DNA",
        date: "Mar 2022 — Oct 2023",
        text: "Developed automation for operational workflows and financial data processing.\nImproved internal processes through tooling and technical documentation, reducing new-hire onboarding time by 50%.",
      },
    ],
    featuredTitle: "Featured projects",
    secondaryTitle: "Secondary projects",
    projectsKicker: "Selected work and ideas worth making visible.",
    projects: [
      {
        title: "Trivia",
        github_url: "https://github.com/DucklingTalks/Trivia",
        demo_url: "https://trivia-frontend-f77n.onrender.com",
        type: "Featured project",
        text: "Project description and impact to be completed.",
        featured: true,
      },
      {
        title: "gestjobs",
        github_url: "https://github.com/DucklingTalks/gestjobs",
        demo_url:
          "https://gestjobs-git-feature-gestjobs-mvp-jonattan-limas-projects.vercel.app/dashboard",
        type: "Featured project",
        text: "Project description and impact to be completed.",
        featured: true,
      },
      {
        title: "Partes",
        github_url: "https://github.com/DucklingTalks/Partes",
        demo_url: "",
        type: "Featured project",
        text: "Project description and impact to be completed.",
        featured: true,
      },
      {
        title: "Solar System Background",
        github_url: "https://github.com/DucklingTalks/solar_system_background",
        demo_url: "",
        type: "Secondary project",
        text: "Project description and technologies to be completed.",
        featured: false,
      },
      {
        title: "P1-Obligatorio",
        github_url: "https://github.com/DucklingTalks/P1-Obligatorio",
        demo_url: "",
        type: "Secondary project",
        text: "Project description and technologies to be completed.",
        featured: false,
      },
    ],
    viewGithub: "View repository",
    viewDemo: "View demo",
    status: "Details to be completed",
    educationTitle: "Formal education",
    educationName: "Information Technology Analyst",
    educationDate: "Mar 2023 — Apr 2026",
    university: "Universidad ORT · Web Programmer, completed Jul 2024",
    thesis:
      "Final project: “Computer Vision System for Container Seals Recognition”",
    coursesTitle: "Courses & certifications",
    certifications: [
      "GeneXus 18 Analyst",
      "GeneXus 18 Jr Analyst",
      "MySQL and MariaDB — Platzi",
      "Introduction to Programming — OpenBootcamp",
      "Functional Programming with Java SE — Platzi",
      "Object-Oriented Java SE — Platzi",
      "Introduction to Java SE — Platzi",
      "Basic JavaScript — Platzi",
      "Professional Git and GitHub — Platzi",
      "Junior GeneXus 17 Analyst",
    ],
    skillsTitle: "Tools I work with",
    contactTitle: "Let's build something useful.",
    contactText:
      "Have a backend, data, or automation challenge? I would be glad to hear about it.",
    getInTouch: "Get in touch",
    footer: "Designed and built with care.",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  es: {
    nav: ["Sobre mí", "Experiencia", "Proyectos", "Educación", "Contacto"],
    roles: ["Backend Developer", "Data Engineer"],
    eyebrow: "Sistemas backend · flujos de datos · resultados concretos",
    intro:
      "Antes de pensar en cómo escribir el código, me gusta entender cuál es el problema real que estamos tratando de resolver.",
    download: "Descargar CV",
    copy: "Copiar email",
    copied: "Copiado",
    scroll: "Deslizá para explorar",
    aboutTitle: "Sobre mí",
    about:
      "Me gusta entender el problema antes de escribir código.\nNo se trata solo de construir algo que funcione, sino también de pensar en cómo está diseñado, cómo escala, cómo se mantiene y qué información puede generar para respaldar mejores decisiones.\nPara mí, una buena solución es aquella que otra persona puede retomar mañana y entender sin tener que preguntarle a quien la escribió.",
    experienceTitle: "Experiencia",
    experienceKicker:
      "A lo largo de mi carrera, he trabajado principalmente con datos y desarrollo de soluciones, y algo que siempre disfruto es sentarme con usuarios o clientes, entender qué necesitan realmente y traducir ese problema en una solución técnica que se adapte tanto al contexto del negocio como a la realidad de su implementación.",
    experience: [
      {
        role: "Data Integrity Analyst",
        company: "Hinweiss",
        date: "Oct 2023 — Abr 2026",
        text: "Desarrollé soluciones backend para la integración de sistemas y la sincronización de datos en tiempo real\nConstruí herramientas internas y dashboards para el consumo de datos del negocio\nTrabajé directamente con las partes interesadas para comprender sus necesidades y traducirlas en soluciones técnicas.",
      },
      {
        role: "RPA Provisioning",
        company: "Asignet Technology DNA",
        date: "Mar 2022 — Oct 2023",
        text: "Desarrollé automatizaciones para procesos operativos y procesamiento de datos financieros.\nMejoré procesos internos con herramientas y documentación técnica, reduciendo un 50% el tiempo de onboarding.",
      },
    ],
    featuredTitle: "Proyectos destacados",
    secondaryTitle: "Proyectos secundarios",
    projectsKicker: "Trabajos e ideas que vale la pena hacer visibles.",
    projects: [
      {
        title: "Trivia",
        github_url: "https://github.com/DucklingTalks/Trivia",
        demo_url: "",
        type: "Proyecto destacado",
        text: "Descripción e impacto por completar.",
        featured: true,
      },
      {
        title: "gestjobs",
        github_url: "https://github.com/DucklingTalks/gestjobs",
        demo_url: "",
        type: "Proyecto destacado",
        text: "Descripción e impacto por completar.",
        featured: true,
      },
      {
        title: "Partes",
        github_url: "https://github.com/DucklingTalks/Partes",
        demo_url: "",
        type: "Proyecto destacado",
        text: "Descripción e impacto por completar.",
        featured: true,
      },
      {
        title: "Solar System Background",
        github_url: "https://github.com/DucklingTalks/solar_system_background",
        demo_url: "",
        type: "Proyecto secundario",
        text: "Descripción y tecnologías por completar.",
        featured: false,
      },
      {
        title: "P1-Obligatorio",
        github_url: "https://github.com/DucklingTalks/P1-Obligatorio",
        demo_url: "",
        type: "Proyecto secundario",
        text: "Descripción y tecnologías por completar.",
        featured: false,
      },
    ],
    viewGithub: "Ver repositorio",
    viewDemo: "Ver demo",
    status: "Detalles por completar",
    educationTitle: "Educación formal",
    educationName: "Analista en Tecnologías de la Información",
    educationDate: "Mar 2023 — Abr 2026",
    university: "Universidad ORT · Programador Web, finalizado en jul 2024",
    thesis:
      "Proyecto final: “Reconocimiento de precintos con visión artificial”",
    coursesTitle: "Cursos y certificaciones",
    certifications: [
      "GeneXus 18 Analyst",
      "GeneXus 18 Jr Analyst",
      "MySQL y MariaDB — Platzi",
      "Introducción a la Programación — OpenBootcamp",
      "Programación Funcional con Java SE — Platzi",
      "Java SE Orientado a Objetos — Platzi",
      "Introducción a Java SE — Platzi",
      "JavaScript Básico — Platzi",
      "Git y GitHub — Platzi",
      "Analista Junior GeneXus 17",
    ],
    skillsTitle: "Tecnologías que uso",
    contactTitle: "Construyamos algo útil.",
    contactText:
      "¿Tenés un desafío de backend, datos o automatización? Me gustaría conocerlo.",
    getInTouch: "Contactarme",
    footer: "Diseñado y construido con dedicación.",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
};

const skills = [
  ["Java", faMugHot],
  ["Python", faPython],
  ["C# / .NET", faCode],
  ["JavaScript", faJs],
  ["React", faReact],
  ["SQL", faDatabase],
  ["BigQuery", faServer],
  ["AWS", faAws],
  ["Git / GitHub", faGitAlt],
  ["Bash", faTerminal],
];

function App() {
  const [lang, setLang] = useState(() =>
    navigator.language?.toLowerCase().startsWith("es") ? "es" : "en",
  );
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState(content[lang].roles[0]);
  const [deleting, setDeleting] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const t = useMemo(() => content[lang], [lang]);
  const aboutParagraphs = t.about.split("\n").filter(Boolean);
  const visibleCerts = showAllCerts
    ? t.certifications
    : t.certifications.slice(0, 5);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const target = content[lang].roles[roleIndex];
    const delay = deleting ? 55 : roleText === target ? 1800 : 105;
    const timer = setTimeout(() => {
      if (!deleting && roleText === target) setDeleting(true);
      else if (deleting && roleText === "") {
        setRoleIndex((roleIndex + 1) % 2);
        setDeleting(false);
      } else
        setRoleText(
          deleting
            ? target.slice(0, roleText.length - 1)
            : target.slice(0, roleText.length + 1),
        );
    }, delay);
    return () => clearTimeout(timer);
  }, [roleText, deleting, roleIndex, lang]);
  useEffect(() => {
    setRoleIndex(0);
    setRoleText(content[lang].roles[0]);
    setDeleting(false);
  }, [lang]);

  async function copyEmail() {
    await navigator.clipboard?.writeText(links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }
  const cv = lang === "es" ? developerCvSpanish : developerCvEnglish;
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Jonattan Lima home">
          JL<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          {t.nav.map((item, i) => (
            <a
              href={
                [
                  "#about",
                  "#experience",
                  "#projects",
                  "#education",
                  "#contact",
                ][i]
              }
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>
        <button
          className="language"
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          aria-label={`Current language: ${lang === "en" ? "English" : "Spanish"}. Switch to ${lang === "en" ? "Spanish" : "English"}`}
          aria-pressed={lang === "es"}
        >
          <span
            className={
              lang === "es" ? "language-option active" : "language-option"
            }
          >
            ES
          </span>
          <span
            className={
              lang === "en" ? "language-option active" : "language-option"
            }
          >
            EN
          </span>
        </button>
      </header>
      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">01 / {t.eyebrow}</p>
            <h1>
              Jonattan
              <br />
              <em>Lima.</em>
            </h1>
            <p className="role">
              <span>{roleText}</span>
              <b aria-hidden="true">|</b>
            </p>
            <p className="intro">{t.intro}</p>
            <div className="hero-actions">
              <button className="email" onClick={copyEmail}>
                <span>{links.email}</span>
                <span className="copy-icon" aria-hidden="true">
                  <FontAwesomeIcon
                    icon={copied ? faCheck : faCopy}
                    aria-hidden="true"
                  />
                </span>
                <span className="sr-only">{copied ? t.copied : t.copy}</span>
              </button>
              <a className="button primary cv-download" href={cv} download>
                {t.download}{" "}
                <FontAwesomeIcon icon={faFileExport} aria-hidden="true" />
              </a>
            </div>
            <div className="socials">
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
                {t.linkedin}
              </a>
              <a href={links.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                {t.github}
              </a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-ring" />
            <img className="portrait" src={profileImage} alt="Jonattan Lima" />
          </div>
          <a className="scroll" href="#about">
            <span className="scroll-line" />
            {t.scroll}
          </a>
        </section>
        <Section id="about" number="02" title={t.aboutTitle}>
          <div className="about-layout">
            <div className="about-copy">
              {aboutParagraphs.map((paraph, index) => (
                <p
                  key={`${paraph.slice(0, 12)}-${index}`}
                  className="large-copy"
                >
                  {paraph}
                </p>
              ))}
            </div>
            <aside className="skill-list">
              <span>{t.skillsTitle}</span>
              <p className="skill-items">
                {skills.map(([name, icon]) => (
                  <span className="skill-item" key={name}>
                    <FontAwesomeIcon icon={icon} aria-hidden="true" />
                    {name}
                  </span>
                ))}
              </p>
            </aside>
          </div>
        </Section>
        <Section
          id="experience"
          number="03"
          title={t.experienceTitle}
          kicker={t.experienceKicker}
        >
          <div className="timeline">
            {t.experience.map((item, i) => (
              <article className="timeline-item" key={item.company}>
                <span className="timeline-index">
                  <FontAwesomeIcon icon={faBriefcase} aria-hidden="true" />
                </span>
                <div>
                  <div className="item-heading">
                    <h3>
                      {item.role} <span>/ {item.company}</span>
                    </h3>
                    <time>{item.date}</time>
                  </div>
                  {item.text.split("\n").map((line, index) => (
                    <p key={`${line.slice(0, 12)}-${index}`}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>
        <Section
          id="projects"
          number="04"
          title={t.featuredTitle}
          kicker={t.projectsKicker}
        >
          <div className="project-grid">
            {t.projects
              .filter((p) => p.featured)
              .map((project, i) => (
                <Project
                  key={project.title}
                  project={project}
                  index={i}
                  t={t}
                />
              ))}
          </div>
          <h2 className="subsection-title">{t.secondaryTitle}</h2>
          <div className="project-grid secondary">
            {t.projects
              .filter((p) => !p.featured)
              .map((project, i) => (
                <Project
                  key={project.title}
                  project={project}
                  index={i + 2}
                  t={t}
                />
              ))}
          </div>
        </Section>
        <Section id="education" number="05" title={t.educationTitle}>
          <article className="education-card">
            <span className="timeline-index">
              <FontAwesomeIcon icon={faGraduationCap} aria-hidden="true" />
            </span>
            <div>
              <div className="item-heading">
                <h3>{t.educationName}</h3>
                <time>{t.educationDate}</time>
              </div>
              <p>{t.university}</p>
              <strong>{t.thesis}</strong>
            </div>
          </article>
          <div className="certifications">
            <h2>
              {t.coursesTitle} ({t.certifications.length})
            </h2>
            {visibleCerts.map((cert, i) => (
              <div className="cert" key={cert}>
                <span className="cert-number">0{i + 1}</span>
                <p>{cert}</p>
                <FontAwesomeIcon
                  className="cert-icon"
                  icon={faCertificate}
                  aria-hidden="true"
                />
              </div>
            ))}
            {!showAllCerts && t.certifications.length > 5 && (
              <button
                type="button"
                className="show-more"
                onClick={() => setShowAllCerts(true)}
              >
                {lang === "es" ? "Mostrar más" : "Show more"}
              </button>
            )}
          </div>
        </Section>
        <section id="contact" className="contact">
          <p className="eyebrow">06 / {t.contactTitle}</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <a className="button primary" href={`mailto:${links.email}`}>
            {t.getInTouch}{" "}
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              aria-hidden="true"
            />
          </a>
          <footer>
            <span>© 2026 Jonattan Lima</span>
            <span>{t.footer}</span>
          </footer>
        </section>
      </main>
    </>
  );
}
function Project({ project, index, t }) {
  return (
    <article className="project-card">
      <span className="project-number">0{index + 1}</span>
      <p className="project-type">{project.type}</p>
      <h3>{project.title}</h3>
      <p>{project.text}</p>
      <span className="project-status">{t.status}</span>
      <div className="project-links">
        <a href={project.github_url} target="_blank" rel="noreferrer">
          {t.viewGithub} <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
        </a>
        {project.demo_url && (
          <a href={project.demo_url} target="_blank" rel="noreferrer">
            {t.viewDemo}{" "}
            <FontAwesomeIcon icon={faPersonHiking} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
function Section({ id, number, title, kicker, children }) {
  return (
    <section id={id} className="section">
      <div className="section-head">
        <span className="section-number">{number}</span>
        <div>
          <h2>{title}</h2>
          {kicker && <p>{kicker}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
