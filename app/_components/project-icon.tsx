import {
  ChessKnight,
  Crown,
  MessagesSquare,
  Network,
  SquareTerminal,
  type LucideIcon,
} from "lucide-react";

type ProjectIconProps = {
  slug: string;
};

const projectIcons: Record<string, LucideIcon> = {
  "chess-mistakes-trainer": ChessKnight,
  "lan-chat-app": MessagesSquare,
  cmdfreq: SquareTerminal,
  "ip-address-inspector": Network,
  "queens-solver": Crown,
};

export function ProjectIcon({ slug }: ProjectIconProps) {
  const Icon = projectIcons[slug] ?? Network;

  return (
    <Icon
      aria-hidden="true"
      strokeWidth={1.25}
      className="pointer-events-none absolute -right-5 top-1/2 h-48 w-48 -translate-y-1/2 scale-90 text-blue-600 opacity-0 [transition:opacity_120ms_ease-out,scale_420ms_cubic-bezier(0.16,1,0.3,1)] [will-change:opacity,scale] group-hover/card:scale-100 group-hover/card:opacity-[0.12] group-focus-visible/card:scale-100 group-focus-visible/card:opacity-[0.12] motion-reduce:scale-100 motion-reduce:transition-none dark:text-blue-400 dark:group-hover/card:opacity-[0.16] dark:group-focus-visible/card:opacity-[0.16]"
    />
  );
}
