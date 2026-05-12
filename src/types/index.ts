export interface Product {
  id: string;
  reference: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  stockQuantity: number;
  imageUrl: string;
  category: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}
