export interface Package {
  id: string;
  title: string;
  category: 'soundcloud' | 'design' | 'video';
  price: number;
  originalPrice?: number;
  features: string[];
  duration: string;
  popular?: boolean;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  packages: Package[];
}

export interface CartItem {
  packageId: string;
  quantity: number;
  customerEmail: string;
}