import { ArrowLeft, Clock, Mountain, Users, CheckCircle2, Verified, Heart, Map as MapIcon } from 'lucide-react';
import { Destination } from '../types';

interface TripDetailProps {
  destination: Destination;
  onBack: () => void;
}

export default function TripDetail({ destination, onBack }: TripDetailProps) {
  return (
    <div className="pb-32">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-sm dark:shadow-none flex items-center justify-between px-6 py-4 w-full">
        <button 
          onClick={onBack}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-colors active:scale-95 transition-transform"
        >
          <ArrowLeft className="text-zinc-500 dark:text-zinc-400 w-6 h-6" />
        </button>
        <h1 className="font-headline font-bold tracking-tight text-xl font-extrabold text-orange-700 dark:text-orange-500 tracking-tighter">
          Adventurous Editorial
        </h1>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
          <img 
            alt="User" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKO1cZ0OHbUM1j0PayDcy4F2Qo84o34RljVxDkMOSJcvyae6zVgPFBDgD_2-0p7yqtO1tU7So4YKK_5Vs3GQ-u10HiP9-VLgF4Hob-q5OrxslZVHm9vs-AccNXVMjguEGiULZA7HmDgbT1IWAsMYC_FzFfRjEoiEHmrbSGIHT5UD3RRjghw-LlXjKKqBO86vvpgpJ1huZdtDFPg2cTk-gn9G84kf8Nat8M-gry7erv0rWwEMuRkXbEXCbqZP-hlKqPXbtW9ZOxddg" 
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      <main className="pt-[72px] max-w-4xl mx-auto">
        {/* Hero Gallery Section */}
        <section className="relative px-4 mt-4">
          <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[450px]">
            <div className="col-span-3 row-span-2 relative rounded-3xl overflow-hidden shadow-lg group">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={destination.image} 
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <span className="inline-block px-3 py-1 mb-2 text-[10px] font-bold tracking-widest text-white uppercase bg-primary rounded-full">
                  {destination.tag || 'Editor\'s Pick'}
                </span>
                <h2 className="text-3xl font-headline font-extrabold text-white leading-tight">{destination.title}</h2>
              </div>
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-md">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgIe5Rwf43l3Zb4-xRuTAeeyKKenc1NMGEi0lHv_-am6v8859aN-OZ-GP8Rn9W7iVODJ3uAjI56opNsZTXAujkgFBw4ZECyqlHGMmlakzbXDjPW_u7LycKy2gF5ZZaS_KrjhN3z-Gh843xw81OZUN1X1SXZtngPr1tumPEg07ktg6R-MsAn21xU8_VgyEcbW5jCuesMtdTPeP43nQn3lp5zXDMhBEWePkSeVRo-_3bR6SF9UG5yUTFx9GDgFIhJ1QBj0jsqN9Ul_A" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-md">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3R7Crm5QJ8ezMnyuohhIFo1fAJu9JqVJvS3Pc6he9M70qo-AJ08wzuW-xg2_lmt45jGPnZlSV9PEKD8wt6POXruZ7nLcc8bOiTNEzE1EhX55xeO1m5QY1EYGyVHoEgi8UgPl0KLp4r29LtyTeZyvf4gx3CrhwKkv29qctLNALxP-UVyqVeZP97WhLbF4QgPTgGfwh4duPE0E2OHqniVe94mJmVGWPSVciXNHB0cTYBUPGQR3Sr4eagXYz8scywZFF4yt-xehkn-4" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-headline font-bold text-lg">+12</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="flex gap-4 px-6 mt-8 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-3 rounded-2xl flex-shrink-0">
            <Clock className="text-primary w-5 h-5" />
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-tighter">Duration</span>
              <span className="text-sm font-bold text-on-surface">{destination.duration || '5 Days, 4 Nights'}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-3 rounded-2xl flex-shrink-0">
            <Mountain className="text-primary w-5 h-5" />
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-tighter">Intensity</span>
              <span className="text-sm font-bold text-on-surface">{destination.intensity || 'Moderate Trek'}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-3 rounded-2xl flex-shrink-0">
            <Users className="text-primary w-5 h-5" />
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-tighter">Group Size</span>
              <span className="text-sm font-bold text-on-surface">{destination.groupSize || 'Max 8 People'}</span>
            </div>
          </div>
        </section>

        {/* Description & Details */}
        <section className="px-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-headline font-bold text-on-surface">The Expedition</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              {destination.description || 'Traverse the ancient pathways of the High Sierras, where the air is thin and the horizons are infinite. This curated editorial journey takes you beyond the tourist maps into the heart of the granite giants.'}
            </p>
            
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10">
              <h4 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6">What's Included</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  'Eco-Luxe Glamping Hubs',
                  'Curated Wild-to-Table Meals',
                  'Expert Alpine Guides',
                  'All Gear & Equipment',
                  'Private Trail Transfers',
                  'Professional Photography'
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-secondary w-4 h-4 fill-current text-white" />
                    <span className="text-on-surface font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Card */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-secondary p-6 rounded-3xl text-on-secondary shadow-lg">
              <span className="text-xs font-bold uppercase tracking-widest opacity-80">Starting from</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl font-headline font-extrabold">${destination.price?.toLocaleString() || '2,450'}</span>
                <span className="text-sm opacity-80">/ person</span>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                  <span className="opacity-80">Next Date</span>
                  <span className="font-bold">Oct 14, 2024</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                  <span className="opacity-80">Availability</span>
                  <span className="font-bold">3 Spots Left</span>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-highest p-5 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center">
                  <Verified className="text-on-tertiary-container w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-on-surface-variant uppercase">Guide Verified</span>
                  <span className="text-sm font-bold">5.0 Rating (120+)</span>
                </div>
              </div>
              <button className="w-full py-3 px-4 bg-surface-container-lowest text-primary text-sm font-bold rounded-xl border border-primary/20 hover:bg-primary/5 transition-colors">
                View Trip Map
              </button>
            </div>
          </div>
        </section>

        {/* Itinerary List */}
        <section className="px-6 mt-16">
          <h3 className="text-2xl font-headline font-bold text-on-surface mb-8">The Pathway</h3>
          <div className="space-y-0">
            {(destination.itinerary || []).map((item, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 ${idx === 0 ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                    {item.day}
                  </div>
                  {idx < (destination.itinerary?.length || 0) - 1 && (
                    <div className="w-0.5 h-full bg-surface-container-highest"></div>
                  )}
                </div>
                <div className="pb-10 pt-1">
                  <h4 className="font-headline font-bold text-lg text-on-surface leading-none mb-2">{item.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed max-w-lg">{item.description}</p>
                  {item.meals && (
                    <div className="mt-4 flex gap-2">
                      {item.meals.map(meal => (
                        <span key={meal} className="px-3 py-1 bg-surface-container text-[10px] font-bold rounded-full text-on-surface-variant">
                          {meal}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold z-10">...</div>
              </div>
              <div className="pb-10 pt-1">
                <h4 className="font-headline font-bold text-lg text-on-surface-variant leading-none mb-2">The Descent & Grand Finale</h4>
                <p className="text-on-surface-variant text-sm italic">Detailed schedule shared upon booking.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Fixed Booking Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-zinc-950 p-6 shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)] z-50 border-t border-zinc-100 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-6">
          <div className="hidden md:block">
            <span className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Selected Tour</span>
            <span className="text-on-surface font-headline font-bold">{destination.title}</span>
          </div>
          <div className="flex-1 md:flex-none flex items-center gap-4">
            <div className="flex flex-col md:hidden">
              <span className="text-xs font-bold text-primary">${destination.price?.toLocaleString()}</span>
              <span className="text-[10px] text-on-surface-variant">Total per person</span>
            </div>
            <button className="flex-1 md:w-64 bg-primary text-on-primary py-4 px-8 rounded-full font-headline font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
              Book This Journey
            </button>
          </div>
          <button className="w-14 h-14 rounded-full border-2 border-outline-variant/20 flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors">
            <Heart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
