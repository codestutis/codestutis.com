import { readFileSync } from "node:fs";
import { join } from "node:path";

type TomlValue = string | number | boolean | string[];
type TomlTable = Record<string, TomlValue>;

export type HomeContent = {
  profile: { first_name: string; last_name: string; role: string; bio: string; location: string; current_work: string; studying: string };
  intro: { eyebrow: string; title: string; accent_title: string; description: string };
  social_links: Array<{ label: string; href: string; external?: boolean }>;
  experience: Array<{ organization: string; organization_url: string; logo: string; logo_width: number; logo_height: number; period: string; title: string; summary: string; details: string; tags: string[] }>;
  education: Array<{ organization: string; organization_url: string; logo: string; logo_width: number; logo_height: number; period: string; degree: string; credential: string; major: string; coursework: string }>;
  skill_groups: Array<{ title: string; skills: string[] }>;
};

function stripComment(line: string) {
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    if (line[index] === '"' && line[index - 1] !== "\\") quoted = !quoted;
    if (line[index] === "#" && !quoted) return line.slice(0, index);
  }
  return line;
}

function parseValue(value: string): TomlValue {
  const trimmed = value.trim();
  if (trimmed.startsWith('"')) return JSON.parse(trimmed) as string;
  if (trimmed === "true" || trimmed === "false") return trimmed === "true";
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed);
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed.slice(1, -1).split(",").map((item) => parseValue(item.trim())).map((item) => {
      if (typeof item !== "string") throw new Error("Only string arrays are supported in content/home.toml.");
      return item;
    });
  }
  throw new Error(`Unsupported TOML value: ${value}`);
}

function parseToml(source: string) {
  const document: Record<string, TomlTable | TomlTable[]> = {};
  let table: TomlTable | undefined;
  for (const rawLine of source.split("\n")) {
    const line = stripComment(rawLine).trim();
    if (!line) continue;
    const arrayTable = line.match(/^\[\[([\w_]+)\]\]$/);
    const namedTable = line.match(/^\[([\w_]+)\]$/);
    if (arrayTable) {
      const rows = (document[arrayTable[1]] ??= []) as TomlTable[];
      table = {};
      rows.push(table);
      continue;
    }
    if (namedTable) {
      table = {};
      document[namedTable[1]] = table;
      continue;
    }
    const assignment = line.match(/^([\w_]+)\s*=\s*(.+)$/);
    if (!assignment || !table) throw new Error(`Invalid TOML line: ${rawLine}`);
    table[assignment[1]] = parseValue(assignment[2]);
  }
  return document;
}

export const home = parseToml(readFileSync(join(process.cwd(), "content/home.toml"), "utf8")) as unknown as HomeContent;
