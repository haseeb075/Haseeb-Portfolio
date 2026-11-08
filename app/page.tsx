"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Sun,
} from "lucide-react";
import Portrait from "@/components/portrait";
import { profile, currentWork, projects, certificates, experience, skills } from "./data";

const navigation = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Approach", "#approach"],
  ["Skills", "#skills"],
] as const;

const approach = [
  ["01", "Plan with purpose", "Turn goals into clear scopes, realistic sprints, and shared priorities."],
  ["02", "Keep everyone aligned", "Make decisions visible with useful documentation and steady communication."],
  ["03", "Unblock the team", "Connect engineering, design, QA, product, and clients around the next best step."],
  ["04", "Ship with confidence", "Build quality into delivery through thoughtful reviews and practical testing."],
];

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <main className={`portfolio-shell${dark ? " theme-dark" : ""}`}>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={`${profile.name}, home`}>
          H<span>.</span>
        </a>
        <nav className="primary-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
            title={`Switch to ${dark ? "light" : "dark"} theme`}
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a className="header-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={17} /></a>
        </div>
      </header>

      <div id="top" className="page-content">
        <section className="hero section-wrap" id="about">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> {profile.role} · {profile.company}</p>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              Building teams.<br />
              <span>Delivering</span> better.
            </motion.h1>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-links">
              <a className="button button-dark" href={`mailto:${profile.email}`}>
                Let&apos;s work together <ArrowRight size={17} />
              </a>
              <a className="button button-light" href="#work">
                Explore my work <ArrowDown size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> {profile.location}</span>
              <span>Project delivery · Frontend engineering</span>
            </div>
          </div>
          <div className="hero-portrait">
            <Portrait />
            <div className="portrait-note">
              <span className="note-marker" />
              <div><strong>People first. Delivery always.</strong><small>Engineering leadership · Project coordination</small></div>
            </div>
          </div>
        </section>

        <section className="proof-strip section-wrap" aria-label="Career highlights">
          {[
            ["7+", "Years in software"],
            ["60%", "Productivity increase"],
            [`${projects.length}`, "Products & projects"],
            [`${experience.length}`, "Career roles"],
          ].map(([value, label], index) => (
            <div className="proof-item" key={label}>
              <span className="proof-index">0{index + 1} — IMPACT</span>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="about-section section-wrap">
          <div className="section-kicker"><span>01</span> About</div>
          <div className="about-grid">
            <h2>Bringing people and <em>delivery</em> into focus.</h2>
            <div className="about-copy">
              <p>{profile.summary}</p>
              <p>{currentWork.body}</p>
              <div className="about-facts">
                <div><span>Currently</span><strong>{profile.role} at {profile.company}</strong></div>
                <div><span>Based in</span><strong>{profile.location}</strong></div>
                <div><span>Focus</span><strong>People, process & product delivery</strong></div>
                <div><span>Since</span><strong>{profile.since}</strong></div>
              </div>
              <div className="social-links">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} /></a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-kicker"><span>02</span> Selected work</div>
          <div className="section-heading">
            <h2>Projects I&apos;ve helped <em>move forward.</em></h2>
            <p>A selection of products and teams I&apos;ve supported across frontend engineering and delivery.</p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-main">
                  <div className="project-title"><h3>{project.name}</h3><span>{project.org}</span></div>
                  <p>{project.text}</p>
                  <div className="tag-list">{project.tech.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
                </div>
                <ArrowUpRight className="project-arrow" size={21} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-kicker"><span>03</span> Experience</div>
          <div className="experience-grid">
            <h2>Good work is a <em>team sport.</em></h2>
            <ol className="experience-list">
              {experience.map(([role, company, dates]) => (
                <li key={`${role}-${company}`}>
                  <div><strong>{role}</strong><span>{company}</span></div>
                  <time>{dates}</time>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="approach-section section-wrap" id="approach">
          <div className="section-kicker"><span>04</span> How I work</div>
          <div className="section-heading">
            <h2>Clear direction.<br /><em>Thoughtful delivery.</em></h2>
            <p>Practical habits that keep teams aligned, focused, and moving forward.</p>
          </div>
          <div className="approach-grid">
            {approach.map(([number, title, description]) => (
              <article className="approach-card" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
          <div className="current-work">
            <div>
              <span className="current-label"><span className="status-dot" /> CURRENTLY BUILDING</span>
              <h3>{currentWork.title}</h3>
              <p>{currentWork.body}</p>
            </div>
            <strong>{currentWork.stat}</strong>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-kicker"><span>05</span> Skills & credentials</div>
          <div className="skills-grid">
            <div>
              <h2>The full <em>toolkit.</em></h2>
              <p>Technical experience and delivery practices, brought together to help teams do their best work.</p>
              <div className="tag-list skills-tags">{skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
            </div>
            <div className="credential-column">
              <h3>Credentials</h3>
              {certificates.map((certificate) => (
                <article className="credential" key={certificate.name}>
                  <Award size={19} />
                  <div><strong>{certificate.name}</strong><span>{certificate.issuer} · {certificate.date}</span></div>
                </article>
              ))}
              <p className="education-note">B.S. Computer Science · COMSATS Institute of Information Technology, Wah Campus · 2014–2018</p>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="section-kicker"><span>06</span> Contact</div>
          <div className="contact-content">
            <p className="eyebrow">Have a good one in mind?</p>
            <h2>Let&apos;s make<br /><em>it happen.</em></h2>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={20} /></a>
            <div className="contact-links">
              <a href={`https://wa.me/${profile.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Haseeb, I'd like to discuss a project or project management opportunity.")}`} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> WhatsApp</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} /> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub</a>
            </div>
          </div>
        </section>

        <footer className="site-footer section-wrap">
          <a className="wordmark" href="#top">H<span>.</span></a>
          <span>{profile.name} · {profile.location}</span>
          <a href={`mailto:${profile.email}`}><Mail size={15} /> Say hello</a>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </div>
    </main>
  );
}
