import { v4 as uuidv4 } from "uuid";

export const medicines = [
  {
    id: uuidv4(),
    name: "Acetaminofen",
    laboratory: "Mk",
    description: "500mg tabletas",
    pharmacy: "Variante",
    amount: 2,
  },
  {
    id: uuidv4(),
    name: "Tramadol",
    laboratory: "Genfar",
    description: "100mg ml",
    pharmacy: "Tricentenario",
    amount: 1,
  },
  {
    id: uuidv4(),
    name: "Clotrimazol",
    laboratory: "AG",
    description: "crema 1% 4",
    pharmacy: "Popular",
    amount: 1,
  },
  {
    id: uuidv4(),
    name: "Betametasona",
    laboratory: "Genfar",
    description: "Unguento al 0.05%",
    pharmacy: "Loceria",
    amount: 3,
  },
];
