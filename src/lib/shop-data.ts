import kirschlikoer from "@/assets/bock/getraenkekuehlung.jpg";
import kaese from "@/assets/bock/kaeseplatte.jpg";
import krapfen from "@/assets/bock/mehlspeisen.jpg";
import huette from "@/assets/bock/ansicht-huette.jpg";
import landschaft from "@/assets/bock/landschaft-1.jpg";
import winter from "@/assets/bock/gipfel-winter.jpg";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  category: "Hofladen" | "Gutscheine";
};

export const products: Product[] = [
  {
    id: "kirschlikoer",
    name: "Hausgemachter Kirschlikör",
    description:
      "Unser meistgelobter Klassiker: Kirschen, Zeit und Geduld. In der 350-ml-Flasche zum Mitnehmen.",
    price: 14.5,
    unit: "350 ml Flasche",
    image: kirschlikoer,
    category: "Hofladen",
  },
  {
    id: "bergkaese",
    name: "Bergkäse vom Almbauern",
    description: "Würziger Bergkäse aus der Nachbarschaft, mindestens sechs Monate gereift.",
    price: 12.9,
    unit: "ca. 500 g Stück",
    image: kaese,
    category: "Hofladen",
  },
  {
    id: "verhackert",
    name: "Verhackert im Glas",
    description: "Hausgemachter Speckaufstrich, kräftig gewürzt – so wie auf der Jausenplatte.",
    price: 8.5,
    unit: "200 g Glas",
    image: krapfen,
    category: "Hofladen",
  },
  {
    id: "schwarzbeermarmelade",
    name: "Schwarzbeer-Marmelade",
    description: "Handgepflückte Heidelbeeren von den Hängen rund um die Hütte.",
    price: 7.5,
    unit: "220 g Glas",
    image: landschaft,
    category: "Hofladen",
  },
  {
    id: "zirbenschnaps",
    name: "Zirbenschnaps",
    description: "Angesetzt mit Zirbenzapfen aus dem Wald oberhalb der Bockhütte.",
    price: 18.0,
    unit: "350 ml Flasche",
    image: winter,
    category: "Hofladen",
  },
  {
    id: "gutschein-jause",
    name: "Gutschein Brettljause für zwei",
    description: "Jause für zwei Personen plus je ein Getränk – einzulösen bei uns auf der Hütte.",
    price: 42.0,
    unit: "Gutschein",
    image: huette,
    category: "Gutscheine",
  },
];

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("de-AT", { style: "currency", currency: "EUR" }).format(value);
