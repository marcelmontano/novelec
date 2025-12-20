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
    description: "Soluciones portátiles y de respaldo doméstico premium. Stock ya en La Habana (In-Bond).",
    features: ["Transferencia Bancaria (Ext.)", "Sistemas Delta Pro & Ultra", "Aceptamos USDT / Cripto", "Entrega Inmediata (Tradex)"],
    color: "cyan"
  },
  {
    id: 'deye',
    title: "Contenedor Deye",
    brand: "Deye",
    price: 128600,
    description: "Infraestructura híbrida industrial. Inversores Split Phase 120V/240V específicos para la red cubana.",
    features: ["Transferencia Bancaria (Ext.)", "Baterías LFP Rack/Mural", "Inspección Física Permitida", "Pago USDT Disponible"],
    color: "yellow"
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
    description: "Inversor híbrido de alto rendimiento diseñado específicamente para la red eléctrica cubana (120V/240V). Es la piedra angular de cualquier sistema de respaldo energético profesional, permitiendo la integración total de paneles solares, baterías y generadores diésel con una gestión inteligente de carga de hasta 250A. Soporta cargas pesadas como aires acondicionados con facilidad.",
    specs: {
      capacity: "10 kW",
      output: "10000W (Split Phase 120/240V)",
      extras: ["Carga/Descarga 250A", "Pantalla Táctil Color", "IP65", "Soporta Generador Diesel"]
    },
    imagePlaceholder: "https://www.deyeinverter.com/deyeinverter/2025/12/05/SUN-5-12K-SG01LP1-USEU2.png"
  },
  {
    id: "seg51",
    containerId: 'deye',
    modelName: "Deye SE-G5.1 Pro-B",
    sku: "SE-G5.1",
    quantity: 40,
    category: "Battery",
    description: "Batería de Litio Ferro-fosfato (LFP) libre de cobalto, optimizada para máxima seguridad y longevidad en climas tropicales. Su diseño modular permite una escalabilidad sencilla para montaje en rack o pared, siendo el estándar preferido para instalaciones residenciales que buscan independencia energética con más de 6000 ciclos de vida útil.",
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
    description: "Solución de almacenamiento masivo con 200Ah de capacidad. Ideal para infraestructuras comerciales o residencias de alto consumo que requieren autonomía extendida durante apagones prolongados. Ofrece una densidad energética superior y compatibilidad total con la gama híbrida de Deye, permitiendo sistemas de hasta 64 unidades en paralelo.",
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
    description: "Potencia versátil para el hogar moderno. Con capacidad expandible hasta 6kWh, este equipo es capaz de alimentar electrodomésticos pesados como refrigeradores y bombas de agua. Su tecnología X-Stream permite la carga más rápida del mercado, una ventaja crucial para aprovechar ventanas cortas de suministro eléctrico.",
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
    description: "El estándar de oro en estaciones de energía portátiles. Con 3600W de salida, puede manejar casi cualquier carga doméstica, incluyendo aires acondicionados inverter. Es la solución 'todo-en-uno' más demandada por usuarios que buscan potencia máxima sin complicaciones de instalación eléctrica compleja.",
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
      "https://www.ecoflow.nl/data/upload/Shop/images/ecoflow-delta-pro-3-power-station-scenario-6.jpg",
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