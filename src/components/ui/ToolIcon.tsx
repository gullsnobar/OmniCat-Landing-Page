import {
  ArrowRight,
  BadgeCheck,
  Camera,
  ChevronRight,
  ClipboardCheck,
  Coins,
  Eraser,
  FileText,
  History,
  Image,
  ImagePlus,
  Images,
  LayoutDashboard,
  Megaphone,
  Newspaper,
  PenLine,
  PenTool,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Type,
  type LucideIcon,
} from "lucide-react";

// One outline icon set (Lucide) for the whole landing page, named by what each icon shows.
const icons = {
  ArrowRight,
  BadgeCheck,
  Camera,
  ChevronRight,
  ClipboardCheck,
  Coins,
  Eraser,
  FileText,
  History,
  Image,
  ImagePlus,
  Images,
  LayoutDashboard,
  Megaphone,
  Newspaper,
  PenLine,
  PenTool,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Type,
} satisfies Record<string, LucideIcon>;

export type ToolIconName = keyof typeof icons;

interface ToolIconProps {
  name: string;
  size?: number;
  strokeWidth?: number;
  title?: string;
  className?: string;
}

export default function ToolIcon({ name, size = 20, strokeWidth = 1.75, title, className }: ToolIconProps) {
  const Icon = icons[name as ToolIconName] ?? FileText;

  return (
    <Icon
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    />
  );
}
