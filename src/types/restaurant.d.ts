export interface Restaurant {
  id: string;
  name: string;
  averageRating: number;
  deliveryTime: number;
  image_url: string;
  address: string[];
  phone?: string;
  distance: number;
  reviewCount: number;
  categories?: RestaurantCategory[];
  price?: string;
}

export interface RestaurantCategory {
  alias?: string;
  title?: string;
}
