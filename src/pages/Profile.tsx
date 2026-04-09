import { Calendar, Ticket, ChevronRight, Star } from 'lucide-react';

export default function Profile() {
  return (
    <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
      {/* Hero Profile Section */}
      <section className="relative mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-end">
          <div className="w-full md:w-2/3">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">Premium Member</span>
            <h2 className="text-5xl font-extrabold font-headline text-on-background tracking-tighter leading-none mb-4">
              Alexandria <br/> <span className="text-secondary">Wellesley</span>
            </h2>
            <p className="text-on-surface-variant max-w-md text-lg leading-relaxed">
              Curating a life of altitude and ocean spray. Currently mapping the hidden trails of the Amalfi Coast.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-start md:justify-end gap-4">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 flex-1 md:flex-none text-center">
              <span className="block text-2xl font-bold font-headline text-primary">24</span>
              <span className="text-[10px] font-semibold uppercase text-outline tracking-wider">Journeys</span>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 flex-1 md:flex-none text-center">
              <span className="block text-2xl font-bold font-headline text-primary">12</span>
              <span className="text-[10px] font-semibold uppercase text-outline tracking-wider">Passports</span>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Trips */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold font-headline tracking-tight">Upcoming Trips</h3>
          <button className="text-primary font-semibold text-sm hover:underline">View Calendar</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trip Card 1: Confirmed */}
          <div className="group relative overflow-hidden rounded-xl bg-surface-container-low transition-all hover:bg-surface-container-lowest hover:shadow-md">
            <div className="h-48 overflow-hidden relative">
              <img 
                alt="Santorini" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIr5JR5Pm6LOMZyX4nL3tT_b87M93U4198SxUvG6vAX3X7VnMFzGajk7V30rrG8TKFAg9DzBdn7GYCJuGoqcN5gaswsK09Ia9-6ws5-E61aUsELbPpvvbgwgbIU080017chj22AoaMEAWAPfNOk6qII3qXGNphlOwUvWWd8t3TLIgiU6TC91AKBdSeI5MJE8zvMridyoilNs04KOgKZKFPv6eWKX9aJSPY9EoIXeRGkv93KsqLN3Mi_LiLUVsEC7gx5p8dpA9hy5A" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-[10px] font-bold uppercase text-on-background tracking-tighter">Confirmed</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-bold font-headline text-on-background">Sunset Sails in Santorini</h4>
                  <p className="text-sm text-on-surface-variant flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Oct 12 - Oct 18, 2024
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-outline-variant/10 pt-4">
                <div className="flex -space-x-2">
                  <img 
                    alt="companion" 
                    className="w-6 h-6 rounded-full border-2 border-white" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1YmzhIT69I2uSaXFzcxoWoB5fDH2opBAXS3HwpuSDsusMppnbkJpFTzLHs4irV8hWMKtPdYgzUHPC03BAq9trzHmfrxpe0uwxYIsOroJ0xV3bWfpkpjX1PhvhngsEQJOwX5mtQeXQRTKqIWhaO0CxpUBp0-mTfmnGemZ7zpkD72ty5KqIZduscBMxm9mI2AsBK9yL1ss3k0ew0-8UagWWt2KKDDga9fJV-jJwpdhv3rRcH7Xj0nbA0CXVPDrkdjfQBU8xNqT24cU" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center text-[10px] font-bold text-on-secondary-fixed border-2 border-white">+1</div>
                </div>
                <button className="bg-primary text-on-primary px-4 py-2 rounded-xl text-xs font-bold font-label active:scale-95 transition-transform">Details</button>
              </div>
            </div>
          </div>
          {/* Trip Card 2: Pending */}
          <div className="group relative overflow-hidden rounded-xl bg-surface-container-low transition-all hover:bg-surface-container-lowest hover:shadow-md">
            <div className="h-48 overflow-hidden relative">
              <img 
                alt="San Francisco" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYA208sruNhz9TYUs_YsLcGD66vMW3PXlm0Ag7XinT_rhX6h11Mc5EP5ne3gJOG8bcY-YMvnga8dAjKSkeZevmpiK3vNLfse9b_ZrG939oazu6FoK0OWa0PGEz2OoNy-RX_B3aYwurzS7lGC62nMWSTS-IC6kDCBXqgy_Dq-VRdn_zjkIt97fA9g4x-kooZgom610UrbET2jXZ0-a1VurvfyDbWHckWbvOezsOCC-zAen0qhCZh3ZZZi4fvSXttpFdHMlMuxH_piw" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase text-on-background tracking-tighter">Pending</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-bold font-headline text-on-background">West Coast Road Journal</h4>
                  <p className="text-sm text-on-surface-variant flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Nov 04 - Nov 12, 2024
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-outline-variant/10 pt-4">
                <span className="text-[11px] text-orange-800 font-bold bg-orange-50 px-2 py-1 rounded">Awaiting Operator</span>
                <button className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-xl text-xs font-bold font-label active:scale-95 transition-transform">Review</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Favorite Destinations */}
      <section className="mb-14">
        <h3 className="text-2xl font-bold font-headline tracking-tight mb-6">Favorite Destinations</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px]">
          <div className="relative overflow-hidden rounded-xl col-span-2 row-span-2 group">
            <img 
              alt="Paris" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo55I1eurOUYcvOBnVvy9npohxzPZVIFFg_dN84vrhvJr3FnpEQ1oGep5CJwpqK1XC5LUvMKcYItaZ9TeGXOgHNSpcyfIt8ZxhjTjNipWpfpy1IadgSp89B7-t89c5YbsWuGpJLJ85-mjgQah9ux3_ZlaB8klpIuWSbOV73vp4g_rJkvod3tD4EG-0qQ7HCCool3IjQLUQiFxq5I8GqKr2IfpbcqscXC-WdrPOD1fo6VD9WTQI0AkTpZZfRIMx5GRT7IOjj-uCyg0" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] font-bold uppercase text-white/80 tracking-widest block mb-1">France</span>
              <h5 className="text-xl font-bold text-white font-headline">The Heart of Paris</h5>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl group">
            <img 
              alt="Kyoto" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMW3iS1o0h0iFvUquU_hYkXvufx6Gw8Al25dUTOMg0PuOU49TtG779gSmwU_SYIUjCtBi8P_yeOKOMMOJmvJu4Gj9behXOyWvix2XyM-iNYYnTHvNl8t6qnBMu6RthSO5TLIcVFdc0H7xBn7EwygD_w1yA4WK0tlGoT-qtj0SMUO5TEQ4Yv7THZzfjAV8nXcrNFTifTtD25wynhOza-WBua09X7WblprDpbClij-qIA8xGjH7oJ3IwVt-PaSZWKJT0iBlRIWeg5JU" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3">
              <h5 className="text-sm font-bold text-white font-headline">Kyoto Temples</h5>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl group">
            <img 
              alt="Maldives" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3v71avu_iynwVHjSxwi4Ove_vzEnS4ysRkLfGyzn7PX2sog3r8UwvB5dmcdKud1_zJpbiO3WNdOCPmVflKTu5dEmXVhrjhPaDBOMZQLJMj91Hkox7_SBRjDts2oa6kXjjkZ4gTzg-ZSlL93qNLoFgxmt6zMQzPCUJNBl-pZVPmff5ArnenT3SWz4NdF0yI90OiOIh1K8vjeQspmTUsylCr4i5kwvy5tt2s1odUnXbd1x8pzf5_2t40nE6h0lz9xqXegyaBxvCzjc" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3">
              <h5 className="text-sm font-bold text-white font-headline">Maldives Atoll</h5>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl group col-span-2">
            <img 
              alt="Swiss Alps" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW3YOxn554CH74hTJbnNjySTMv8UCsZDhYZ-_X5P5kdyxZ8ROpRzct1W3JzjEmCILJkiJOfoTo97jO9GqlH4vC1qCe6TJ2yXds34a2OLqeGXajR22CVGstGy62dFiZwMlUHUh0cN6_B9IKbVaxfxToI4b3St5oagtQ-Z-A_jaqRF9Z_GDrcZRbRuHmjqkanuKQnPW33zQKnkg0r1o-xdnHQrDNsw6QGzWPda6n0wubhxubDJrwuiolqfcwkDtb_e_tASNI8uOdB74" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-4">
              <h5 className="text-sm font-bold text-white font-headline">Swiss Alpinism</h5>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
