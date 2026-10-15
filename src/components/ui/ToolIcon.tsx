import type { SvgIconProps } from "@mui/material/SvgIcon";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import AdsClickRounded from "@mui/icons-material/AdsClickRounded";
import ArticleRounded from "@mui/icons-material/ArticleRounded";
import PsychologyRounded from "@mui/icons-material/PsychologyRounded";
import CameraAltRounded from "@mui/icons-material/CameraAltRounded";
import WallpaperRounded from "@mui/icons-material/WallpaperRounded";
import LayersClearRounded from "@mui/icons-material/LayersClearRounded";
import AutoFixHighRounded from "@mui/icons-material/AutoFixHighRounded";
import BrandingWatermarkRounded from "@mui/icons-material/BrandingWatermarkRounded";
import DesignServicesRounded from "@mui/icons-material/DesignServicesRounded";
import GridViewRounded from "@mui/icons-material/GridViewRounded";
import ShoppingBagRounded from "@mui/icons-material/ShoppingBagRounded";
import FactCheckRounded from "@mui/icons-material/FactCheckRounded";
import TaskAltRounded from "@mui/icons-material/TaskAltRounded";
import HistoryRounded from "@mui/icons-material/HistoryRounded";
import BoltRounded from "@mui/icons-material/BoltRounded";
import ReplayRounded from "@mui/icons-material/ReplayRounded";
import EditNoteRounded from "@mui/icons-material/EditNoteRounded";
import ImageRounded from "@mui/icons-material/ImageRounded";
import StorefrontRounded from "@mui/icons-material/StorefrontRounded";

const icons = {
  Description: DescriptionRounded,
  AdsClick: AdsClickRounded,
  Article: ArticleRounded,
  Psychology: PsychologyRounded,
  CameraAlt: CameraAltRounded,
  Wallpaper: WallpaperRounded,
  LayersClear: LayersClearRounded,
  AutoFixHigh: AutoFixHighRounded,
  BrandingWatermark: BrandingWatermarkRounded,
  DesignServices: DesignServicesRounded,
  GridView: GridViewRounded,
  ShoppingBag: ShoppingBagRounded,
  FactCheck: FactCheckRounded,
  TaskAlt: TaskAltRounded,
  History: HistoryRounded,
  Bolt: BoltRounded,
  Replay: ReplayRounded,
  EditNote: EditNoteRounded,
  Image: ImageRounded,
  Storefront: StorefrontRounded,
} as const;

interface ToolIconProps extends Omit<SvgIconProps, "fontSize"> {
  name: string;
  size?: number;
  title?: string;
}

export default function ToolIcon({ name, size = 24, title, style, ...props }: ToolIconProps) {
  const MaterialIcon = icons[name as keyof typeof icons] ?? DescriptionRounded;

  return (
    <MaterialIcon
      {...props}
      style={{ ...style, fontSize: size }}
      titleAccess={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    />
  );
}
