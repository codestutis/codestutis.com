import Link from "next/link";
import { ArrowUpRight, BookOpen, Cpu, Network } from "lucide-react";
import { ProjectCards } from "@/app/_components/project-cards";
import { BackgroundTabs } from "@/app/_components/background-tabs";
import { Education, Experience, Skills, SocialLinks } from "@/app/_components/profile-content";
import { pinnedProjects } from "@/content/projects";
import styles from "./home.module.css";

function Circuit({ kind }: { kind: "network" | "education" | "skills" }) {
  const Icon = kind === "network" ? Network : kind === "education" ? BookOpen : Cpu;
  return <div className={styles.circuit} aria-hidden="true"><div className={styles.circuitRing} /><div className={styles.circuitRing} /><div className={styles.chip}><Icon size={38} strokeWidth={1.2} /></div><span>{kind === "network" ? "hosts ↔ routers ↔ firewalls" : kind === "education" ? "learn → build → repeat" : "systems → networks → web"}</span></div>;
}

export default function Home() {
  return <div className={`home ${styles.workspace}`}>
    <aside className={styles.profile}>
      <div className={styles.avatar} aria-hidden="true"><span>k<span className={styles.cursor}>_</span></span><small>codestutis</small></div>
      <p className="eyebrow">Hello, I&apos;m</p>
      <h1>Kestutis<br />Biskis<span>.</span></h1>
      <p className={styles.role}>Software engineer.<br />Student. Systems person.</p>
      <p className={styles.bio}>I like figuring out how things work, then building something with what I learn.</p>
      <SocialLinks />
      <div className={styles.quickFacts}><p><span>Based in</span>Greater Boston</p><p><span>Working at</span>UNH-IOL</p><p><span>Studying</span>Computer Science @ UNH</p></div>
      <Link className={styles.writingLink} href="/blog"><BookOpen size={14} /> Notes from the workbench <ArrowUpRight size={14} /></Link>
    </aside>
    <div className={styles.desk}>
      <div className={styles.welcome}><p className="eyebrow">A small corner of the internet</p><h2>Under the hood.<br /><span>And on the screen.</span></h2><p>Systems programming, IPv6 interoperability, cybersecurity,<br className={styles.desktopBreak} /> and the occasional full-stack side quest.</p></div>
      <BackgroundTabs panels={[
        <div className={styles.panelGrid} key="experience"><Experience /><Circuit kind="network" /></div>,
        <div className={styles.panelGrid} key="education"><Education /><Circuit kind="education" /></div>,
        <div className={styles.panelGrid} key="skills"><Skills /><Circuit kind="skills" /></div>,
      ]} />
      <section className="selected-work" aria-labelledby="projects-heading"><div className="section-heading"><div><p className="eyebrow">Off the workbench</p><h2 id="projects-heading">Selected projects<span className={styles.count}>02</span></h2></div><Link href="/projects">Explore all ↗</Link></div><ProjectCards items={pinnedProjects} /></section>
    </div>
  </div>;
}
