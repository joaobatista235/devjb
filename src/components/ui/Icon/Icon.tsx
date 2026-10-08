import {
  ArrowRight, ArrowUpRight, Check, Images, LayoutGrid, MapPin, MessageCircle, MessagesSquare,
  Minus, MonitorSmartphone, Plus, Search, Share2, Smartphone, SlidersHorizontal, Sparkles, Zap,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/types/content";

const icons = {
  "arrow-up-right": ArrowUpRight,
  "arrow-right": ArrowRight,
  check: Check,
  plus: Plus,
  minus: Minus,
  "monitor-smartphone": MonitorSmartphone,
  "layout-grid": LayoutGrid,
  images: Images,
  "message-circle": MessageCircle,
  "share-2": Share2,
  "map-pin": MapPin,
  search: Search,
  "messages-square": MessagesSquare,
  "sliders-horizontal": SlidersHorizontal,
  smartphone: Smartphone,
  zap: Zap,
  sparkles: Sparkles,
} satisfies Record<IconName, LucideIcon>;

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const Glyph = icons[name];
  return <Glyph size={size} strokeWidth={1.75} aria-hidden="true" />;
}
