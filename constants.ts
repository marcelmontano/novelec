import { InventoryItem, ContactInfo } from './types';

export const CONTACT_DETAILS: ContactInfo = {
  phone: "58183649",
  whatsapp: "5358183649", // Format for API
  price: 135000,
  currency: "EUR"
};

// Helper to convert Drive view links to thumbnail links for direct embedding
const getDriveImage = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w800`;

export const INVENTORY: InventoryItem[] = [
  {
    id: "e980",
    modelName: "EcoFlow E980-US",
    sku: "EFE980-US",
    quantity: 40,
    category: "Generator",
    description: "Estación de energía portátil compacta y eficiente.",
    specs: {
      capacity: "980 Wh",
      output: "500W (Surge 750W)",
      extras: ["LFP Battery (3000 cycles)", "EPS < 30ms"]
    },
    imagePlaceholder: "https://picsum.photos/id/1/400/400"
  },
  {
    id: "delta2max",
    modelName: "EcoFlow DELTA 2 Max",
    sku: "EFDELTA2Max-US",
    quantity: 20,
    category: "Generator",
    description: "Potencia para el hogar. Expandible y de carga rápida.",
    specs: {
      capacity: "2048 Wh (Max 6kWh)",
      output: "2400W (X-Boost 3100W)",
      extras: ["LFP Battery", "X-Stream Fast Charge"]
    },
    imagePlaceholder: "https://picsum.photos/id/2/400/400"
  },
  {
    id: "deltapro",
    modelName: "EcoFlow DELTA Pro",
    sku: "DELTAPro-1600W-US",
    quantity: 20,
    category: "Generator",
    description: "La solución definitiva para respaldo doméstico.",
    specs: {
      capacity: "3.6 kWh (Max 10.8kWh)",
      output: "3600W (Surge 7200W)",
      extras: ["LFP Battery (3500 cycles)", "Soporta carga EV"]
    },
    imagePlaceholder: getDriveImage("1lyIiyeeSsu1t0dWeOXR-o48V-RDbvE3r")
  },
  {
    id: "deltapro3",
    modelName: "Delta Pro 3",
    sku: "EFDELTAPRO3-US",
    quantity: 8,
    category: "Generator",
    description: "Nueva generación. Más potencia, más versatilidad.",
    specs: {
      capacity: "4 kWh (Max 36kWh)",
      output: "4kW (Dual Voltage 120/240V)",
      extras: ["5 años de garantía", "Carga solar 4kW"]
    },
    imagePlaceholder: getDriveImage("1ZcDUTvI9FfZyVEwogUDD_PuBm42Bx8Fs")
  },
  {
    id: "deltapro3eb",
    modelName: "Delta Pro 3 Extra Battery",
    sku: "DELTAProEB-US",
    quantity: 4,
    category: "Battery",
    description: "Batería de expansión para el sistema Delta Pro 3.",
    specs: {
      capacity: "4000 Wh",
      extras: ["LFP Battery", "Integración perfecta"]
    },
    imagePlaceholder: "https://picsum.photos/id/5/400/400"
  },
  {
    id: "proultra",
    modelName: "EcoFlow Delta Pro Ultra (Inverter)",
    sku: "EFDeltaProUltra-US",
    quantity: 8,
    category: "Inverter",
    description: "El cerebro del sistema más potente de EcoFlow.",
    specs: {
      capacity: "N/A (Inversor)",
      output: "7.2kW - 21.6kW",
      extras: ["Online UPS 0ms", "Salida 120V/240V"]
    },
    imagePlaceholder: getDriveImage("1dvXBL2i_HWwIUoxXhO3bmeisXHnvH0mP")
  },
  {
    id: "proultraeb",
    modelName: "Delta Pro Ultra Battery",
    sku: "EFDeltaProUltra-BP-US",
    quantity: 20,
    category: "Battery",
    description: "Batería masiva para el sistema Ultra.",
    specs: {
      capacity: "6 kWh",
      weight: "50.7 kg",
      extras: ["LFP Battery", "IP54"]
    },
    imagePlaceholder: "https://picsum.photos/id/7/400/400"
  }
];