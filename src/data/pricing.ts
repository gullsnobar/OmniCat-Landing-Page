export interface Plan {
  name: string;
  price: number;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
}

export const plans: Plan[] = [
  { name: "Free", price: 0, cadence: "forever", description: "A generous daily workspace for trying every OmniCat tool.", features: ["100 credits per day", "Access to all AI tools", "Standard processing", "Email support"], cta: "Start creating free" },
  { name: "Pro", price: 19, cadence: "per month", description: "For growing stores creating content and visuals every day.", features: ["1,000 credits per day", "All AI tools", "Priority processing", "No watermark on outputs", "Email and chat support", "Seven-day trial"], cta: "Start seven-day trial", featured: true, badge: "Recommended" },
  { name: "Business", price: 49, cadence: "per month", description: "For teams updating larger catalogs and campaign libraries.", features: ["5,000 credits per day", "Highest processing speed", "No watermark on outputs", "Bulk processing", "Priority support", "Seven-day trial"], cta: "Start seven-day trial" },
];
