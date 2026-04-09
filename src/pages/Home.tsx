import { ArrowRight, Search, SlidersHorizontal, Umbrella, Mountain, Flame, ChevronRight, Music } from 'lucide-react';
import { DESTINATIONS } from '../data';
import DestinationCard from '../components/DestinationCard';
import { Destination } from '../types';

interface HomeProps {
  onSelectDestination: (d: Destination) => void;
}

export default function Home({ onSelectDestination }: HomeProps) {
  const featured = DESTINATIONS.find(d => d.id === 'amalfi')!;
  const trending = DESTINATIONS.filter(d => ['santorini', 'agra', 'yosemite'].includes(d.id));

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[751px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            alt="Coastal Paradise" 
            className="w-full h-full object-cover" 
            src={featured.image} 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        </div>
        
        {/* Search Bar Overlay */}
        <div className="absolute top-8 left-0 w-full px-6 z-10">
          <div className="bg-surface-container-lowest/90 backdrop-blur-xl rounded-full px-6 py-4 flex items-center shadow-2xl transition-all hover:bg-white">
            <Search className="text-primary mr-3 w-5 h-5" />
            <input 
              className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline font-medium outline-none" 
              placeholder="Where do you want to drift?" 
              type="text"
            />
            <SlidersHorizontal className="text-outline w-5 h-5" />
          </div>
        </div>

        <div className="absolute bottom-16 left-0 w-full px-8">
          <p className="font-body text-white/80 uppercase tracking-[0.3em] text-xs font-semibold mb-3">Featured Destination</p>
          <h2 className="font-headline text-5xl md:text-7xl text-white font-extrabold tracking-tighter leading-none mb-6">
            Amalfi <br/><span className="text-primary-container">Coastline</span>
          </h2>
          <button 
            onClick={() => onSelectDestination(featured)}
            className="bg-primary hover:bg-primary-dim text-on-primary px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-primary/20"
          >
            Explore Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-12 pl-6 overflow-hidden">
        <div className="flex items-center justify-between pr-6 mb-8">
          <div>
            <h3 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">Trending Now</h3>
            <p className="text-on-surface-variant font-medium">Curated escapes for the modern drifter</p>
          </div>
          <button className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-1">
            See All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4">
          {trending.map(d => (
            <DestinationCard key={d.id} destination={d} onClick={() => onSelectDestination(d)} />
          ))}
        </div>
      </section>

      {/* Curated By Mood */}
      <section className="px-6 py-12">
        <h3 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-8">Curated By Mood</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px]">
          <div className="col-span-2 row-span-2 rounded-2xl bg-secondary-container p-6 relative overflow-hidden group cursor-pointer">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <Umbrella className="text-on-secondary-container w-10 h-10" />
              <div>
                <h5 className="font-headline text-2xl font-bold text-on-secondary-container">Luxe Shores</h5>
                <p className="text-on-secondary-container/70 text-sm">34 Destinations</p>
              </div>
            </div>
            <div className="absolute right-[-20%] bottom-[-10%] opacity-10 group-hover:rotate-12 transition-transform duration-700">
              <Umbrella className="w-48 h-48" />
            </div>
          </div>
          
          <div className="rounded-2xl bg-tertiary-container p-4 relative overflow-hidden group cursor-pointer">
            <Mountain className="text-on-tertiary-container w-8 h-8" />
            <h5 className="font-headline text-lg font-bold text-on-tertiary-container mt-2">Peaks</h5>
          </div>
          
          <div className="rounded-2xl bg-primary-container p-4 relative overflow-hidden group cursor-pointer">
            <Music className="text-on-primary-container w-8 h-8" />
            <h5 className="font-headline text-lg font-bold text-on-primary-container mt-2">Vibe</h5>
          </div>
          
          <div className="col-span-2 rounded-2xl bg-surface-container-high p-4 flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg">
                <Flame className="text-primary w-6 h-6" />
              </div>
              <h5 className="font-headline text-lg font-bold text-on-surface">Hot Deals</h5>
            </div>
            <ChevronRight className="text-outline w-5 h-5" />
          </div>
        </div>
      </section>
    </div>
  );
}
