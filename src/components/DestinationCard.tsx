import { MapPin, Star, Heart, Clock, Users } from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  onClick?: () => void;
  variant?: 'horizontal' | 'grid';
  key?: string | number;
}

export default function DestinationCard({ destination, onClick, variant = 'horizontal' }: DestinationCardProps) {
  if (variant === 'horizontal') {
    return (
      <div 
        onClick={onClick}
        className="min-w-[300px] snap-start group cursor-pointer"
      >
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
          <img 
            alt={destination.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src={destination.image} 
            referrerPolicy="no-referrer"
          />
          {destination.tag && (
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
                {destination.tag}
              </span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent">
            <h4 className="text-white font-headline text-2xl font-bold">{destination.title}</h4>
            <div className="flex items-center text-white/80 text-sm mt-1">
              <MapPin className="w-3 h-3 mr-1" />
              {destination.location}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          alt={destination.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          src={destination.image} 
          referrerPolicy="no-referrer"
        />
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        {destination.rating && (
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm">
            <Star className="w-4 h-4 text-orange-500 fill-current" />
            <span className="text-sm font-bold">{destination.rating}</span>
            <span className="text-on-surface-variant text-xs">({destination.reviews})</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline font-bold text-lg leading-tight">{destination.title}</h3>
          {destination.price && (
            <span className="font-bold text-primary">${destination.price.toLocaleString()}</span>
          )}
        </div>
        <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 font-body">
          {destination.description || `An amazing journey through the heart of ${destination.location}.`}
        </p>
        <div className="flex items-center gap-4 text-xs font-bold text-secondary uppercase tracking-tighter">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {destination.duration || '8 Days'}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {destination.groupSize || 'Max 12'}
          </div>
        </div>
      </div>
    </div>
  );
}
