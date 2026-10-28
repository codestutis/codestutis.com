"use client";

import { useEffect } from "react";

const themes = {
  default: [],
  halloween: ["🍂", "🍂", "🍂", "🍂", "🍂", "🍂", "🍂", "🍂", "🍂", "🍂", "🍂", "🍂", "🍂", "🍂"],
  thanksgiving: ["🍂", "🍁", "🍂", "🍁", "🍂", "🍁", "🍂", "🍁", "🍂", "🍁", "🍂", "🍁", "🍂", "🍁"],
  christmas: ["❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄"],
} as const;
const seasonalThemes = ["halloween", "thanksgiving", "christmas"] as const;

type Theme = keyof typeof themes;

function Pumpkin({ variety }: { variety: "grin" | "smile" }) {
  return (
    <svg viewBox="0 0 100 90" role="presentation">
      <ellipse className="pumpkin-halo" cx="50" cy="50" rx="43" ry="36" />
      <path className="pumpkin-stem" d="M47 21c-3-8 0-15 10-19 4 7 1 13-5 20l9 1-1 5-19 1v-6Z" />
      <path className="pumpkin-body" d="M50 24C35 10 13 21 10 47 7 71 24 83 50 83s43-12 40-36C87 21 65 10 50 24Z" />
      <path className="pumpkin-ridge" d="M50 24c-9 10-12 39 0 59m0-59c9 10 12 39 0 59M34 21c-13 15-14 46 0 59m32-59c13 15 14 46 0 59" />
      <path className="pumpkin-highlight" d="M20 47c2-12 7-19 14-22m-9 34c1 9 5 14 10 18" />
      {variety === "grin" ? (
        <g className="pumpkin-face">
          <path d="m26 42 13 5-12 7Zm48 0-13 5 12 7Z" />
          <path d="m30 62 10-4 10 5 10-5 10 4-5 11-12 5-13-5Z" />
          <path className="pumpkin-teeth" d="m40 61 1 8 5-1 1-6 5 3 5-3 1 6 5 1 2-8Z" />
        </g>
      ) : (
        <g className="pumpkin-face pumpkin-face-smile">
          <path d="M27 48q7-9 14 0-7 7-14 0m32 0q7-9 14 0-7 7-14 0Z" />
          <circle cx="34" cy="48" r="2" className="pumpkin-eye-glint" /><circle cx="66" cy="48" r="2" className="pumpkin-eye-glint" />
          <path d="M33 63q17 16 34 0-4 17-17 17T33 63Z" />
          <path className="pumpkin-teeth" d="M42 67h16v5H42Z" />
        </g>
      )}
      <path className="pumpkin-vine" d="M56 23q9-8 14-2-5 0-6 5m-8-2q-3-5-8-5" />
      <circle className="pumpkin-spark" cx="15" cy="33" r="1.7" /><circle className="pumpkin-spark" cx="82" cy="34" r="1.3" />
      <path className="pumpkin-spark" d="M15 60v5m-2.5-2.5h5m65-4v4m-2-2h4" />
    </svg>
  );
}

function Turkey({ variety }: { variety: "fan" | "strut" }) {
  return (
    <svg viewBox="0 0 110 112" role="presentation">
      <g className="turkey-tail">
        <path className="turkey-feather feather-one" d="M49 67C14 70 5 45 15 31c10-13 27 0 38 24-9-28-1-51 14-50 17 1 16 29 3 50 14-23 33-31 43-18 12 16-7 42-49 40Z" />
        <path className="turkey-feather feather-two" d="M51 64C24 62 20 40 30 32c8-7 18 5 24 23-4-22 3-39 14-37 12 2 10 22 1 39 12-20 26-23 32-12 7 13-14 28-50 25Z" />
        <path className="turkey-feather feather-three" d="M51 62C34 55 38 36 46 32c8-3 11 8 10 21 2-17 12-28 20-23s3 21-8 33c13-13 25-13 27-4 3 12-18 20-44 14Z" />
        <path className="turkey-feather-shaft" d="m52 65-31-26m31 26L57 14m-5 51 28-34m-28 34 15-25m-15 25 42-18" />
      </g>
      <ellipse className="turkey-body" cx="55" cy="76" rx="22" ry="28" />
      <path className="turkey-wing" d="M39 71q12-13 27 0-4 15-18 16-8-5-9-16Z" />
      <path className="turkey-wing-lines" d="M43 72q9 7 19 1m-16 8q8 4 14 0" />
      <path className="turkey-neck" d="M68 58c-1-15 9-24 19-20 10 4 10 19 0 26-5 3-10 3-15 1Z" />
      <path className="turkey-cap" d="M69 42q7-13 20-9l5 5q-11-3-22 8Z" />
      <circle className="turkey-eye" cx="84" cy="47" r="2.6" />
      <circle className="turkey-eye-glint" cx="85" cy="46" r=".8" />
      <path className="turkey-beak" d="m89 51 15 5-13 7Z" />
      <path className="turkey-wattle" d="M91 56c8 3 8 13 2 16-6 2-9-5-7-10" />
      <path className="turkey-bow" d="m59 57 7 4-7 4-2-4 2-4Z" />
      <path className="turkey-feet" d="m45 99-3 8m22-8 3 8m-30 0 8-2m17 2-7-2" />
      <path className="turkey-feather-detail" d="M19 37q8 0 16 13m19-39q5 7 5 19m25 1q-7 6-11 17" />
      {variety === "strut" && <path className="turkey-cape" d="M28 76q7 13 15 10l3 15-17-1-8-9Z" />}
    </svg>
  );
}

function Snowman() {
  return (
    <svg viewBox="0 0 100 130" role="presentation">
      <path className="snowman-arm" d="m29 59-19-16m19 16-3-12m45 12 19-16m-19 16 3-12" />
      <circle className="snowman-body snowman-bottom" cx="50" cy="96" r="31" />
      <circle className="snowman-body snowman-middle" cx="50" cy="57" r="23" />
      <circle className="snowman-body snowman-head" cx="50" cy="27" r="17" />
      <path className="snowman-shine" d="M39 20q2-6 8-7m-14 40q2-9 8-12m6 57q2-7 7-9" />
      <path className="snowman-hat" d="M33 18h35l-4-16H39Z" />
      <path className="snowman-hat-band" d="M33 17h36v6H33Z" />
      <path className="snowman-hat-brim" d="M29 22q21 4 42 0l4 5q-25 7-50 0Z" />
      <circle className="snowman-hat-buckle" cx="51" cy="19" r="2.2" />
      <circle className="snowman-eye" cx="45" cy="27" r="1.8" /><circle className="snowman-eye" cx="56" cy="27" r="1.8" />
      <path className="snowman-nose" d="m49 31 15 4-14 5Z" />
      <path className="snowman-smile" d="M43 35q2 2 4 0m3 2 1 1m4-2 2 1" />
      <circle className="snowman-blush" cx="39" cy="34" r="3" /><circle className="snowman-blush" cx="62" cy="34" r="3" />
      <path className="snowman-scarf" d="M28 49q21 10 44-1l-3 12q-21 9-39-1Z" />
      <path className="snowman-scarf-tail" d="M61 57v17l9 4V61Z" />
      <path className="snowman-scarf-fringe" d="m61 74-2 4m5-3-1 5m5-4 1 4" />
      <circle className="snowman-button" cx="50" cy="75" r="2.4" /><circle className="snowman-button" cx="50" cy="86" r="2.4" /><circle className="snowman-button" cx="50" cy="98" r="2.8" />
      <path className="snowman-pocket" d="M57 101q8-4 13 1l-2 9q-7-3-12 0Z" />
      <path className="snowman-snowflake" d="M18 77v8m-4-4h8m33-22v5m-2.5-2.5h5" />
    </svg>
  );
}

function Santa() {
  return (
    <svg viewBox="0 0 100 125" role="presentation">
      <path className="santa-coat" d="M20 69q2-37 31-43 29 6 31 43v43H20Z" />
      <path className="santa-hat" d="M30 31C28 14 42 2 59 4c13 1 20 12 19 25-16-8-32-6-48 2Z" />
      <path className="santa-hat-fold" d="M32 27q20-14 46-2l4 10q-25-8-53 2Z" />
      <path className="santa-hat-trim" d="M28 34q28-14 57-1l3 8q-32-9-62 3Z" />
      <circle className="santa-pom" cx="79" cy="9" r="8" />
      <ellipse className="santa-face" cx="51" cy="52" rx="23" ry="24" />
      <path className="santa-eyebrow" d="M39 44q5-4 10 0m5 0q5-4 10 0" />
      <circle className="santa-eye" cx="44" cy="49" r="2" /><circle className="santa-eye" cx="59" cy="49" r="2" />
      <circle className="santa-eye-glint" cx="44.7" cy="48.5" r=".7" /><circle className="santa-eye-glint" cx="59.7" cy="48.5" r=".7" />
      <ellipse className="santa-nose" cx="51" cy="57" rx="4.5" ry="3.5" />
      <path className="santa-moustache" d="M49 61c-8-7-16-7-21-1 2 9 10 13 21 7 11 6 19 2 21-7-5-6-13-6-21 1Z" />
      <path className="santa-beard" d="M30 67q10 4 21-3 12 8 22 1-2 31-22 35-20-4-21-33Z" />
      <path className="santa-beard-lines" d="M39 75q3 5 2 11m9-14v21m9-20q-3 6-2 12m9-15q-4 6-3 11" />
      <path className="santa-collar" d="m26 66 17 4 8-6 8 6 17-5 5 8-22 7H42l-21-7Z" />
      <path className="santa-belt" d="M21 99h61v8H21Z" />
      <path className="santa-buckle" d="M46 97h12v12H46Zm3 3v6h6v-6Z" />
      <path className="santa-cuff" d="M20 105h61v8H20Z" />
      <path className="santa-arm" d="M24 76q-9 10-5 22l9 5 9-8-5-17m41-3q11 7 12 17l-8 7-10-7 2-13" />
      <circle className="santa-mitten" cx="24" cy="101" r="6" /><circle className="santa-mitten" cx="82" cy="94" r="6" />
      <path className="santa-suit-seam" d="M51 78v18" />
    </svg>
  );
}

function ChristmasLights() {
  const bulbPositions = [
    "0,0", "35,4", "70,13", "105,21", "140,19", "175,9", "210,1",
    "245,1", "280,9", "315,19", "350,21", "385,13", "420,4", "455,0",
    "490,0", "525,4", "560,13", "595,21", "630,19", "665,9", "700,1",
    "735,1", "770,9", "805,19", "840,21", "875,13", "910,4", "945,0", "980,0",
  ];

  return (
    <div className="christmas-corner-lights" aria-hidden="true">
      <svg className="christmas-string" viewBox="0 0 1000 80" preserveAspectRatio="none">
        <path className="christmas-wire" d="M0 0 C50 0 50 22 125 22 C200 22 200 0 250 0 C300 0 300 22 375 22 C450 22 450 0 500 0 C550 0 550 22 625 22 C700 22 700 0 750 0 C800 0 800 22 875 22 C950 22 950 0 1000 0" />
        {bulbPositions.map((point, index) => {
          const [x, y] = point.split(",");
          return (
            <g key={point} className={`christmas-bulb christmas-bulb-${index % 4}`} transform={`translate(${x} ${y})`}>
              <path className="bulb-socket" d="M0 0v5" />
              <ellipse className="bulb-glass" cy="10" rx="4" ry="6" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function ChristmasIcicles() {
  const icicles = [
    [24, 7, 15], [92, 5, 29], [151, 10, 21], [228, 7, 39], [286, 5, 14],
    [351, 9, 30], [423, 12, 44], [492, 6, 18], [557, 8, 34], [619, 5, 16],
    [679, 11, 41], [748, 7, 23], [821, 12, 36], [886, 5, 15], [935, 10, 31], [982, 6, 20],
  ];

  return (
    <svg className="christmas-icicles" viewBox="0 0 1000 52" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="icicle-ice" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#f9fdff" stopOpacity=".96" />
          <stop offset=".45" stopColor="#d7edf7" stopOpacity=".92" />
          <stop offset="1" stopColor="#a9d4e6" stopOpacity=".78" />
        </linearGradient>
      </defs>
      <path className="icicle-shelf" d="M0 0H1000V4C920 7 882 3 814 5S686 7 625 4 500 7 438 4 310 7 250 4 124 7 0 4Z" />
      {icicles.map(([x, width, length]) => (
        <g key={x} className="icicle" transform={`translate(${x} 3) scale(${width / 12} ${length / 36})`}>
          <path className="icicle-body" d="M0 0C1 8 3 15 4 22c.7 6 1.2 11 2 14 1.4-3 2-8 2.8-14C10 14 11 7 12 0Z" />
          <path className="icicle-glint" d="M3 4c1 7 1 13 2 19" />
        </g>
      ))}
    </svg>
  );
}

function SideCharacters({ theme }: { theme: Exclude<Theme, "default"> }) {
  if (theme === "christmas") {
    return (
      <div className="seasonal-side-characters seasonal-side-christmas" aria-hidden="true">
        <div className="side-character side-character-one"><Snowman /></div>
        <div className="side-character side-character-two"><Santa /></div>
      </div>
    );
  }

  const halloween = theme === "halloween";

  return (
    <div className={`seasonal-side-characters seasonal-side-${theme}`} aria-hidden="true">
      <div className="side-character side-character-one">{halloween ? <Pumpkin variety="grin" /> : <Turkey variety="fan" />}</div>
      <div className="side-character side-character-two">{halloween ? <Pumpkin variety="smile" /> : <Turkey variety="strut" />}</div>
    </div>
  );
}

export function ThemePreview() {
  useEffect(() => {
    const month = new Date().getMonth();
    const currentTheme: Theme = month === 9
      ? "halloween"
      : month === 10
        ? "thanksgiving"
        : month === 11
          ? "christmas"
          : "default";

    if (currentTheme === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.dataset.theme = currentTheme;
    }

    return () => document.documentElement.removeAttribute("data-theme");
  }, []);

  return (
    <>
      {seasonalThemes.map((theme) => (
        <div className={`seasonal-theme seasonal-theme-${theme}`} key={theme}>
          <div className={`seasonal-decorations seasonal-${theme}`} aria-hidden="true">
            {themes[theme].map((decoration, index) => <span key={`${decoration}-${index}`}>{decoration}</span>)}
          </div>
          <SideCharacters theme={theme} />
          {theme === "christmas" && <><ChristmasLights /><ChristmasIcicles /></>}
        </div>
      ))}
    </>
  );
}
