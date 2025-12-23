export interface ProductSpec {
  capacity: string;
  output?: string;
  weight?: string;
  extras?: string[];
}

export interface InventoryItem {
  id: string;
  containerId: 'ecoflow' | 'deye'; // New field to separate containers
  modelName: string;
  sku: string;
  quantity: number;
  category: 'Generator' | 'Battery' | 'Inverter' | 'Accessory';
  description: string;
  specs: ProductSpec;
  imagePlaceholder: string;
  additionalImages?: string[];
  datasheetUrl?: string; // New optional field for PDF downloads
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