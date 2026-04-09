import { Home, Compass, Ticket, User, Menu } from 'lucide-react';
import { Page } from '../types';

interface BottomNavProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export default function BottomNav({ currentPage, onPageChange }: BottomNavProps) {
  const items = [
    { id: 'home' as Page, label: 'Home', icon: Home },
    { id: 'explore' as Page, label: 'Explore', icon: Compass },
    { id: 'bookings' as Page, label: 'Bookings', icon: Ticket },
    { id: 'profile' as Page, label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-3 pb-6 bg-white dark:bg-zinc-950 rounded-t-3xl z-50 border-t border-zinc-100 dark:border-zinc-800 shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)]">
      {items.map((item) => {
        const isActive = currentPage === item.id;
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`flex flex-col items-center justify-center px-4 py-1.5 active:scale-90 transition-all duration-200 rounded-2xl ${
              isActive 
                ? 'text-orange-700 dark:text-orange-500 bg-orange-50 dark:bg-orange-950/30' 
                : 'text-zinc-400 dark:text-zinc-600 hover:text-orange-600 dark:hover:text-orange-400'
            }`}
          >
            <Icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} />
            <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
