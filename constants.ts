
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
    description: "El 'Cerebro' definitivo para la independencia energética en Cuba. Este inversor híbrido es el modelo líder para instalaciones profesionales de alto nivel. Gracias a su salida Split Phase (120V/240V), es 100% compatible con la red eléctrica nacional y permite alimentar aires acondicionados, bombas de agua y equipos industriales. Su capacidad de gestionar simultáneamente paneles solares, baterías y generadores diésel lo convierte en la solución de respaldo más robusta del mercado.",
    specs: {
      capacity: "10 kW",
      output: "10000W (Split Phase 120/240V)",
      extras: ["Carga/Descarga 250A", "Pantalla Táctil Color", "IP65 Protección Total", "Paralelizable hasta 16 unidades"]
    },
    imagePlaceholder: "https://www.deyeinverter.com/deyeinverter/2025/12/05/SUN-5-12K-SG01LP1-USEU2.png",
    datasheetUrl: "https://www.deyeinverter.com/deyeinverter/2025/05/29/%E3%80%90b%E3%80%91datasheet_sun-5-12k-sg02lp2-us-am2_20250520_en.pdf"
  },
  {
    id: "seg51",
    containerId: 'deye',
    modelName: "Deye SE-G5.1 Pro-B",
    sku: "SE-G5.1",
    quantity: 40,
    category: "Battery",
    description: "La batería de litio (LFP) más versátil y demandada para el sector residencial. Con una química segura sin cobalto, esta unidad de 5.12kWh ofrece una longevidad excepcional de más de 6000 ciclos. Su diseño modular tipo rack permite a los clientes empezar con una unidad y escalar su almacenamiento según sea necesario. Ideal para familias que buscan proteger su inversión a largo plazo frente a los apagones diarios.",
    specs: {
      capacity: "5.12 kWh",
      output: "100 Ah (51.2V)",
      weight: "44 kg",
      extras: [
        "Química LiFePO4 Ultra-Segura",
        "Vida útil > 10 años",
        "Diseño Modular Expandible",
        "BMS Inteligente Integrado"
      ]
    },
    imagePlaceholder: "https://deye.com/wp-content/uploads/2024/04/se-g5.1-pro-b.jpg",
    datasheetUrl: "https://drive.google.com/uc?export=download&id=1sXox2WziwDd7JGLZvFGpFfhtikuCejtR"
  },
  {
    id: "seg102",
    containerId: 'deye',
    modelName: "Deye SE-G10.2",
    sku: "SE-G10.2",
    quantity: 20,
    category: "Battery",
    description: "Potencia masiva en un solo paquete. Esta batería de 10.24kWh es la solución preferida para MIPYMES y negocios privados en Cuba que no pueden permitirse detener sus operaciones. Ofrece una densidad de energía superior, ocupando menos espacio que múltiples unidades pequeñas. Soporta descargas de corriente elevadas, asegurando que los equipos críticos funcionen sin interrupciones incluso bajo cargas pesadas.",
    specs: {
      capacity: "10.24 kWh",
      output: "200 Ah (51.2V)",
      weight: "85 kg",
      extras: [
        "Capacidad Industrial 200Ah",
        "Ciclo de vida ≥6000",
        "Compatible con inversores Deye y Victron",
        "Activación Remota"
      ]
    },
    imagePlaceholder: "https://deye.com/wp-content/uploads/2025/01/se-g10.2%E4%BE%A7%E9%9D%A2.jpg",
    datasheetUrl: "https://drive.google.com/uc?export=download&id=1sXox2WziwDd7JGLZvFGpFfhtikuCejtR"
  },
  
  // --- CONTENEDOR ECOFLOW ---
  {
    id: "e980",
    containerId: 'ecoflow',
    modelName: "EcoFlow E980-US",
    sku: "EFE980-US",
    quantity: 40,
    category: "Generator",
    description: "La estación de energía portátil más equilibrada para el hogar moderno. El modelo E980 combina una portabilidad extrema con una capacidad de casi 1kWh, suficiente para mantener ventiladores, iluminación y dispositivos electrónicos funcionando durante horas. Es el producto de 'entrada' perfecto para el mercado masivo cubano, ofreciendo calidad premium a un precio accesible.",
    specs: {
      capacity: "980 Wh",
      output: "500W (Pico 750W)",
      extras: ["Batería LFP (3000 ciclos)", "EPS Instantáneo < 30ms", "Carga Rápida en Pared"]
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
    description: "Versatilidad sin límites. La DELTA 2 Max es reconocida por ser una de las estaciones más silenciosas y rápidas del mundo. Con una potencia de salida de 2400W, puede alimentar electrodomésticos de cocina y herramientas eléctricas. Su capacidad de cargar del 0 al 80% en menos de una hora es vital en situaciones donde el suministro eléctrico es errático y limitado.",
    specs: {
      capacity: "2.04 kWh",
      output: "2400W (Surge 4800W)",
      weight: "23 kg",
      extras: [
        "Tecnología X-Stream (Carga 80% en 53 min)",
        "Control total vía App WiFi/Bluetooth",
        "Doble Entrada Solar",
        "Silencio líder en la industria"
      ]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-2-max-power-station.jpg"
  },
  {
    id: "deltapro",
    containerId: 'ecoflow',
    modelName: "EcoFlow DELTA Pro",
    sku: "DELTAPro-1600W-US",
    quantity: 20,
    category: "Generator",
    description: "El estándar de oro en estaciones de energía portátiles. La DELTA Pro es una bestia de 3.6kWh capaz de alimentar un hogar completo. Sus ruedas integradas facilitan el transporte a pesar de su gran capacidad. Es la unidad favorita para quienes necesitan autonomía total sin instalaciones complejas, permitiendo incluso la carga desde estaciones de vehículos eléctricos.",
    specs: {
      capacity: "3.6 kWh",
      output: "3600W (Surge 7200W)",
      weight: "45 kg",
      extras: [
        "Expandible hasta 25kWh",
        "Puerto de carga EV integrado",
        "Química LFP de alta seguridad",
        "Múltiples puertos de salida AC/DC"
      ]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-power-station.jpg"
  },
  {
    id: "deltapro3",
    containerId: 'ecoflow',
    modelName: "Delta Pro 3",
    sku: "EFDELTAPRO3-US",
    quantity: 8,
    category: "Generator",
    description: "La nueva generación de la potencia. Con 4kWh de base, la Delta Pro 3 redefine el respaldo doméstico con tecnología GaN, permitiendo un funcionamiento ultra-eficiente y silencioso. Su función UPS con conmutación de 10ms es ideal para proteger servidores y equipos médicos sensibles. Es la joya tecnológica de este contenedor.",
    specs: {
      capacity: "4.1 kWh",
      output: "4000W (Pico 8000W)",
      weight: "51.5 kg",
      extras: [
        "Funcionamiento X-Quiet (30dB)",
        "UPS Grado Profesional 10ms",
        "Carga Solar Ultra-Potente 2600W",
        "Ecosistema Modular de Próxima Gen"
      ]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-2.jpg"
  },
  {
    id: "proultra",
    containerId: 'ecoflow',
    modelName: "EcoFlow Delta Pro Ultra (Inverter)",
    sku: "EFDeltaProUltra-US",
    quantity: 8,
    category: "Inverter",
    description: "La solución definitiva para el 'Whole Home Backup'. Este inversor de 6.9kW es la base del sistema más avanzado de EcoFlow. Diseñado para ser el centro de energía de una propiedad completa, maneja las cargas más pesadas (aires acondicionados centrales, secadoras) sin esfuerzo. Su diseño modular permite una flexibilidad sin precedentes en la gestión energética moderna.",
    specs: {
      capacity: "Soporta hasta 30kWh",
      output: "6900W (Surge 10.3kW)",
      weight: "32.1 kg",
      extras: [
        "Salida Split Phase nativa",
        "Protección Storm Guard (vía App)",
        "Construcción Industrial Robusta",
        "Eficiencia de conversión líder"
      ]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-ultra-inverter.jpg"
  },
  {
    id: "proultraeb",
    containerId: 'ecoflow',
    modelName: "Delta Pro Ultra Battery",
    sku: "EFDeltaProUltra-BP-US",
    quantity: 20,
    category: "Battery",
    description: "Energía sin límites. Esta unidad de almacenamiento de 6kWh está diseñada específicamente para apilarse con el sistema Ultra. Su certificación IP54 asegura un funcionamiento fiable incluso en condiciones de humedad o polvo. Es el componente necesario para lograr la independencia energética total en grandes residencias o negocios críticos.",
    specs: {
      capacity: "6 kWh",
      weight: "50.7 kg",
      extras: ["Celdas LFP de alta densidad", "Certificación IP54 exterior/interior", "Diseño Apilable Plug-and-Play"]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-ultra-extra-battery.jpg"
  }
];
