import type { ComponentProps } from "react";
import {
  BookOpen,
  CircleAlert,
  CircleCheck,
  CircleHelp,
  ClipboardCheck,
  Download,
  FilePenLine,
  FileText,
  Highlighter,
  House,
  Images,
  Info,
  Layers,
  Lightbulb,
  ListTodo,
  Monitor,
  Moon,
  Newspaper,
  NotebookText,
  PanelLeftClose,
  Search,
  Sigma,
  Sparkles,
  SquareCheckBig,
  StickyNote,
  Sun,
  Zap,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

const ICONS = {
  IconArrowInbox: Download,
  IconBook: BookOpen,
  IconChecklist: ClipboardCheck,
  IconCircleCheck: CircleCheck,
  IconCircleInfo: Info,
  IconCircleQuestionmark: CircleHelp,
  IconExclamationCircle: CircleAlert,
  IconFileEdit: FilePenLine,
  IconFileText: FileText,
  IconFlashcards: Layers,
  IconHighlight: Highlighter,
  IconHomeOpen: House,
  IconImages1: Images,
  IconImagine: Sparkles,
  IconLightBulbSimple: Lightbulb,
  IconLightbulbGlow: Lightbulb,
  IconMagnifyingGlass: Search,
  IconMathScientific: Sigma,
  IconMoon: Moon,
  IconNewspaper2: Newspaper,
  IconNote1: StickyNote,
  IconSearchlinesSparkle: Search,
  IconSidebarSimpleLeftWide: PanelLeftClose,
  IconSketchbook: NotebookText,
  IconSquareChecklist: SquareCheckBig,
  IconStudioDisplay: Monitor,
  IconSun: Sun,
  IconTasks: ListTodo,
  IconZap: Zap,
} satisfies Record<string, LucideIcon>;

export type CentralIconName = keyof typeof ICONS;

export type CentralIconProps = Omit<ComponentProps<LucideIcon>, "name" | "fill" | "stroke" | "strokeWidth"> & {
  name: CentralIconName;
  fill?: "filled" | "outlined";
  join?: "round" | "square";
  radius?: "0" | "1" | "2" | "3";
  stroke?: "1" | "1.5" | "2";
  ariaHidden?: boolean;
  ariaLabel?: string;
  color?: string;
};

export function CentralIcon({
  name,
  size = 24,
  ariaHidden = true,
  ariaLabel,
  color,
  stroke = "2",
  style,
  fill: _fill,
  join: _join,
  radius: _radius,
  ...props
}: CentralIconProps) {
  const Icon = ICONS[name] ?? CircleHelp;
  const numericStroke = Number.parseFloat(stroke);
  const lucideProps = props as LucideProps;

  return (
    <Icon
      {...lucideProps}
      aria-hidden={ariaHidden}
      aria-label={ariaHidden ? undefined : ariaLabel}
      color={color}
      role={ariaHidden ? undefined : "img"}
      size={size}
      strokeWidth={Number.isFinite(numericStroke) ? numericStroke : 2}
      style={style}
    />
  );
}

export default CentralIcon;
