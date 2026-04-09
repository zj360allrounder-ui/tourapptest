import { Search, SlidersHorizontal, Mountain, Palmtree, Landmark, Trees, Sun, Waves, Heart, Star, Clock, Users, ArrowRight, MapPin, Tag, Map } from 'lucide-react';
import { DESTINATIONS, CATEGORIES } from '../data';
import DestinationCard from '../components/DestinationCard';
import { Destination } from '../types';

interface ExploreProps {
  onSelectDestination: (d: Destination) => void;
}

export default function Explore({ onSelectDestination }: ExploreProps) {
  const featured = DESTINATIONS.find(d => d.id === 'patagonia')!;
  const popular = DESTINATIONS.filter(d => ['santorini', 'swiss', 'venice'].includes(d.id));

  const IconMap: Record<string, any> = {
    Mountain, Palmtree, Landmark, Trees, Sun, Waves
  };

  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
      {/* Search and Filter Section */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
            <input 
              className="w-full bg-surface-container-highest border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 placeholder:text-outline font-body outline-none" 
              placeholder="Where to next?" 
              type="text"
            />
          </div>
          <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold active:scale-95 transition-transform">
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>
      </section>

      {/* Category Scroll */}
      <section className="mb-10 overflow-x-auto hide-scrollbar -mx-6 px-6">
        <div className="flex gap-4 min-w-max">
          {CATEGORIES.map(cat => {
            const Icon = IconMap[cat.icon];
            return (
              <button key={cat.id} className="flex flex-col items-center gap-2 group">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${
                  cat.id === 'mountain' ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'bg-surface-container-high text-on-surface-variant hover:bg-secondary-fixed'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`font-body text-xs font-bold uppercase tracking-widest ${
                  cat.id === 'mountain' ? 'text-primary' : 'text-on-surface-variant'
                }`}>
                  {cat.title}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Bento Grid Layout for Featured */}
      <section className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-12">
        <div 
          onClick={() => onSelectDestination(featured)}
          className="md:col-span-4 relative h-96 rounded-3xl overflow-hidden group cursor-pointer"
        >
          <img 
            alt={featured.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src={featured.image}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div>
              <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-bold text-on-primary uppercase tracking-widest mb-2 inline-block">
                {featured.tag}
              </span>
              <h3 className="font-headline text-3xl font-bold text-white leading-none mb-1">{featured.title}</h3>
              <p className="text-white/80 font-body text-sm flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {featured.location}
              </p>
            </div>
            <div className="text-right">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20">
                <p className="text-white/60 text-xs font-medium line-through">${featured.oldPrice?.toLocaleString()}</p>
                <p className="text-white font-bold text-xl">${featured.price?.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="flex-1 bg-secondary-container rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-headline text-xl font-bold text-on-secondary-container">Limited Deals</h4>
              <p className="text-on-secondary-container/70 text-sm mt-1">Up to 40% off on winter escapes.</p>
            </div>
            <button className="relative z-10 self-start bg-secondary text-on-secondary px-5 py-2.5 rounded-full font-bold text-sm">
              View all
            </button>
            <Tag className="absolute -right-4 -bottom-4 w-24 h-24 text-secondary-dim/20 rotate-12" />
          </div>
          
          <div className="flex-1 bg-surface-container-highest rounded-3xl p-6 flex items-center justify-between group cursor-pointer hover:bg-surface-container-high transition-colors">
            <div>
              <p className="font-body text-[10px] font-extrabold uppercase tracking-widest text-primary mb-1">Expert Guide</p>
              <h4 className="font-headline text-lg font-bold">Plan with a Pro</h4>
            </div>
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Standard Explorer Grid */}
      <h2 className="font-headline text-2xl font-bold mb-6">Popular Itineraries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {popular.map(d => (
          <DestinationCard key={d.id} destination={d} variant="grid" onClick={() => onSelectDestination(d)} />
        ))}
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center active:scale-95 transition-transform z-40">
        <Map className="w-6 h-6" />
      </button>
    </main>
  );
}
