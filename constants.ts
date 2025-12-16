import { InventoryItem, ContactInfo, ContainerOffer } from './types';

export const CONTACT_DETAILS: ContactInfo = {
  phone: "58183649",
  whatsapp: "5358183649", // Format for API
  currency: "EUR"
};

export const CONTAINERS: ContainerOffer[] = [
  {
    id: 'ecoflow',
    title: "Contenedor EcoFlow",
    brand: "EcoFlow",
    price: 135000,
    description: "Soluciones portátiles y de respaldo doméstico de alta gama.",
    features: ["Generadores Portátiles", "Sistemas Delta Pro & Ultra", "Ideal Retail y Hogar"],
    color: "cyan"
  },
  {
    id: 'deye',
    title: "Contenedor Deye",
    brand: "Deye",
    price: 128600,
    description: "Infraestructura híbrida industrial y residencial robusta.",
    features: ["Inversores Híbridos 10kW", "Baterías LFP Rack/Mural", "Ideal Instaladores"],
    color: "yellow" // Deye often associated with industrial/gold/yellow elements or just distinct from Cyan
  }
];

// Helper to convert Drive view links to thumbnail links for direct embedding
const getDriveImage = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w800`;

export const INVENTORY: InventoryItem[] = [
  // --- CONTENEDOR DEYE ---
  {
    id: "sun10k",
    containerId: 'deye',
    modelName: "Deye SUN-10K-SG02LP2-US-AM3",
    sku: "SUN-10K-SG02LP2-US-AM3",
    quantity: 36,
    category: "Inverter",
    description: "Inversor Híbrido Split Phase 10kW. Gestión inteligente de energía, soporta generador diesel y acople AC.",
    specs: {
      capacity: "10 kW",
      output: "10000W (Split Phase 120/240V)",
      extras: ["Carga/Descarga 250A", "Pantalla Táctil Color", "IP65", "Soporta Generador Diesel"]
    },
    imagePlaceholder: "https://www.deyeinverter.com/deyeinverter/2025/07/09/9.png"
  },
  {
    id: "seg51",
    containerId: 'deye',
    modelName: "Deye SE-G5.1 Pro-B",
    sku: "SE-G5.1",
    quantity: 40,
    category: "Battery",
    description: "Batería LiFePO4 Cobalt Free. Alta seguridad, diseño modular para rack o pared.",
    specs: {
      capacity: "5.12 kWh",
      output: "100 Ah",
      weight: "44 kg",
      extras: [">6000 Ciclos (25°C)", "IP20", "Profundidad Descarga 80%", "BMS Inteligente"]
    },
    imagePlaceholder: "https://deye.com/wp-content/uploads/2024/04/se-g5.1-pro-b.jpg"
  },
  {
    id: "seg102",
    containerId: 'deye',
    modelName: "Deye SE-G10.2",
    sku: "SE-G10.2",
    quantity: 20,
    category: "Battery",
    description: "Módulo de batería de alta capacidad (200Ah). Ideal para autonomía extendida y sistemas robustos.",
    specs: {
      capacity: "10.24 kWh",
      output: "200 Ah",
      weight: "85 kg",
      extras: [">6000 Ciclos", "Cobalt Free LFP", "Escalable hasta 64 unidades"]
    },
    imagePlaceholder: "https://deye.com/wp-content/uploads/2024/04/se-g5.1-pro-b.jpg"
  },
  
  // --- CONTENEDOR ECOFLOW ---
  {
    id: "e980",
    containerId: 'ecoflow',
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
    imagePlaceholder: getDriveImage("1pKzI9KkeEWbr9dkeUmWGNksn_ARTI7u0")
  },
  {
    id: "delta2max",
    containerId: 'ecoflow',
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
    imagePlaceholder: getDriveImage("1nDklpO94bxYo8yv3Y-eTeUcsaKSK855D")
  },
  {
    id: "deltapro",
    containerId: 'ecoflow',
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
    imagePlaceholder: getDriveImage("1GU3YRb2eWRRHdFaRA_vnrsayH31mlGQh")
  },
  {
    id: "deltapro3",
    containerId: 'ecoflow',
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
    imagePlaceholder: getDriveImage("1685O-gizg2Hy9Mha1f6rBS6PTgk_pii4")
  },
  {
    id: "deltapro3eb",
    containerId: 'ecoflow',
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
    containerId: 'ecoflow',
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
    imagePlaceholder: getDriveImage("17TzfJfyDEF5WuOdGOeK-T-BhFQejt7li")
  },
  {
    id: "proultraeb",
    containerId: 'ecoflow',
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