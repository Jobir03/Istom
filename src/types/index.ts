export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  images: any;
  totalPrice: number;
  average_rating: number;
  brand: string;
  category: number;
  color: string;
  comments: Array<any>; // specify a structure if available for comments
  country: string;
  created_at: string;
  degree_of_extensibility: string;
  description: string;
  discount_price: number;
  firm: string;
  in_stock: boolean;
  is_discount: boolean;
  is_new_product: boolean;
  outer_diameter_of_the_head: string;
  reviews: Array<any>; // specify a structure if available for reviews
  size_of_brackets: string;
  the_height_of_the_closing_brackets: string;
  vendor_code: string;
  volume: string;
  like_count?: string | number;
  old_price?: string | number;
  is_featured: boolean;
}
