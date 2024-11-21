import { LucideIcon } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  subcategory?: string;
  description: string;
  image: string;
  bestseller?: boolean;
}

export interface MenuBarCategory {
  id: keyof MenuBarItems;
  name: string;
  icon: LucideIcon;
  image: string;
  description: string;
}

export interface MenuBarItem {
  name: string;
  price: string;
  description: string;
}

export interface MenuBarItems {
  [key: string]: MenuBarItem[];
}
