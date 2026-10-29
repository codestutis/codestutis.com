import { Award } from "lucide-react";
import Image from "next/image";
import type { HomeContent } from "@/content/home";

export function SocialLinks({ links }: { links: HomeContent["social_links"] }) {
  return <div className="social-links">
    {links.map((link) => <a key={link.href} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>{link.label} <span aria-hidden="true">↗</span></a>)}
  </div>;
}

export function Experience({ items }: { items: HomeContent["experience"] }) {
  return <>{items.map((item) => <div className="profile-content" key={`${item.organization}-${item.title}`}>
    <div className="entry-header">
      <a className="organization organization-with-logo" href={item.organization_url} target="_blank" rel="noreferrer"><Image className="organization-logo" src="/logos/unh.png" alt="" width={36} height={27} loading="eager" unoptimized />{item.organization} ↗</a>
      <p className="card-meta">{item.period}</p>
    </div>
    <h3>{item.title}</h3>
    <p className="card-summary">{item.summary}</p>
    <ul className="card-tags" aria-label={`${item.title} focus`}>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
  </div>)}</>;
}

export function Education({ items }: { items: HomeContent["education"] }) {
  return <>{items.map((item) => <div className="profile-content" key={`${item.organization}-${item.degree}`}>
    <div className="entry-header">
      <a className="organization organization-with-logo" href={item.organization_url} target="_blank" rel="noreferrer"><Image className="organization-logo" src="/logos/unh.png" alt="" width={36} height={27} loading="eager" unoptimized />{item.organization} ↗</a>
      <p className="card-meta">{item.period}</p>
    </div>
    <h3>{item.degree}</h3>
    <p className="credential"><Award size={13} aria-hidden="true" /> {item.credential}</p>
    <dl className="education-details">
      <div><dt>Major</dt><dd>{item.major}</dd></div>
      <div><dt>Coursework</dt><dd>{item.coursework}</dd></div>
    </dl>
  </div>)}</>;
}

export function Skills({ groups }: { groups: HomeContent["skill_groups"] }) {
  return <div className="profile-content">
    <dl className="skill-groups">
      {groups.map((group) => <div key={group.title}>
        <dt>{group.title}</dt>
        <dd><ul className="skill-badges">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></dd>
      </div>)}
    </dl>
  </div>;
}
