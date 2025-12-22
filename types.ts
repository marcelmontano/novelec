
export interface ProductSpec {
  capacity: string;
  output?: string;
  weight?: string;
  extras?: string[];
}

export interface InventoryItem {
  id: string;
  containerId: 'ecoflow' | 'deye';
  modelName: string;
  sku: string;
  quantity: number;
  category: 'Generator' | 'Battery' | 'Inverter' | 'Accessory';
  description: string;
  specs: ProductSpec;
  imagePlaceholder: string;
  additionalImages?: string[];
  datasheetUrl?: string;
  // Campos de estrategia de precios
  unitCostEur: number;
  unitCostUsd: number;
  marketPrice: number; // Precio publicado sugerido (rango bajo)
  targetPrice: number; // Precio publicado sugerido (rango alto)
  tag?: string;
}

export interface ContainerOffer {
  id: 'ecoflow' | 'deye';
  title: string;
  brand: string;
  price: number;
  description: string;
  features: string[];
  color: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  currency: string;
}
