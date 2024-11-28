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

export const category1Images = [
  {
    url: bakery1,
    alt: "Baklava",
  },
  {
    url: bakery2,
    alt: "Bukë Artisanale",
  },
];

export const category2Images = [
  {
    url: bakery3,
    alt: "Torta Premium",
  },
  {
    url: bakery2,
    alt: "Torta Premium",
  },
];

export const category3Images = [
  {
    url: photo1,
    alt: "Torta Premium",
  },
  {
    url: photo2,
    alt: "Torta Premium",
  },
];

export const features = [
  {
    icon: Clock,
    title: "Porosi e Shpejtë",
    description: "Produktet tuaja të freskëta dorëzohen në kohë rekord, brenda 48 orëve.",
  },
  {
    icon: Truck,
    title: "Dërgesa për Produktet tona",
    description: "Ofrojmë shërbim dërgese për disa nga produktet tona. Porositni tani dhe shijoni shijen autentike!",
  },
  {
    icon: Star,
    title: "Shije dhe Cilësi Shqiptare",
    description: "Produktet tona janë të freskëta, përgatiten çdo ditë me dashuri dhe përbërës të cilësisë më të lartë.",
  },
];


export const categoryShowcase = [
  {
    name: "Ëmbëlsira Tradicionale",
    searchName: "Traditional",
    description:
      "Të punuara me dashuri duke përdorur receta tradicionale shqiptare të kaluar nga brezi në brez",
    image: bakery1,
    products: ["Baklava", "Kadaif", "Trilece", "Revani"],
  },
  {
    name: "Bukë Artisanale",
    searchName: "Cakes",
    description:
      "Bukë të freskëta, të krokëta dhe aromatike të pjekura çdo ditë me përbërës premium",
    image: bakery2,
    products: ["Sourdough", "Baguette", "Grurë e Plotë", "Bukë Dëgërrasi"],
  },
  {
    name: "Torta",
    searchName: "Premium",
    description:
      "Torta elegante dhe të shijshme perfekte për çdo rast të veçantë",
    image: bakery3,
    products: ["Torta Dasmash", "Torta të Ditëlindjeve", "Torta për Çdo Rast"],
  },
];
