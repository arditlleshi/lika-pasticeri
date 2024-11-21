
import { MenuBarItems, MenuBarCategory } from "./types";
import { Coffee, Wine, Beer, Milk } from "lucide-react";

export const menuBarItems: MenuBarItems = {
  coffee: [
    {
      name: "Espresso",
      price: "150 LEK",
      description: "Single shot of espresso",
    },
    {
      name: "Double Espresso",
      price: "200 LEK",
      description: "Double shot of espresso",
    },
    {
      name: "Cappuccino",
      price: "250 LEK",
      description: "Espresso with steamed milk and foam",
    },
    {
      name: "Cafe Latte",
      price: "280 LEK",
      description: "Espresso with steamed milk",
    },
    {
      name: "American Coffee",
      price: "200 LEK",
      description: "Long black coffee",
    },
    {
      name: "Macchiato",
      price: "180 LEK",
      description: "Espresso with a dash of milk foam",
    },
    {
      name: "Iced Coffee",
      price: "300 LEK",
      description: "Cold coffee with ice cream",
    },
  ],
  alcohol: [
    {
      name: "Red Wine (Glass)",
      price: "400 LEK",
      description: "Selected Albanian red wine",
    },
    {
      name: "White Wine (Glass)",
      price: "400 LEK",
      description: "Selected Albanian white wine",
    },
    {
      name: "Raki",
      price: "250 LEK",
      description: "Traditional Albanian spirit",
    },
    {
      name: "Cognac",
      price: "450 LEK",
      description: "Premium cognac",
    },
    {
      name: "Whiskey",
      price: "500 LEK",
      description: "Selected whiskey brands",
    },
    {
      name: "Vodka",
      price: "350 LEK",
      description: "Premium vodka",
    },
  ],
  beer: [
    {
      name: "Korça Draft",
      price: "300 LEK",
      description: "Local Albanian beer",
    },
    {
      name: "Heineken",
      price: "350 LEK",
      description: "International premium beer",
    },
    {
      name: "Corona",
      price: "400 LEK",
      description: "Mexican beer",
    },
    {
      name: "Peja",
      price: "300 LEK",
      description: "Regional favorite",
    },
  ],
  cocktails: [
    {
      name: "Mojito",
      price: "500 LEK",
      description: "Rum, mint, lime, sugar, soda",
    },
    {
      name: "Aperol Spritz",
      price: "550 LEK",
      description: "Aperol, prosecco, soda",
    },
    {
      name: "Negroni",
      price: "600 LEK",
      description: "Gin, campari, vermouth",
    },
    {
      name: "Margarita",
      price: "550 LEK",
      description: "Tequila, triple sec, lime",
    },
    {
      name: "Moscow Mule",
      price: "500 LEK",
      description: "Vodka, ginger beer, lime",
    },
  ],
  "hot-drinks": [
    {
      name: "Tea Selection",
      price: "200 LEK",
      description: "Various flavors available",
    },
    {
      name: "Hot Chocolate",
      price: "300 LEK",
      description: "Rich and creamy chocolate",
    },
    {
      name: "Salep",
      price: "250 LEK",
      description: "Traditional winter drink",
    },
    {
      name: "Chamomile Tea",
      price: "200 LEK",
      description: "Soothing herbal tea",
    },
  ],
  "soft-drinks": [
    {
      name: "Fresh Orange Juice",
      price: "300 LEK",
      description: "Freshly squeezed oranges",
    },
    {
      name: "Lemonade",
      price: "250 LEK",
      description: "Fresh lemon juice with mint",
    },
    {
      name: "Coca Cola",
      price: "200 LEK",
      description: "Classic soft drink",
    },
    {
      name: "Sparkling Water",
      price: "150 LEK",
      description: "Natural mineral water",
    },
    {
      name: "Smoothies",
      price: "400 LEK",
      description: "Various fruit combinations",
    },
  ],
};

export const menuBarCategories: MenuBarCategory[] = [
  {
    id: "coffee",
    name: "Coffee",
    icon: Coffee,
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80",
    description: "Expertly crafted coffee beverages made with premium beans",
  },
  {
    id: "alcohol",
    name: "Alcohol",
    icon: Wine,
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80",
    description: "Fine selection of wines and premium spirits",
  },
  {
    id: "beer",
    name: "Beer",
    icon: Beer,
    image:
      "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80",
    description: "Local and international craft beers",
  },
  {
    id: "cocktails",
    name: "Cocktails",
    icon: Wine,
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80",
    description: "Signature cocktails crafted by our expert mixologists",
  },
  {
    id: "hot-drinks",
    name: "Hot Drinks",
    icon: Coffee,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80",
    description: "Comforting hot beverages for any time of day",
  },
  {
    id: "soft-drinks",
    name: "Soft Drinks",
    icon: Milk,
    image:
      "https://images.unsplash.com/photo-1437418747212-8d9709afab22?auto=format&fit=crop&q=80",
    description: "Refreshing non-alcoholic beverages and fresh juices",
  },
];