import { StrictMode, useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
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
        demo_url: "",
        type: "Featured project",
        text: "Project description and impact to be completed.",
        featured: true,
      },
      {
        title: "gestjobs",
        github_url: "https://github.com/DucklingTalks/gestjobs",
        demo_url: "",
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
      "Me gusta sentarme con un usuario, entender el problema real que tiene y convertirlo en una solución que tenga sentido.\nEstoy interesado en construir software pensado, mantenible y, cuando es posible, que transforme procesos y datos en mejores decisiones.",
    experienceTitle: "Experiencia",
    experienceKicker:
      "Me gusta entender el problema antes de escribir código. A lo largo de mi carrera, he trabajado principalmente con datos y desarrollo de soluciones, y algo que siempre disfruto es sentarme con usuarios o clientes para entender realmente qué necesitan y transformar ese problema en una solución técnica que tenga sentido tanto para el negocio como para el contexto en el que se implementará. Me interesa especialmente convertir procesos manuales o mal definidos en soluciones más claras, simples y medibles. No se trata solo de construir algo que funcione, sino también de pensar cómo está diseñado, cómo escala, cómo se mantiene y qué información puede generar para tomar mejores decisiones. Cuando desarrollo software, presto mucha atención a la arquitectura, la lógica de negocio, las integraciones y, sobre todo, a mantener el código claro y mantenible. Para mí, una buena solución también es aquella que otra persona puede recoger mañana y entender sin tener que preguntarle al que la escribió. Mi experiencia como Data Engineer y Data Analyst me ha dado una perspectiva que intento llevar al desarrollo de software: entender los sistemas no solo por cómo funcionan, sino también por qué información generan y cómo esa información puede resultar útil. También incorporo herramientas de IA en mi proceso de desarrollo para investigar, documentar, iterar y construir soluciones más rápido sin perder de vista la calidad. En última instancia, me gusta llegar a ese punto en el que un problema de negocio se convierte en una solución técnica concreta, bien pensada y fácil de entender.",
    experience: [
      {
        role: "Data Integrity Analyst",
        company: "Hinweiss",
        date: "Oct 2023 — Abr 2026",
        text: "Desarrollo soluciones backend para integración de sistemas y sincronización de datos entre múltiples fuentes.\nDiseño estructuras de datos y flujos de procesamiento, creo dashboards internos y trabajo directamente con stakeholders.",
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

function Icon({ name }) {
  if (name === "github")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.4 18 4.7 18 4.7c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.7 1 .7 2v2.5c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .7Z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 3.5h-17a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-15a1 1 0 0 0-1-1ZM8 18H5v-8h3v8ZM6.5 8.9A1.75 1.75 0 1 1 6.5 5.4a1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-3.9c0-.9 0-2-1.3-2s-1.5 1-1.5 1.9V18h-3v-8h2.9v1.1h.1c.4-.8 1.4-1.3 2.5-1.3 3 0 3.3 2 3.3 4.5V18Z" />
    </svg>
  );
}

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
          aria-label={`Switch to ${lang === "en" ? "Spanish" : "English"}`}
        >
          {lang === "en" ? "ES" : "EN"} <span>↗</span>
        </button>
      </header>
      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">01 / {t.eyebrow}</p>
            <h1>
              Jonattan
              <br />
              <em>Lima</em>
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
                  {copied ? "✓" : "⧉"}
                </span>
                <span className="sr-only">{copied ? t.copied : t.copy}</span>
              </button>
              <a className="button primary" href={cv} download>
                {t.download} <span>↓</span>
              </a>
            </div>
            <div className="socials">
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" />
                {t.linkedin}
              </a>
              <a href={links.github} target="_blank" rel="noreferrer">
                <Icon name="github" />
                {t.github}
              </a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-ring" />
            <img
              className="portrait"
              src={profileImage}
              alt="Jonattan Lima"
            />
          </div>
          <a className="scroll" href="#about">
            <span className="scroll-line" />
            {t.scroll}
          </a>
        </section>
        <Section id="about" number="02" title={t.aboutTitle}>
          {aboutParagraphs.map((paraph, index) => (
            <p key={`${paraph.slice(0, 12)}-${index}`} className="large-copy">
              {paraph}
            </p>
          ))}
          <div className="skill-list">
            <span>{t.skillsTitle}</span>
            <p>
              Java <i /> Python <i /> C# / .NET <i /> JavaScript <i /> React{" "}
              <i /> SQL <i /> PostgreSQL <i /> AWS
            </p>
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
                <span className="timeline-index">🟠</span>
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
            <span className="timeline-index">01</span>
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
                <span>0{i + 1}</span>
                <p>{cert}</p>
                <span>↗</span>
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
            {t.getInTouch} <span>↗</span>
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
          {t.viewGithub} <span>↗</span>
        </a>
        {project.demo_url && (
          <a href={project.demo_url} target="_blank" rel="noreferrer">
            {t.viewDemo} <span>↗</span>
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
