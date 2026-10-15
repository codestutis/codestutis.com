"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import styles from "../home.module.css";

const names = ["Experience", "Education", "Skills"];
export function BackgroundTabs({ panels }: { panels: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % names.length;
    else if (event.key === "ArrowLeft") next = (index + names.length - 1) % names.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = names.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }
  return <section className={styles.window} aria-label="My background">
    <div className={styles.windowBar}><span aria-hidden="true">● ● ●</span><span>about / kestutis</span><span>~/</span></div>
    <div className={styles.tabs} role="tablist" aria-label="Background">
      {names.map((name, i) => <button key={name} ref={(node) => { buttons.current[i] = node; }} type="button" role="tab" id={`background-tab-${i}`} aria-controls={`background-panel-${i}`} aria-selected={active === i} tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={(event) => navigate(event, i)}><span aria-hidden="true">{["⌘", "◇", "⌁"][i]}</span> {name}</button>)}
    </div>
    {panels.map((panel, i) => <div key={names[i]} role="tabpanel" id={`background-panel-${i}`} aria-labelledby={`background-tab-${i}`} hidden={active !== i} tabIndex={0} className={styles.panel}>{panel}</div>)}
  </section>;
}
