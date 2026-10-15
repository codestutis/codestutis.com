export function SocialLinks() {
  return <div className="social-links">
    <a href="mailto:kestutis.biskis@codestutis.com">Say hello <span aria-hidden="true">↗</span></a>
    <a href="https://github.com/codestutis" target="_blank" rel="noreferrer">GitHub ↗</a>
    <a href="https://www.linkedin.com/in/kestutis-biskis" target="_blank" rel="noreferrer">LinkedIn ↗</a>
  </div>;
}

export function Experience() {
  return <div className="profile-content">
    <p className="eyebrow">Experience · May 2025 — Present</p>
    <h3>Making networks<br />play nicely.</h3>
    <a className="organization" href="https://www.iol.unh.edu/" target="_blank" rel="noreferrer">UNH InterOperability Laboratory ↗</a>
    <p>Network Testing Technician. Testing hosts, routers, and firewalls for IPv6 Ready Logo and USGv6 certification.</p>
    <details><summary>A little more about the work</summary><p>I analyze protocol behavior, work with vendors on standards compliance, and build testbeds, automation, and documentation. That work has shortened testing from several weeks to 3–4 days and reduced unnecessary debugging time by 70%.</p></details>
  </div>;
}

export function Education() {
  return <div className="profile-content">
    <p className="eyebrow">Education · Class of 2028</p>
    <h3>Always a student.</h3>
    <a className="organization" href="https://www.unh.edu/" target="_blank" rel="noreferrer">University of New Hampshire ↗</a>
    <p>B.S. in Computer Science<br />Expected May 2028 · GPA 3.5 · Dean&apos;s List</p>
    <details><summary>What I&apos;m studying</summary><p>Algorithms, systems, computer organization, software engineering, networking, and operating systems.</p></details>
  </div>;
}

export function Skills() {
  return <div className="profile-content">
    <p className="eyebrow">Skills & tools</p>
    <h3>From packets<br />to pixels.</h3>
    <dl className="skill-groups">
      <div><dt>Systems</dt><dd>C · Go · Linux · POSIX</dd></div>
      <div><dt>Networks</dt><dd>IPv6 · TCP/UDP · Cybersecurity</dd></div>
      <div><dt>Applications</dt><dd>React · TypeScript · PostgreSQL</dd></div>
      <div><dt>Infrastructure</dt><dd>Docker · Prometheus · Grafana</dd></div>
    </dl>
  </div>;
}
