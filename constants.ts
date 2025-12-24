
import { InventoryItem, ContactInfo, ContainerOffer } from './types';

export const CONTACT_DETAILS: ContactInfo = {
  phone: "58183649",
  whatsapp: "5358183649", // Format for API
  currency: "EUR"
};

export const LOGISTICS = {
  warehouse: "Almacenes Tradex (Reparto Eléctrico)",
  importer: "Cubaelectrónica",
  status: "In-Bond (Mercancía en Cuba)",
  details: "Equipos listos para inspección física y nacionalización inmediata."
};

export const PAYMENT_NOTICE = "Pago aceptado únicamente mediante transferencia bancaria desde el extranjero.";

export const STRATEGIC_DOCS = {
  memorandum: "https://drive.google.com/uc?export=download&id=1dmuRx1lQ8c4oWc7ZkStyKyvkYzKoY1l-",
  presentation: "https://drive.google.com/uc?export=download&id=1Y4arw_IVsKACjAtxTgqmhkMHXsPn2axt"
};

export const METRICS: Record<string, any> = {
  ecoflow: {
    label: "EcoFlow",
    cost: 135000.00,
    minProfit: 71000,
    maxProfit: 189000,
    avgProfit: 130000,
    minRoi: "52.6%",
    maxRoi: "140.2%",
    avgRoi: "96.4%"
  },
  deye: {
    label: "Deye",
    cost: 128599.92,
    minProfit: 116000,
    maxProfit: 169000,
    avgProfit: 142500,
    minRoi: "90.5%",
    maxRoi: "132%",
    avgRoi: "111.2%"
  }
};

export const CONTAINERS: ContainerOffer[] = [
  {
    id: 'ecoflow',
    title: "Contenedor EcoFlow",
    brand: "EcoFlow",
    price: 135000.00,
    offerNumber: "EF-044/2025",
    date: "20-12-2025",
    description: "Distribución Novelec vía Cubaelectrónica. Ubicados en Almacenes Tradex. Estaciones de energía portátiles de última generación.",
    features: ["Importado por Cubaelectrónica", "Stock Físico en Tradex", "Garantía Oficial Novelec"],
    color: "cyan"
  },
  {
    id: 'deye',
    title: "Contenedor Deye",
    brand: "Deye",
    price: 128599.92,
    offerNumber: "DY-022/2025",
    date: "20-12-2025",
    description: "Solución industrial robusta en Almacenes Tradex. Inversores y baterías de alta capacidad.",
    features: ["Canal Oficial Cubaelectrónica", "Ubicación: Reparto Eléctrico", "Inspección Física Disponible"],
    color: "yellow"
  }
];

// Helper to convert Drive view links to thumbnail links
const getDriveImage = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w800`;

export const INVENTORY: any[] = [
  // --- ECOFLOW ---
  {
    id: "e980",
    containerId: 'ecoflow',
    modelName: "EcoFlow E980-US",
    sku: "EFE980-US",
    quantity: 40,
    category: "Generator",
    description: "La estación de energía portátil más equilibrada. Perfecta para el mercado masivo cubano, alimentando ventiladores, luces y laptops durante apagones. Su ligereza la hace ideal para el transporte diario.",
    specs: { 
      capacity: "980 Wh", 
      output: "500W AC (Surge 750W)",
      extras: ["Carga rápida X-Stream", "Química LFP de larga vida", "Gestión vía APP"]
    },
    imagePlaceholder: getDriveImage("1pKzI9KkeEWbr9dkeUmWGNksn_ARTI7u0"),
    additionalImages: [
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-river-2-max.jpg",
      "https://www.ecoflow.com/content/dam/ecoflow/assets/products/river-2-max/river-2-max-ports.png"
    ],
    marketPrice: 470.93,
    estimatedResalePrice: 790.00
  },
  {
    id: "delta2max",
    containerId: 'ecoflow',
    modelName: "EcoFlow DELTA 2 Max",
    sku: "EFDELTA2Max-US",
    quantity: 20,
    category: "Generator",
    description: "Capacidad de 2kWh expandible. Tecnología LFP que garantiza más de 10 años de uso diario. Diseñada para alimentar el 99% de los electrodomésticos del hogar.",
    specs: { 
      capacity: "2048 Wh", 
      output: "2400W (Pico 4800W)",
      extras: ["Doble carga rápida", "Tecnología X-Boost 3100W", "Silenciosa < 30dB"]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-2-max-power-station.jpg",
    additionalImages: [
      "https://www.ecoflow.com/content/dam/ecoflow/assets/products/delta-2-max/delta-2-max-expandable.png"
    ],
    marketPrice: 706.40,
    estimatedResalePrice: 1550.00
  },
  {
    id: "deltapro",
    containerId: 'ecoflow',
    modelName: "EcoFlow DELTA Pro",
    sku: "DELTAPro-1600W-US",
    quantity: 20,
    category: "Generator",
    description: "El estándar de oro para el respaldo del hogar. Capaz de alimentar aires acondicionados y refrigeradores grandes. Su diseño con ruedas facilita el despliegue de emergencia.",
    specs: { 
      capacity: "3.6 kWh", 
      output: "3600W (Pico 7200W)",
      extras: ["Expandible a 25kWh", "Ecosistema inteligente", "Carga en 1.8 horas"]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-power-station.jpg",
    additionalImages: [
      "https://www.ecoflow.com/content/dam/ecoflow/assets/products/delta-pro/delta-pro-wheels.png"
    ],
    marketPrice: 1255.81,
    estimatedResalePrice: 2900.00
  },
  {
    id: "deltapro3",
    containerId: 'ecoflow',
    modelName: "EcoFlow Delta Pro 3",
    sku: "EFDELTAPRO3-US",
    quantity: 8,
    category: "Generator",
    description: "Nueva generación 2025. Más silenciosa, más potente y con diseño ultra-compacto. Capacidad de salida de 230V nativa para el mercado internacional.",
    specs: { 
      capacity: "4096 Wh", 
      output: "4000W (Pico 8000W)",
      extras: ["Salida 230V AC", "Diseño apilable", "Pantalla táctil HD"]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-2.jpg",
    marketPrice: 1334.30,
    estimatedResalePrice: 2900.00
  },
  {
    id: "deltapro3eb",
    containerId: 'ecoflow',
    modelName: "Delta Pro 3 Extra Battery",
    sku: "DELTAProEB-US",
    quantity: 4,
    category: "Battery",
    description: "Módulo de expansión de batería para el sistema Delta Pro 3. Permite duplicar la autonomía sin necesidad de inversor adicional.",
    specs: { capacity: "4096 Wh" },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-extra-battery.jpg",
    marketPrice: 1020.35,
    estimatedResalePrice: 2544.00
  },
  {
    id: "proultra",
    containerId: 'ecoflow',
    modelName: "EcoFlow Delta Pro Ultra (Inverter)",
    sku: "EFDeltaProUltra-US",
    quantity: 8,
    category: "Inverter",
    description: "Inversor inteligente de alta potencia para sistemas de respaldo de toda la casa. El núcleo del ecosistema modular Pro Ultra.",
    specs: { capacity: "Modular", output: "7.2 kW Output" },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-ultra-inverter.jpg",
    marketPrice: 1883.72,
    estimatedResalePrice: 5100.00
  },
  {
    id: "proultra-bp",
    containerId: 'ecoflow',
    modelName: "Delta Pro Ultra Battery",
    sku: "EFDeltaProUltra-BP-US",
    quantity: 20,
    category: "Battery",
    description: "Batería de almacenamiento masivo de 6kWh para el ecosistema Ultra. Apilable para soluciones de largo plazo.",
    specs: { capacity: "6 kWh" },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-ultra-extra-battery.jpg",
    marketPrice: 2354.652,
    estimatedResalePrice: 6365.00
  },
  // --- DEYE ---
  {
    id: "sun10k",
    containerId: 'deye',
    modelName: "Deye SUN-10K Inverter",
    sku: "SUN-10K-SG01HP3",
    quantity: 36,
    category: "Inverter",
    description: "Inversor híbrido trifásico de alta gama. Soporta desequilibrio del 100% en cada fase. Perfecto para industrias cubanas.",
    specs: { capacity: "10 kW", output: "10 kW AC" },
    imagePlaceholder: "https://www.deyeess.com/uploads/allimg/230713/1-230G3151921937.png",
    marketPrice: 1500.00,
    estimatedResalePrice: 2700.00
  },
  {
    id: "seg51",
    containerId: 'deye',
    modelName: "Deye SE-G5.1 Pro-B Battery",
    sku: "SE-G5.1",
    quantity: 40,
    category: "Battery",
    description: "Batería de Litio Ferro-fosfato (LFP) de 5.12kWh. Vida útil de 6000 ciclos para una década de energía.",
    specs: { capacity: "5.12 kWh" },
    imagePlaceholder: "https://deye.com/wp-content/uploads/2024/04/se-g5.1-pro-b.jpg",
    marketPrice: 1000.00,
    estimatedResalePrice: 1750.00
  },
  {
    id: "seg102",
    containerId: 'deye',
    modelName: "Deye SE-G10.2 Battery",
    sku: "SE-G10.2",
    quantity: 20,
    category: "Battery",
    description: "Batería de alta capacidad (10.24kWh). Diseño compacto y alta densidad energética para instalaciones premium.",
    specs: { capacity: "10.24 kWh" },
    imagePlaceholder: "https://deye.com/wp-content/uploads/2025/01/se-g10.2%E4%BE%A7%E9%9D%A2.jpg",
    marketPrice: 1730.00,
    estimatedResalePrice: 2500.00
  }
];
