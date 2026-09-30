export type Project = {
  slug: string;
  name: string;
  description: string;
  details: string;
  tags: readonly string[];
  pinned: boolean;
  overview: string;
  challenge: string;
  highlights: readonly string[];
  sourceUrl?: string;
};

export const projects: readonly Project[] = [
  {
    slug: "chess-mistakes-trainer",
    name: "Chess Mistakes Trainer",
    description:
      "An asynchronous Go service that analyzes chess games with Stockfish and turns mistakes into interactive puzzles.",
    details:
      "Built with PostgreSQL, Docker, React, and TypeScript, with observability through Prometheus, Grafana, and OpenTelemetry.",
    tags: ["Go", "PostgreSQL", "React", "Observability"],
    pinned: true,
    overview:
      "Chess Mistakes Trainer turns completed games into focused practice. A Go service coordinates engine analysis, stores the resulting positions, and serves the mistakes back through an interactive web interface.",
    challenge:
      "Stockfish analysis is computationally expensive and does not fit comfortably inside a normal request-response cycle. The project separates analysis from interaction so games can be processed asynchronously while the application remains responsive.",
    highlights: [
      "Runs Stockfish analysis as asynchronous background work.",
      "Stores games, evaluations, and generated training positions in PostgreSQL.",
      "Presents mistakes as interactive puzzles in a React and TypeScript interface.",
      "Uses Prometheus, Grafana, and OpenTelemetry to expose system behavior.",
    ],
  },
  {
    slug: "lan-chat-app",
    name: "LAN Chat App",
    description:
      "A multithreaded C application for peer discovery and messaging between devices on a local network.",
    details:
      "Uses UDP discovery, TCP messaging, a custom application protocol, and a terminal interface.",
    tags: ["C", "Networking", "POSIX", "Concurrency"],
    pinned: true,
    overview:
      "LAN Chat App is a peer-to-peer terminal chat program written in C. Devices discover one another automatically on the local network, then establish direct connections for conversations without a central server.",
    challenge:
      "Discovery, incoming connections, message history, and terminal rendering all need to progress independently without corrupting shared state. The design uses explicit packet formats and concurrent workers to keep those responsibilities separate.",
    highlights: [
      "Broadcasts UDP discovery packets at regular intervals and expires inactive peers.",
      "Uses TCP connections and a versioned packet format for chat messages.",
      "Accepts incoming connections on a dedicated POSIX thread.",
      "Maintains bounded per-peer message history for the terminal interface.",
    ],
    sourceUrl: "https://github.com/codestutis/chatstutis",
  },
  {
    slug: "cmdfreq",
    name: "cmdfreq",
    description:
      "A Go command-line tool that ranks the commands and subcommands used most often in shell history.",
    details:
      "Supports Bash and Zsh histories, alias resolution, repeatable installation, and macOS, Linux, and WSL.",
    tags: ["Go", "CLI", "Bash", "Zsh"],
    pinned: false,
    overview:
      "cmdfreq makes shell habits visible. It parses Bash or Zsh history, groups repeated commands, and prints a ranked summary that can also drill into the arguments used with a particular command.",
    challenge:
      "Shell histories vary in format and configuration, and aliases can hide the commands a person actually runs. The tool normalizes those inputs while keeping the default output small enough to be useful at a glance.",
    highlights: [
      "Ranks the most frequently used commands with a configurable result count.",
      "Breaks down common arguments for a command such as git.",
      "Optionally resolves aliases before counting usage.",
      "Includes tested, repeatable installation for Bash and Zsh environments.",
    ],
    sourceUrl: "https://github.com/codestutis/cmdfreq",
  },
  {
    slug: "ip-address-inspector",
    name: "IP Address Inspector",
    description:
      "A small Linux utility that displays the IPv4 and IPv6 addresses assigned to local network interfaces.",
    details:
      "Written in C around getifaddrs, getnameinfo, linked lists, and explicit memory management.",
    tags: ["C", "Linux", "IPv6", "Systems"],
    pinned: false,
    overview:
      "IP Address Inspector is a compact systems utility for enumerating local interfaces and presenting their numeric addresses. It expands the getifaddrs manual-page example into structured, readable output for both IPv4 and IPv6.",
    challenge:
      "The operating-system interface returns one record per address rather than one complete record per network interface. The program groups those records into its own linked data model and releases every allocation before exiting.",
    highlights: [
      "Enumerates network interfaces with the Linux getifaddrs API.",
      "Converts socket addresses to numeric IPv4 and IPv6 strings.",
      "Groups multiple addresses under their corresponding interface.",
      "Exercises linked-list construction and explicit resource cleanup in C.",
    ],
    sourceUrl: "https://github.com/codestutis/ip_addrs",
  },
  {
    slug: "queens-solver",
    name: "Queens Solver",
    description:
      "A Go solver for LinkedIn Queens puzzles using constraint tracking and backtracking.",
    details:
      "Searches for placements that satisfy row, column, color-region, and adjacent-diagonal rules, with tests for the solver.",
    tags: ["Go", "Algorithms", "Backtracking", "Puzzles"],
    pinned: false,
    overview:
      "Queens Solver models the constraints behind LinkedIn's Queens puzzle and searches every valid placement. The solver records solutions in a board representation that can be printed or checked in tests.",
    challenge:
      "A brute-force search grows quickly unless invalid branches are rejected as soon as possible. Column and color-region usage are tracked directly, while adjacent diagonals are checked before each recursive step.",
    highlights: [
      "Places exactly one queen in each row through recursive search.",
      "Tracks occupied columns and color regions for constant-time rejection.",
      "Prevents queens from touching on adjacent diagonals.",
      "Records complete solutions and includes automated solver tests.",
    ],
    sourceUrl: "https://github.com/codestutis/Queens",
  },
];

export const pinnedProjects = projects.filter((project) => project.pinned);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
