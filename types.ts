
export interface ProductSpec {
  capacity: string;
  output?: string;
  weight?: string;
  extras?: string[];
}

export interface InventoryItem {
  id: string;
  // Added 'longi' to the allowed container IDs
  containerId: 'ecoflow' | 'deye' | 'longi';
  modelName: string;
  sku: string;
  quantity: number;
  category: 'Generator' | 'Battery' | 'Inverter' | 'Accessory' | 'Solar Panel';
  description: string;
  specs: ProductSpec;
  imagePlaceholder: string;
  additionalImages?: string[];
  datasheetUrl?: string;
  saleUnit?: 'Container' | 'Pallet';
  pricePerUnit?: number;
}

export interface ContainerOffer {
  // Added 'longi' to the allowed container offer IDs
  id: 'ecoflow' | 'deye' | 'longi';
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