export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  tags?: string[];
};

export type MenuSection = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "jause",
    title: "Brettljausen & Kalte Küche",
    note: "Alles hausgemacht, vom eigenen Hof und von Bauern aus der Umgebung.",
    items: [
      {
        name: "Bockhütten-Brettljause",
        description: "Hausspeck, Hauswurst, Bergkäse, Verhackert, Kren, Bauernbrot",
        price: "16,50",
      },
      {
        name: "Käseplatte vom Brett",
        description: "Bergkäse, Kümmelkäse, Frischkäse, Paprikaaufstrich, Bauernbrot",
        price: "13,90",
        tags: ["vegetarisch"],
      },
      {
        name: "Verhackert-Brot",
        description: "Kräftiges Bauernbrot mit hausgemachtem Verhackert und Zwiebel",
        price: "6,50",
      },
      {
        name: "Almbutterbrot mit Schnittlauch",
        price: "5,50",
        tags: ["vegetarisch"],
      },
    ],
  },
  {
    id: "warm",
    title: "Warme Almküche",
    items: [
      {
        name: "Krautsuppe mit Löwenzahnblüte",
        description: "Cremige Krautsuppe mit Kräutern aus der Almwiese",
        price: "6,90",
        tags: ["vegetarisch"],
      },
      {
        name: "Speckknödelsuppe",
        description: "Hausgemachter Speckknödel in kräftiger Rindsuppe",
        price: "7,50",
      },
      {
        name: "Kaspressknödelsuppe",
        description: "Zwei Kaspressknödel in Rindsuppe, mit Schnittlauch",
        price: "8,50",
      },
      {
        name: "Kasnudeln",
        description: "Kärntner Kasnudeln mit brauner Butter und Salat",
        price: "13,50",
        tags: ["vegetarisch"],
      },
      {
        name: "Gulasch vom Almrind",
        description: "Mit Bauernbrot oder Semmelknödel",
        price: "14,90",
      },
      {
        name: "Bratwurst mit Sauerkraut",
        price: "11,50",
      },
    ],
  },
  {
    id: "suess",
    title: "Mehlspeisen",
    note: "Frisch gebacken – solange der Vorrat reicht.",
    items: [
      { name: "Bauernkrapfen mit Marmelade", price: "5,50" },
      { name: "Topfen-Schwarzbeerstrudel", description: "Mit Vanillesauce oder Schlagobers", price: "6,50" },
      { name: "Kaiserschmarrn mit Zwetschkenröster", price: "12,50" },
      { name: "Hausgemachter Kuchen", description: "Täglich wechselnd", price: "4,50" },
    ],
  },
  {
    id: "getraenke",
    title: "Getränke",
    note: "Die Getränke kühlen wir im Brunnen vor der Hütte – für Zwei- und Vierbeiner.",
    items: [
      { name: "Almbrunnen-Wasser", price: "gratis" },
      { name: "Bier vom Fass 0,5 l", price: "4,60" },
      { name: "Radler / Almradler 0,5 l", price: "4,60" },
      { name: "Hausgemachter Holundersirup mit Wasser", price: "3,20" },
      { name: "Hüttentee mit Kräutern von der Alm", price: "3,80" },
      { name: "Hausgemachter Kirschlikör 2 cl", price: "3,50" },
      { name: "Zirben- oder Enzianschnaps 2 cl", price: "3,50" },
    ],
  },
];
