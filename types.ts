export interface ProductSpec {
  capacity: string;
  output?: string;
  weight?: string;
  extras?: string[];
}

export interface InventoryItem {
  id: string;
  modelName: string;
  sku: string;
  quantity: number;
  category: 'Generator' | 'Battery' | 'Inverter' | 'Accessory';
  description: string;
  specs: ProductSpec;
  imagePlaceholder: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  price: number;
  currency: string;
}