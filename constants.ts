
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

export const STRATEGIC_DOCS = {
  memorandum: "https://drive.google.com/uc?export=download&id=1GhYldnnthEopmMJdxXkGG3YSsoAO5Tkp",
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
    description: "Inversor híbrido de alto rendimiento diseñado específicamente para la red eléctrica cubana (120V/240V). Es la piedra angular de cualquier sistema de respaldo energético profesional, permitiendo la integración total de paneles solares, baterías y generadores diésel con una gestión inteligente de carga de hasta 250A. Soporta cargas pesadas como aires acondicionados con facilidad.",
    specs: {
      capacity: "10 kW",
      output: "10000W (Split Phase 120/240V)",
      extras: ["Carga/Descarga 250A", "Pantalla Táctil Color", "IP65", "Soporta Generador Diesel"]
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
    description: "Excelente solución de sistema de almacenamiento de energía (ESS) residencial. Su diseño modular permite una fácil expansión (hasta 64 unidades en paralelo) para autoconsumo eficiente. Equipada con celdas LFP sin cobalto, garantiza máxima seguridad, larga vida útil y densidad de potencia. Incluye BMS inteligente para protección completa y refrigeración natural.",
    specs: {
      capacity: "5.12 kWh",
      output: "100 Ah (51.2V)",
      weight: "44 kg",
      extras: [
        "10 años de garantía",
        "Ciclo de vida ≥6000 (25°C, 80% DOD)",
        "Disyuntor incorporado 125A",
        "Montaje Pared, Suelo o Rack (19\")",
        "IP20 / Certificación UL1973, CE",
        "Comunicación CAN2.0 / RS485",
        "Funcionamiento -20°C a 55°C",
        "Update vía USB / Monitoreo Remoto"
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
    description: "Batería de alta capacidad alimentada por química de fosfato de hierro y litio (LiFePO4). Diseñada para ofrecer un rendimiento y confiabilidad excepcionales tanto en entornos residenciales como comerciales. Admite una corriente máxima de descarga de 200A pico y mantiene el 70% de su capacidad al final de su vida útil. Conexión automática en red (sin DIP switches) y gestión inteligente vía BMS.",
    specs: {
      capacity: "10.24 kWh",
      output: "200 Ah (51.2V)",
      weight: "85 kg",
      extras: [
        "Ciclo de vida ≥6000 (25°C, 80% DOD)",
        "5 años de garantía",
        "Escalable hasta 64 unidades (327kWh)",
        "Descarga pico 200A (10s)",
        "Monitoreo remoto y activación externa",
        "Disyuntor integrado y BMS inteligente",
        "Comunicación CAN2.0 / RS485",
        "Instalación compacta (710x540x133 mm)"
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
    description: "Estación de energía portátil de carga ultra-rápida y diseño compacto. Perfecta para movilidad o como respaldo crítico para dispositivos electrónicos, ventilación e iluminación básica. Utiliza tecnología LFP que garantiza más de 3000 ciclos, asegurando años de servicio diario confiable en el hogar cubano.",
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
    description: "La sucesora de la DELTA Max es aún más potente, con una capacidad de 2.048 Wh ampliable hasta 6.144 Wh mediante baterías extra. Con una salida de 2400W (X-Boost 3100W), puede alimentar casi cualquier electrodoméstico pesado e incluso cargar un coche eléctrico. Gracias a la tecnología X-Stream, se carga del 0 al 80% en solo 53 minutos desde la red eléctrica. Es la solución versátil perfecta para respaldo doméstico y movilidad con una vida útil de 3000 ciclos gracias a su química LiFePO4.",
    specs: {
      capacity: "2048 Wh (Max 6144 Wh)",
      output: "2400W (Pico 4800W) / X-Boost 3100W",
      weight: "23 kg",
      extras: [
        "Química LFP (3000 ciclos al 80%)",
        "X-Stream Fast Charge (81 min full)",
        "Entrada Solar 1000W (Dual Port)",
        "Monitorización vía App (WiFi/BT)",
        "UPS integrada",
        "USB-C 100W PD (x2)",
        "Garantía de 5 años",
        "Soporta Smart Generator Dual Fuel"
      ]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-2-max-power-station.jpg",
    additionalImages: [
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-2-max-power-station-2.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-2-max-power-station-3.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-2-max-power-station-4.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-2-max-power-station-5.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-2-max-power-station-lifestyle.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-2-max-power-station-lifestyle-2.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-2-max-power-station-lifestyle-3.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-2-max-power-station-lifestyle-4.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-2-max-power-station-lifestyle-5.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-2-max-power-station-lifestyle-6.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-2-max-power-station-lifestyle-7.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-2-max-power-station-lifestyle-8.jpg"
    ]
  },
  {
    id: "deltapro",
    containerId: 'ecoflow',
    modelName: "EcoFlow DELTA Pro",
    sku: "DELTAPro-1600W-US",
    quantity: 20,
    category: "Generator",
    description: "La estación de energía más potente de la serie DELTA con 3600 Wh, ampliable hasta 25 kWh. Con una potencia de salida de 3600W (X-Boost 4500W), puede alimentar casi cualquier dispositivo, incluso coches eléctricos. Gracias a X-Stream, se carga del 0 al 80% en solo 1 hora desde un enchufe convencional. Ideal para respaldo doméstico total durante apagones prolongados.",
    specs: {
      capacity: "3.6 kWh (Ampliable a 25kWh)",
      output: "3600W (Pico 7200W) / X-Boost 4500W",
      weight: "45 kg",
      extras: [
        "Química LFP (3500 ciclos al 80%)",
        "Carga X-Stream (1.6h carga completa)",
        "Entrada Solar 1600W (11-150V)",
        "Compatible con Carga EV",
        "Monitorización vía App EcoFlow",
        "Función UPS integrada",
        "USB-C 100W PD (x2)",
        "Salida Anderson 12.6V 30A"
      ]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-power-station.jpg",
    additionalImages: [
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-power-station-2.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-power-station-3.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-power-station-4.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-power-station-5.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-power-station-6.jpg"
    ]
  },
  {
    id: "deltapro3",
    containerId: 'ecoflow',
    modelName: "Delta Pro 3",
    sku: "EFDELTAPRO3-US",
    quantity: 8,
    category: "Generator",
    description: "La sucesora de la DELTA Pro, con 4.096 Wh es aún más potente que su predecesora. Gracias a su potencia de 4000W, puede alimentar casi todos los dispositivos electrónicos, ¡incluso un coche eléctrico! Utiliza tecnología X-Quiet (basada en GaN) para un funcionamiento ultrasilencioso (30dB) y función UPS con conmutación en menos de 10ms. Es la solución definitiva para independencia energética total.",
    specs: {
      capacity: "4096 Wh (Ampliable a 12kWh)",
      output: "4000W (Pico 8000W) - 230V AC",
      weight: "51.5 kg",
      extras: [
        "UPS < 10ms",
        "X-Quiet (Silencioso 30dB)",
        "Química LFP (4000 ciclos)",
        "WiFi y Bluetooth integrados",
        "Carga Solar hasta 2600W",
        "Carga EV 4000W (1h full)",
        "Carga X-Stream 0-80% en 1h",
        "Garantía de 5 años"
      ]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-2.jpg",
    additionalImages: [
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-11.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-10.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-9.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-8.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-7.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-6.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-5.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-4.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-3.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-1.jpg",
      "https://www.ecoflow.Cl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-scenario-6.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-scenario-5.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-scenario-4.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-scenario-3.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-scenario-2.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-scenario.jpg"
    ]
  },
  {
    id: "deltapro3eb",
    containerId: 'ecoflow',
    modelName: "Delta Pro 3 Extra Battery",
    sku: "DELTAProEB-US",
    quantity: 4,
    category: "Battery",
    description: "Batería de expansión de alta potencia de 4.096 Wh diseñada para aumentar fácilmente la capacidad de su estación DELTA Pro 3. Gracias a su diseño plug-and-play y estructura apilable, es ideal para respaldo doméstico crítico, permitiendo alcanzar hasta 12 kWh de almacenamiento total. Utiliza tecnología LiFePo4 (LFP) para una seguridad extrema y longevidad excepcional.",
    specs: {
      capacity: "4096 Wh",
      weight: "33 kg",
      extras: [
        "4000 Ciclos hasta el 80% cap.",
        "Celda LiFePo4 (LFP)",
        "Garantía de 5 años",
        "Diseño Apilable Plug-and-Play",
        "Dimensiones: 69.3 x 29.5 x 21.5 cm",
        "Salida Extra Battery Port"
      ]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-extra-battery.jpg",
    additionalImages: [
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-extra-battery-combo-1.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-extra-battery-2.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-extra-battery-3.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-extra-battery-4.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-extra-battery-5.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-extra-battery-6.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-extra-battery-7.jpg"
    ]
  },
  {
    id: "proultra",
    containerId: 'ecoflow',
    modelName: "EcoFlow Delta Pro Ultra (Inverter)",
    sku: "EFDeltaProUltra-US",
    quantity: 8,
    category: "Inverter",
    description: "El corazón potente del ecosistema modular DELTA Pro Ultra. Este inversor de 6900W (hasta 21.6kW en sistemas combinados) es capaz de alimentar toda una casa, incluyendo los electrodomésticos más exigentes como bombas de calor y cargadores de vehículos eléctricos. Gracias a la tecnología X-Fusion y su conmutación UPS de <20ms, garantiza un suministro ininterrumpido y seguro para equipos electrónicos sensibles. Es compatible con paneles solares de alta potencia (hasta 5600W PV) y puede gestionarse inteligentemente vía App con la función Storm Guard para protección automática ante eventos meteorológicos.",
    specs: {
      capacity: "Modular (hasta 30kWh)",
      output: "6900W (Pico 10300W)",
      weight: "32.1 kg",
      extras: [
        "UPS < 20ms",
        "Salida AC 230V / 16A-30A",
        "Tecnología X-Fusion",
        "Input Solar 5600W (80-450V)",
        "Certificación IP54",
        "Garantía de 5 años",
        "Funcionamiento <30dB",
        "Carga EV hasta 6900W",
        "USB-C 100W PD (x2)",
        "WiFi y Bluetooth integrados"
      ]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-ultra-inverter.jpg",
    additionalImages: [
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-ultra-inverter-2.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-ultra-inverter-3.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-ultra-inverter-4.jpg",
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-ultra-inverter-5.jpg"
    ]
  },
  {
    id: "proultraeb",
    containerId: 'ecoflow',
    modelName: "Delta Pro Ultra Battery",
    sku: "EFDeltaProUltra-BP-US",
    quantity: 20,
    category: "Battery",
    description: "Unidad de energía masiva de 6kWh diseñada para el sistema Ultra. Construcción robusta con certificación IP54, capaz de soportar condiciones exigentes mientras proporciona un flujo constante de energía para las cargas más pesadas del hogar o taller, como hornos, secadoras y sistemas de climatización central.",
    specs: {
      capacity: "6 kWh",
      weight: "50.7 kg",
      extras: ["LFP Battery", "IP54"]
    },
    imagePlaceholder: "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-ultra-extra-battery.jpg"
  }
];
