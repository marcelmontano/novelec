
import { InventoryItem, ContactInfo, ContainerOffer } from './types';

export const CONTACT_DETAILS: ContactInfo = {
  phone: "58183649",
  whatsapp: "5358183649", // Format for API
  currency: "EUR"
};

export const PAYMENT_NOTICE = "Pago aceptado únicamente mediante transferencia bancaria desde el extranjero.";

export const LOGISTICS = {
  warehouse: "Almacenes Tradex (Reparto Eléctrico)",
  importer: "Cubaelectrónica",
  status: "In-Bond (Mercancía en Cuba)",
  details: "Equipos listos para inspección física y nacionalización inmediata."
};

export const STRATEGIC_DOCS = {
  memorandum: "https://drive.google.com/uc?export=download&id=1dmuRx1lQ8c4oWc7ZkStyKyvkYzKoY1l-",
  presentation: "https://drive.google.com/uc?export=download&id=1Y4arw_IVsKACjAtxTgqmhkMHXsPn2axt"
};

export const CONTAINERS: ContainerOffer[] = [
  {
    id: 'ecoflow',
    title: "Contenedor EcoFlow",
    brand: "EcoFlow",
    price: 135000,
    description: "Distribución Novelec vía Cubaelectrónica. Ubicados en Almacenes Tradex (Reparto Eléctrico). Máxima rotación y ganancia rápida.",
    features: [
      "Importado por Cubaelectrónica",
      "Stock Físico en Tradex",
      "Beneficio Neto: hasta €189k",
      "Garantía Oficial Novelec"
    ],
    color: "cyan"
  },
  {
    id: 'deye',
    title: "Contenedor Deye",
    brand: "Deye",
    price: 128600,
    description: "Solución industrial robusta en Almacenes Tradex. Alta demanda en el sector privado (MIPYMES). Retorno seguro y estable.",
    features: [
      "Canal Oficial Cubaelectrónica",
      "Ubicación: Reparto Eléctrico",
      "Ganancia Limpia: hasta €169k",
      "Inspección Física Disponible"
    ],
    color: "yellow"
  }
];

// Investment metrics for ROI and profit analysis
export const METRICS = {
  ecoflow: {
    label: "EcoFlow",
    cost: 135000,
    minRev: 223880,
    maxRev: 352428,
    avgRev: 288000,
    minProfit: 71010,
    maxProfit: 189234,
    avgProfit: 130000,
    minRoi: "52.6%",
    maxRoi: "140.2%",
    avgRoi: "94.6%",
    units: 120,
    valUnitMin: 583,
    color: "#22d3ee" // Cyan
  },
  deye: {
    label: "Deye",
    cost: 128600,
    minRev: 262900,
    maxRev: 347400,
    avgRev: 305150,
    minProfit: 116400,
    maxProfit: 169800,
    avgProfit: 143100,
    minRoi: "90.5%",
    maxRoi: "132.0%",
    avgRoi: "111.3%",
    units: 96,
    valUnitMin: 586,
    color: "#eab308" // Yellow
  }
};

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
    description: "Inversor híbrido de alto rendimiento diseñado específicamente para la red eléctrica cubana (120V/240V).",
    specs: {
      capacity: "10 kW",
      output: "10000W (Split Phase 120/240V)",
      extras: ["Carga/Descarga 250A", "Pantalla Táctil Color", "IP65"]
    },
    imagePlaceholder: "https://www.deyeinverter.com/deyeinverter/2025/12/05/SUN-5-12K-SG01LP1-USEU2.png",
    unitCostEur: 900,
    unitCostUsd: 1050,
    marketPrice: 2500,
    targetPrice: 2700,
    tag: "Alta Demanda MIPYME"
  },
  {
    id: "seg51",
    containerId: 'deye',
    modelName: "Deye SE-G5.1 Pro-B",
    sku: "SE-G5.1",
    quantity: 40,
    category: "Battery",
    description: "Excelente solución de sistema de almacenamiento de energía (ESS) residencial.",
    specs: {
      capacity: "5.12 kWh",
      output: "100 Ah (51.2V)",
      extras: ["LiFePO4 Safe Chemistry", "Vida útil >6000 ciclos"]
    },
    imagePlaceholder: "https://deye.com/wp-content/uploads/2024/04/se-g5.1-pro-b.jpg",
    unitCostEur: 500,
    unitCostUsd: 585,
    marketPrice: 1650,
    targetPrice: 1800,
    tag: "Rotación Rápida"
  },
  {
    id: "seg102",
    containerId: 'deye',
    modelName: "Deye SE-G10.2",
    sku: "SE-G10.2",
    quantity: 20,
    category: "Battery",
    description: "Batería de alta capacidad alimentada por química de fosfato de hierro y litio (LiFePO4).",
    specs: {
      capacity: "10.24 kWh",
      output: "200 Ah (51.2V)",
      extras: ["Capacidad Industrial 200Ah", "Ciclo ≥6000"]
    },
    imagePlaceholder: "https://deye.com/wp-content/uploads/2025/01/se-g10.2%E4%BE%A7%E9%9D%A2.jpg",
    unitCostEur: 1000,
    unitCostUsd: 1170,
    marketPrice: 2400,
    targetPrice: 2600,
    tag: "Margen Industrial"
  },
  
  // --- CONTENEDOR ECOFLOW ---
  {
    id: "e980",
    containerId: 'ecoflow',
    modelName: "EcoFlow E980-US",
    sku: "EFE980-US",
    quantity: 40,
    category: "Generator",
    description: "Estación de energía portátil de carga ultra-rápida. Perfecta para movilidad.",
    specs: {
      capacity: "980 Wh",
      output: "500W (Surge 750W)",
      extras: ["LFP Battery (3000 cycles)"]
    },
    imagePlaceholder: getDriveImage("1pKzI9KkeEWbr9dkeUmWGNksn_ARTI7u0"),
    unitCostEur: 600,
    unitCostUsd: 700,
    marketPrice: 800,
    targetPrice: 850,
    tag: "Producto Gancho"
  },
  {
    id: "delta2max",
    containerId: 'ecoflow',
    modelName: "EcoFlow DELTA 2 Max",
    sku: "EFDELTA2Max-US",
    quantity: 20,
    category: "Generator",
    description: "La sucesora de la DELTA Max es aún más potente.",
    specs: {
      capacity: "2.04 kWh",
      output: "2400W (X-Boost 3100W)",
      extras: ["X-Stream Fast Charge"]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-2-max-power-station.jpg",
    unitCostEur: 900,
    unitCostUsd: 1050,
    marketPrice: 1400,
    targetPrice: 1500,
    tag: "Best Seller"
  },
  {
    id: "deltapro",
    containerId: 'ecoflow',
    modelName: "EcoFlow DELTA Pro",
    sku: "DELTAPro-1600W-US",
    quantity: 20,
    category: "Generator",
    description: "La estación de energía más potente de la serie DELTA con 3600 Wh.",
    specs: {
      capacity: "3.6 kWh",
      output: "3600W (Surge 7200W)",
      extras: ["Expandible hasta 25kWh"]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-power-station.jpg",
    unitCostEur: 1600,
    unitCostUsd: 1870,
    marketPrice: 2800,
    targetPrice: 2900,
    tag: "Estándar de Oro"
  },
  {
    id: "deltapro3",
    containerId: 'ecoflow',
    modelName: "Delta Pro 3",
    sku: "EFDELTAPRO3-US",
    quantity: 8,
    category: "Generator",
    description: "La sucesora de la DELTA Pro, con 4.096 Wh es aún más potente.",
    specs: {
      capacity: "4.1 kWh",
      output: "4000W (Pico 8000W)",
      extras: ["UPS < 10ms"]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-2.jpg",
    unitCostEur: 1700,
    unitCostUsd: 1990,
    marketPrice: 2850,
    targetPrice: 2950,
    tag: "Novedad Q1 2026"
  },
  {
    id: "deltapro3eb",
    containerId: 'ecoflow',
    modelName: "Delta Pro 3 Extra Battery",
    sku: "DELTAProEB-US",
    quantity: 4,
    category: "Battery",
    description: "Batería de expansión de alta potencia de 4.096 Wh.",
    specs: {
      capacity: "4096 Wh",
      extras: ["4000 Ciclos LFP"]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-extra-battery.jpg",
    unitCostEur: 1300,
    unitCostUsd: 1520,
    marketPrice: 2400,
    targetPrice: 2500,
    tag: "Upsell Estratégico"
  },
  {
    id: "proultra",
    containerId: 'ecoflow',
    modelName: "EcoFlow Delta Pro Ultra (Inverter)",
    sku: "EFDeltaProUltra-US",
    quantity: 8,
    category: "Inverter",
    description: "El corazón potente del ecosistema modular DELTA Pro Ultra.",
    specs: {
      capacity: "Modular",
      output: "6900W (Surge 10.3kW)",
      extras: ["Whole Home Backup"]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-ultra-inverter.jpg",
    unitCostEur: 2400,
    unitCostUsd: 2800,
    marketPrice: 4800,
    targetPrice: 5200,
    tag: "Solución Top Tier"
  },
  {
    id: "proultraeb",
    containerId: 'ecoflow',
    modelName: "Delta Pro Ultra Battery",
    sku: "EFDeltaProUltra-BP-US",
    quantity: 20,
    category: "Battery",
    description: "Unidad de energía masiva de 6kWh diseñada para el sistema Ultra.",
    specs: {
      capacity: "6 kWh",
      extras: ["IP54 Outdoor Ready"]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-ultra-extra-battery.jpg",
    unitCostEur: 3000,
    unitCostUsd: 3510,
    marketPrice: 6000,
    targetPrice: 6200,
    tag: "Margen Máximo"
  }
];
