import { Menu } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md fixed top-0 w-full z-50 shadow-sm dark:shadow-none">
      <div className="flex items-center justify-between px-6 py-4 w-full">
        <button className="text-orange-700 dark:text-orange-500 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 transition-colors active:scale-95 transition-transform p-2 rounded-full">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="font-headline font-bold tracking-tight text-xl font-extrabold text-orange-700 dark:text-orange-500 tracking-tighter">
          Adventurous Editorial
        </h1>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container active:scale-95 transition-transform">
          <img 
            alt="User Profile" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfPCFw5v2EpxtDbqiXhyijerPYWVQyX8_eieVPYO-xOUr7HwoDz6U_qXiRXwxAzfkgV20UnFOXMPGo12ACFb1g7GylEUoI3BjvQV04S-pYkLDm7wqRYjfyg4Qg4e3J5ECYUm6sF2afABemE5bsqRiqZxsFzWjQ3DHo4PgqdaAaeOPm_trR5FBEJIaCaKURBFg-D4WPEIr89i76EiL-2OEViYJSmth9QszlScN3cfHWrnQOoQFv_kRON5sbeGEWCS1zV4B8V52nL-I" 
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
