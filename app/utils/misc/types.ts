export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: MetaData;
  images: string[];
  thumbnail: string;
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string; // ISO string format
  reviewerName: string;
  reviewerEmail: string;
}

interface MetaData {
  createdAt: string; // ISO string format
  updatedAt: string; // ISO string format
  barcode: string;
  qrCode: string; // URL to QR code
}

export interface BreadCrumbLinks {
  title: string;
  href: string;
  isCurrentPage: boolean;
}
