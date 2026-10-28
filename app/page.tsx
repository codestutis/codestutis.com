import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { ProjectCards } from "@/app/_components/project-cards";
import { Education, Experience, Skills, SocialLinks } from "@/app/_components/profile-content";
import { home } from "@/content/home";
import { getPinnedProjects } from "@/content/projects";
import styles from "./home.module.css";

export default async function Home() {
  const pinnedProjects = await getPinnedProjects();
  return <div className={`home ${styles.workspace}`}>
    <aside className={styles.profile}>
      <div className={styles.avatar} aria-hidden="true"><span>k<span className={styles.cursor}>_</span></span><small>codestutis</small></div>
      <p className="eyebrow">Hello, I&apos;m</p>
      <h1>{home.profile.first_name}<br />{home.profile.last_name}<span>.</span></h1>
      <p className={styles.role}>{home.profile.role}</p>
      <p className={styles.bio}>{home.profile.bio}</p>
      <SocialLinks links={home.social_links} />
      <div className={styles.quickFacts}><p><span>Based in</span>{home.profile.location}</p><p><span>Working at</span>{home.profile.current_work}</p><p><span>Studying</span>{home.profile.studying}</p></div>
      <Link className={styles.writingLink} href="/blog"><BookOpen size={14} /> Blog posts <ArrowUpRight size={14} /></Link>
    </aside>
    <div className={styles.desk}>
      <div className={styles.welcome}><p className="eyebrow">{home.intro.eyebrow}</p><h2>{home.intro.title}<br /><span>{home.intro.accent_title}</span></h2><p>{home.intro.description}</p></div>
      <section className={styles.background} aria-label="Background">
        <section className={styles.backgroundSection} aria-labelledby="experience-heading">
          <div className={styles.backgroundHeading}><h2 id="experience-heading">Experience</h2></div>
          {home.experience.map((item) => <article className={styles.backgroundCard} key={`${item.organization}-${item.title}`}><Experience items={[item]} /></article>)}
        </section>
        <section className={styles.backgroundSection} aria-labelledby="education-heading">
          <div className={styles.backgroundHeading}><h2 id="education-heading">Education</h2></div>
          {home.education.map((item) => <article className={styles.backgroundCard} key={`${item.organization}-${item.degree}`}><Education items={[item]} /></article>)}
        </section>
        <section className={styles.backgroundSection} aria-labelledby="skills-heading">
          <div className={styles.backgroundHeading}><h2 id="skills-heading">Skills &amp; tools</h2></div>
          <article className={styles.backgroundCard}><Skills groups={home.skill_groups} /></article>
        </section>
      </section>
      <section className="selected-work" aria-labelledby="projects-heading"><div className="section-heading"><div><p className="eyebrow">Projects</p><h2 id="projects-heading">Selected projects<span className={styles.count}>02</span></h2></div><Link href="/projects">Explore all ↗</Link></div><ProjectCards items={pinnedProjects} /></section>
    </div>
  </div>;
}
