export type PillarId = "content" | "images" | "shopify";
export type ToolVisual =
  | "descriptions" | "ads" | "blog" | "humanizer"
  | "photoshoot" | "enhancer" | "background" | "remover" | "batch" | "logo" | "watermark"
  | "shopify" | "audit" | "review";

export interface Tool {
  id: string;
  name: string;
  icon: string;
  description: string;
  labels: [string, string];
  action: string;
  visual: ToolVisual;
}

export interface Pillar {
  id: PillarId;
  label: string;
  icon: string;
  tagline: string;
  tools: Tool[];
}

export interface PlatformFeature {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const pillars: Pillar[] = [
  {
    id: "content",
    label: "Content",
    icon: "EditNote",
    tagline: "Copy that sells, in your voice",
    tools: [
      { id: "product-descriptions", name: "Product Descriptions", icon: "Description", description: "Turn product details into structured, conversion-focused copy that is clear, useful, and ready to refine.", labels: ["SEO-aware", "Brand editable"], action: "Explore Product Descriptions", visual: "descriptions" },
      { id: "ad-copy", name: "Ad Copy", icon: "AdsClick", description: "Create focused campaign angles and channel-ready variations from the product context you already have.", labels: ["Multi-platform", "Fast variations"], action: "Explore Ad Copy", visual: "ads" },
      { id: "blog-posts", name: "Blog Posts", icon: "Article", description: "Build useful long-form drafts around products, customer questions, and campaign themes.", labels: ["Long-form draft", "SEO structure"], action: "Explore Blog Posts", visual: "blog" },
      { id: "humanizer", name: "Humanizer", icon: "Psychology", description: "Refine stiff AI text into more natural phrasing while preserving its core meaning and product facts.", labels: ["Natural tone", "Meaning retained"], action: "Explore Humanizer", visual: "humanizer" },
    ],
  },
  {
    id: "images",
    label: "Images",
    icon: "Image",
    tagline: "Studio-grade product visuals",
    tools: [
      { id: "model-photoshoot", name: "AI Model Photoshoot", icon: "CameraAlt", description: "Place products into polished campaign concepts while keeping the original item central and recognizable.", labels: ["Lifestyle scenes", "Campaign ready"], action: "Explore Model Photoshoot", visual: "photoshoot" },
      { id: "photo-enhancer", name: "Photo Enhancer", icon: "AutoFixHigh", description: "Improve product clarity and upscale image resolution for storefronts, campaigns, and marketplaces.", labels: ["Detail recovery", "4× upscale"], action: "Explore Photo Enhancer", visual: "enhancer" },
      { id: "background-generator", name: "Background Generator", icon: "Wallpaper", description: "Create clean studio treatments or campaign settings around an existing product subject.", labels: ["Prompted scenes", "Product preserved"], action: "Explore Background Generator", visual: "background" },
      { id: "background-remover", name: "Background Remover", icon: "LayersClear", description: "Create clean product cutouts for catalogs, marketplaces, and new campaign compositions.", labels: ["Clean edges", "Transparent PNG"], action: "Explore Background Remover", visual: "remover" },
      { id: "batch-editing", name: "Batch Image Editing", icon: "GridView", description: "Apply consistent image operations across multiple product assets without repeating the same setup.", labels: ["Bulk workflow", "Consistent output"], action: "Explore Batch Editing", visual: "batch" },
      { id: "logo-generator", name: "Logo Generator", icon: "DesignServices", description: "Explore focused brand-mark directions for new stores, product lines, and campaign concepts.", labels: ["Brand concepts", "Multiple directions"], action: "Explore Logo Generator", visual: "logo" },
      { id: "watermark-remover", name: "Watermark Remover", icon: "BrandingWatermark", description: "Remove visual obstructions from product imagery you own and prepare cleaner source assets.", labels: ["Owned assets", "Clean output"], action: "Explore Watermark Remover", visual: "watermark" },
    ],
  },
  {
    id: "shopify",
    label: "Shopify",
    icon: "Storefront",
    tagline: "Publish with full control",
    tools: [
      { id: "shopify-integration", name: "Shopify Product Integration", icon: "ShoppingBag", description: "Open a product, prepare its copy and visuals, then return approved work to the store from one connected flow.", labels: ["Product linked", "Merchant controlled"], action: "See how it works", visual: "shopify" },
      { id: "product-audit", name: "Product Catalog Audit", icon: "FactCheck", description: "Review listings for incomplete descriptions, inconsistent imagery, and content that needs attention.", labels: ["Catalog review", "Priority queue"], action: "See how it works", visual: "audit" },
      { id: "review-before-publishing", name: "Review Before Publishing", icon: "TaskAlt", description: "Inspect and edit every generated result before anything is applied to your Shopify store.", labels: ["Draft first", "Final approval"], action: "See how it works", visual: "review" },
    ],
  },
];

export const platformFeatures: PlatformFeature[] = [
  { id: "generation-history", name: "Generation History", icon: "History", description: "Return to earlier jobs, compare versions, and reuse results." },
  { id: "credit-processing", name: "Credit-Based Processing", icon: "Bolt", description: "See the cost of every job before you run it." },
  { id: "automatic-refunds", name: "Automatic Credit Refunds", icon: "Replay", description: "Credits for a failed job return to your balance automatically." },
];
