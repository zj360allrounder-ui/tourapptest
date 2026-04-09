export type Page = 'home' | 'explore' | 'detail' | 'profile';

export interface Destination {
  id: string;
  title: string;
  location: string;
  image: string;
  tag?: string;
  rating?: number;
  reviews?: number;
  price?: number;
  oldPrice?: number;
  description?: string;
  duration?: string;
  intensity?: string;
  groupSize?: string;
  itinerary?: {
    day: number;
    title: string;
    description: string;
    meals?: string[];
  }[];
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  count?: number;
  color?: string;
}
