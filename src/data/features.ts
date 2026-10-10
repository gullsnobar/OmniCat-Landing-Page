export type FeatureCategory = "content" | "images" | "shopify";
export type FeatureLayout = "wide" | "large" | "medium" | "compact" | "strip";
export type FeatureVisual = "copy" | "photoshoot" | "enhancer" | "background" | "batch" | "remover" | "logo" | "watermark" | "shopify" | "audit";

export interface ProductFeature {
  id: string;
  category: FeatureCategory;
  categoryLabel: string;
  name: string;
  icon: string;
  description: string;
  labels: [string, string];
  action: string;
  layout: FeatureLayout;
  visual?: FeatureVisual;
}

export const productFeatures: ProductFeature[] = [
  { id: "product-descriptions", category: "content", categoryLabel: "Content tool", name: "Product Descriptions", icon: "Description", description: "Turn product details into structured, conversion-focused copy that is clear, useful, and ready to refine.", labels: ["SEO-aware", "Brand editable"], action: "Explore tool", layout: "large", visual: "copy" },
  { id: "model-photoshoot", category: "images", categoryLabel: "Image tool", name: "AI Model Photoshoot", icon: "CameraAlt", description: "Place products into polished campaign concepts while keeping the original item central and recognizable.", labels: ["Lifestyle scenes", "Campaign ready"], action: "Explore tool", layout: "large", visual: "photoshoot" },
  { id: "photo-enhancer", category: "images", categoryLabel: "Image tool", name: "Photo Enhancer", icon: "AutoFixHigh", description: "Improve product clarity and upscale image resolution for storefronts, campaigns, and marketplaces.", labels: ["Detail recovery", "4× upscale"], action: "View Photo Enhancer", layout: "wide", visual: "enhancer" },
  { id: "background-generator", category: "images", categoryLabel: "Image tool", name: "Background Generator", icon: "Wallpaper", description: "Create clean studio treatments or campaign settings around an existing product subject.", labels: ["Three scene modes", "Product preserved"], action: "View Background Generator", layout: "wide", visual: "background" },
  { id: "shopify-integration", category: "shopify", categoryLabel: "Shopify workflow", name: "Shopify Product Integration", icon: "ShoppingBag", description: "Open a product, prepare its copy and visuals, then return approved work to the store from one connected flow.", labels: ["Product linked", "Merchant controlled"], action: "Learn more", layout: "wide", visual: "shopify" },
  { id: "product-audit", category: "shopify", categoryLabel: "Shopify workflow", name: "Product Catalog Audit", icon: "FactCheck", description: "Review listings for incomplete descriptions, inconsistent imagery, and content that needs attention.", labels: ["Catalog review", "Priority queue"], action: "Learn more", layout: "medium", visual: "audit" },
  { id: "ad-copy", category: "content", categoryLabel: "Content tool", name: "Ad Copy", icon: "AdsClick", description: "Create focused campaign angles and channel-ready variations from the product context you already have.", labels: ["Multi-platform", "Fast variations"], action: "Explore tool", layout: "medium" },
  { id: "batch-editing", category: "images", categoryLabel: "Catalog tool", name: "Batch Image Editing", icon: "GridView", description: "Apply consistent image operations across multiple product assets without repeating the same setup.", labels: ["Bulk workflow", "Consistent output"], action: "Explore tool", layout: "medium", visual: "batch" },
  { id: "background-remover", category: "images", categoryLabel: "Image tool", name: "Background Remover", icon: "LayersClear", description: "Create clean product cutouts for catalogs, marketplaces, and new campaign compositions.", labels: ["Clean edges", "Reusable cutout"], action: "Explore tool", layout: "medium", visual: "remover" },
  { id: "blog-posts", category: "content", categoryLabel: "Content tool", name: "Blog Posts", icon: "Article", description: "Build useful long-form drafts around products, customer questions, and campaign themes.", labels: ["Long-form draft", "SEO structure"], action: "Explore tool", layout: "medium" },
  { id: "humanizer", category: "content", categoryLabel: "Content tool", name: "Humanizer", icon: "Psychology", description: "Refine stiff AI text into more natural phrasing while preserving its core meaning and product facts.", labels: ["Natural tone", "Meaning retained"], action: "Explore tool", layout: "medium" },
  { id: "logo-generator", category: "images", categoryLabel: "Brand tool", name: "Logo Generator", icon: "DesignServices", description: "Explore focused brand-mark directions for new stores, product lines, and campaign concepts.", labels: ["Brand concepts", "Multiple directions"], action: "Explore tool", layout: "medium", visual: "logo" },
  { id: "watermark-remover", category: "images", categoryLabel: "Image tool", name: "Watermark Remover", icon: "BrandingWatermark", description: "Remove visual obstructions from product imagery you own and prepare cleaner source assets.", labels: ["Owned assets", "Clean output"], action: "Explore tool", layout: "compact", visual: "watermark" },
  { id: "review-before-publishing", category: "shopify", categoryLabel: "Publishing control", name: "Review Before Publishing", icon: "TaskAlt", description: "Inspect and edit every generated result before anything is applied to your Shopify store.", labels: ["Draft first", "Final approval"], action: "Learn more", layout: "compact" },
  { id: "generation-history", category: "shopify", categoryLabel: "Workspace", name: "Generation History", icon: "History", description: "Return to earlier jobs, compare versions, and reuse results across future product work.", labels: ["Saved results", "Reusable history"], action: "Learn more", layout: "compact" },
  { id: "credit-processing", category: "shopify", categoryLabel: "Usage", name: "Credit-Based Processing", icon: "Bolt", description: "See the cost of each generation and manage usage consistently across the complete toolkit.", labels: ["Clear job cost", "Daily allowance"], action: "Learn more", layout: "compact" },
  { id: "automatic-refunds", category: "shopify", categoryLabel: "Usage protection", name: "Automatic Credit Refunds", icon: "Replay", description: "If an AI job fails, the credits used for that job are returned automatically to your balance.", labels: ["Failed job covered", "Automatic return"], action: "Learn more", layout: "strip" },
];
