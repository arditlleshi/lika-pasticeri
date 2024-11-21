import { Clock, Star } from "lucide-react";
import { Truck } from "lucide-react";
import photo1 from "../assets/images/bakery-1.jpg";
import photo2 from "../assets/images/bakery-2.jpg";
import photo3 from "../assets/images/bakery-3.jpg";
import bakllava1 from "../assets/images/bakllava-1.jpg";
import bakllava2 from "../assets/images/bakllava-2.jpg";
import bakllava3 from "../assets/images/bakllava-3.jpg";
import bakery1 from "../assets/images/bakery-1.jpg";
import bakery2 from "../assets/images/bakery-2.jpg";
import bakery3 from "../assets/images/bakery-3.jpg";

export const heroImages = [
  {
    url: photo1,
    alt: "Pasticeri i Freskët",
  },
  {
    url: photo2,
    alt: "Brendësia e Pasticerisë",
  },
  {
    url: photo3,
    alt: "Pastritë e Freskëta",
  },
];
export const baklavaImages = [
  {
    url: bakllava1,
    alt: "Baklava Tradicionale",
  },
  {
    url: bakllava2,
    alt: "Baklava me Pistac",
  },
  {
    url: bakllava3,
    alt: "Baklava me Mjaltë",
  },
];

export const features = [
  {
    icon: Clock,
    title: "Dërgim në Ditën e Sotme",
    description: "Porositni para orës 14:00 për dërgim në ditën e sotme",
  },
  {
    icon: Truck,
    title: "Dërgim Falas",
    description: "Dërgim falas për porosi mbi 2500 LEK",
  },
  {
    icon: Star,
    title: "Cilësi Premium",
    description: "Bërë të freskëta çdo ditë me përbërës premium",
  },
];

export const categoryShowcase = [
  {
    name: "Ëmërtësia Tradicionale",
    description:
      "I punuara me dashuri duke përdorur receta tradicionale shqiptare të kaluar nga brezi në brez",
    image: bakery1,
    products: ["Baklava", "Kadaif", "Trilece", "Revani"],
  },
  {
    name: "Bukë Artisanale",
    description:
      "Bukë të freskëta, të krokëta dhe aromatike të pjekura çdo ditë me përbërës premium",
    image: bakery2,
    products: ["Sourdough", "Baguette", "Grurë e Plotë", "Bukë Dëgërrasi"],
  },
  {
    name: "Torta Premium",
    description:
      "Torta elegante dhe të shijshme perfekte për çdo rast të veçantë",
    image: bakery3,
    products: ["Torta Dasmash", "Torta të Ditëlindjeve", "Torta e Këngëve"],
  },
];
