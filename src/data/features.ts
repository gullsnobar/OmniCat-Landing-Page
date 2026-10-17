import type { ToolIconName } from "../components/ui/ToolIcon";

export type PillarId = "content" | "images" | "shopify";
export type ToolVisual =
  | "descriptions" | "ads" | "blog" | "humanizer"
  | "photoshoot" | "enhancer" | "background" | "remover" | "batch" | "logo" | "watermark"
  | "shopify" | "audit" | "review";

export interface Tool {
  id: string;
  name: string;
  icon: ToolIconName;
  description: string;
  visual: ToolVisual;
}

export interface Pillar {
  id: PillarId;
  label: string;
  icon: ToolIconName;
  tools: Tool[];
}

export const pillars: Pillar[] = [
  {
    id: "content",
    label: "Content",
    icon: "Type",
    tools: [
      { id: "product-descriptions", name: "Product Descriptions", icon: "FileText", description: "Turn product details into clear, search-friendly copy in your brand voice.", visual: "descriptions" },
      { id: "ad-copy", name: "Ad Copy", icon: "Megaphone", description: "Get ready-to-run ad variations for every channel from one product.", visual: "ads" },
      { id: "blog-posts", name: "Blog Posts", icon: "Newspaper", description: "Draft helpful long-form articles around your products and customer questions.", visual: "blog" },
      { id: "humanizer", name: "Humanizer", icon: "PenLine", description: "Rewrite stiff AI text so it sounds natural, without changing the facts.", visual: "humanizer" },
    ],
  },
  {
    id: "images",
    label: "Images",
    icon: "Image",
    tools: [
      { id: "model-photoshoot", name: "AI Model Photoshoot", icon: "Camera", description: "Show your product on models and in real-life scenes. No studio needed.", visual: "photoshoot" },
      { id: "photo-enhancer", name: "Photo Enhancer", icon: "Sparkles", description: "Sharpen detail and upscale photos up to 4× for any storefront.", visual: "enhancer" },
      { id: "background-generator", name: "Background Generator", icon: "ImagePlus", description: "Place your product in a new studio or lifestyle setting from a short prompt.", visual: "background" },
      { id: "background-remover", name: "Background Remover", icon: "Scissors", description: "Get clean, transparent cutouts for catalogs and marketplaces.", visual: "remover" },
      { id: "batch-editing", name: "Batch Image Editing", icon: "Images", description: "Apply the same edits to a whole catalog in one run.", visual: "batch" },
      { id: "logo-generator", name: "Logo Generator", icon: "PenTool", description: "Explore logo directions for a new store or product line.", visual: "logo" },
      { id: "watermark-remover", name: "Watermark Remover", icon: "Eraser", description: "Clean up product photos you own for reuse.", visual: "watermark" },
    ],
  },
  {
    id: "shopify",
    label: "Shopify",
    icon: "Store",
    tools: [
      { id: "shopify-integration", name: "Shopify Product Integration", icon: "ShoppingBag", description: "Open a product, improve its copy and photos, then send it back to your store.", visual: "shopify" },
      { id: "product-audit", name: "Product Catalog Audit", icon: "ClipboardCheck", description: "Find listings with missing copy or weak photos, sorted by priority.", visual: "audit" },
      { id: "review-before-publishing", name: "Review Before Publishing", icon: "BadgeCheck", description: "Check and edit every result. Nothing goes live until you approve it.", visual: "review" },
    ],
  },
];
