import React, { useState } from 'react';
import { ShoppingBag, Plus, Minus, Check, MapPin, Sparkles, ArrowRight, RotateCcw, Clock, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PizzaItem {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}

const MENU: PizzaItem[] = [
  {
    id: 1,
    name: 'Focaccia Rustica',
    unitPrice: 6,
    ingredients: ['Bread with Italian olive oil', 'Fresh rosemary', 'Sea salt'],
    soldOut: false,
    imageUrl: '🌿'
  },
  {
    id: 2,
    name: 'Pizza Margherita Di Bufala',
    unitPrice: 10,
    ingredients: ['San Marzano Tomato', 'Buffalo Mozzarella', 'Fresh Basil'],
    soldOut: false,
    imageUrl: '🍕'
  },
  {
    id: 3,
    name: 'Pizza Spinaci & Ricotta',
    unitPrice: 12,
    ingredients: ['Baby Spinach', 'Creamy Ricotta', 'Toasted Pine Nuts'],
    soldOut: false,
    imageUrl: '🥬'
  },
  {
    id: 4,
    name: 'Pizza Funghi Tartufo',
    unitPrice: 14,
    ingredients: ['Wild Mushrooms', 'Truffle Glaze', 'Fontina Cheese'],
    soldOut: false,
    imageUrl: '🍄'
  },
  {
    id: 5,
    name: 'Pizza Salamino Piccante',
    unitPrice: 15,
    ingredients: ['Spicy Calabrian Salami', 'Smoked Scamorza', 'Chili Flakes'],
    soldOut: true,
    imageUrl: '🌶️'
  },
  {
    id: 6,
    name: 'Pizza Prosciutto e Rucola',
    unitPrice: 18,
    ingredients: ['Parma Ham', 'Wild Arugula', 'Shaved Grana Padano'],
    soldOut: false,
    imageUrl: '🥓'
  }
];

export const PizzaDemo: React.FC = () => {
  const [cart, setCart] = useState<{ [id: number]: number }>({ 2: 1, 4: 1 });
  const [priority, setPriority] = useState<boolean>(true);
  const [customerName, setCustomerName] = useState<string>('Alex Morgan');
  const [address, setAddress] = useState<string>('Sector 62, Innovation Park, Noida');
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>('ORD-8942');
  const [statusStep, setStatusStep] = useState<number>(2); // 1: Prepping, 2: Baking, 3: Out for Delivery, 4: Delivered

  const totalQuantity = (Object.values(cart) as number[]).reduce((sum: number, qty: number) => sum + qty, 0);
  const rawTotal = Object.entries(cart).reduce((sum: number, [id, qty]) => {
    const item = MENU.find(p => p.id === Number(id));
    return sum + (item ? item.unitPrice * Number(qty) : 0);
  }, 0);

  const priorityFee = priority ? Math.round(rawTotal * 0.2 * 10) / 10 : 0;
  const grandTotal = rawTotal + priorityFee;

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => {
      const current = prev[id] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const handleFetchLocation = () => {
    setIsLocating(true);
    setTimeout(() => {
      setAddress('Building 4, Cyber City Phase 2, DLF Hub, Gurugram (via GPS)');
      setIsLocating(false);
    }, 600);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (totalQuantity === 0) return;
    const generatedId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(generatedId);
    setOrderPlaced(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleReset = () => {
    setOrderPlaced(false);
    setCart({ 2: 1, 4: 1 });
    setStatusStep(2);
  };

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 md:p-6 text-slate-100 font-sans shadow-2xl">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-xl">
            🍕
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-base md:text-lg">Fast React Pizza Co.</h3>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Interactive Demo
              </span>
            </div>
            <p className="text-xs text-slate-400">Built with React state management, geolocation hook & live cart computations</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {orderPlaced && (
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              New Order
            </button>
          )}
          <div className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center gap-2 text-xs font-mono">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-bold text-white">{totalQuantity} pizzas</span>
            <span className="text-slate-500">|</span>
            <span className="text-emerald-400 font-bold">${grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {!orderPlaced ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Menu Items (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 font-medium px-1">
              <span>Artisan Menu (React Store Sync)</span>
              <span>Price</span>
            </div>

            <div className="grid grid-cols-1 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
              {MENU.map(pizza => {
                const qty = cart[pizza.id] || 0;
                return (
                  <div
                    key={pizza.id}
                    className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                      pizza.soldOut
                        ? 'bg-slate-900/40 border-slate-800/40 opacity-50'
                        : qty > 0
                        ? 'bg-slate-800/80 border-amber-500/40 shadow-sm'
                        : 'bg-slate-800/40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="text-2xl w-10 h-10 rounded-lg bg-slate-900/80 border border-slate-700/50 flex items-center justify-center shrink-0">
                        {pizza.imageUrl}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-sm text-white truncate">{pizza.name}</h4>
                          {pizza.soldOut && (
                            <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono">
                              Sold Out
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 truncate">{pizza.ingredients.join(', ')}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-sm font-semibold text-slate-200">
                        ${pizza.unitPrice}
                      </span>

                      {!pizza.soldOut ? (
                        qty === 0 ? (
                          <button
                            type="button"
                            onClick={() => updateQuantity(pizza.id, 1)}
                            className="px-2.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-transform active:scale-95 flex items-center gap-1"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            Add
                          </button>
                        ) : (
                          <div className="flex items-center gap-1.5 bg-slate-900 rounded-lg p-1 border border-slate-700">
                            <button
                              type="button"
                              onClick={() => updateQuantity(pizza.id, -1)}
                              className="w-6 h-6 rounded flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-mono text-xs font-bold text-amber-400 w-5 text-center">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(pizza.id, 1)}
                              className="w-6 h-6 rounded flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        )
                      ) : (
                        <span className="text-xs text-slate-600 italic">Unavailable</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Checkout Panel (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950/60 rounded-xl p-4 border border-slate-800 flex flex-col justify-between">
            <form onSubmit={handlePlaceOrder} className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Order Details & Dispatch
                </h4>

                <div className="space-y-2.5">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">Customer Name</label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      required
                      className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none rounded-lg px-3 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-[11px] text-slate-400 block">Delivery Address</label>
                      <button
                        type="button"
                        onClick={handleFetchLocation}
                        disabled={isLocating}
                        className="text-[10px] text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium disabled:opacity-50"
                      >
                        <MapPin className="w-2.5 h-2.5" />
                        {isLocating ? 'Locating via GPS...' : 'Use Geolocation API'}
                      </button>
                    </div>
                    <input
                      type="text"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      required
                      className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none rounded-lg px-3 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="priority-toggle"
                        checked={priority}
                        onChange={e => setPriority(e.target.checked)}
                        className="rounded border-slate-700 text-amber-500 focus:ring-amber-500/20 bg-slate-950 cursor-pointer"
                      />
                      <label htmlFor="priority-toggle" className="text-xs text-slate-300 cursor-pointer flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        Give my order priority (+20%)
                      </label>
                    </div>
                    <span className="font-mono text-xs text-amber-400 font-medium">+${priorityFee.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Pizza Total ({totalQuantity} items):</span>
                  <span className="font-mono text-slate-200">${rawTotal.toFixed(2)}</span>
                </div>
                {priority && (
                  <div className="flex justify-between text-amber-400/90">
                    <span>Priority Express Dispatch:</span>
                    <span className="font-mono">+${priorityFee.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-white pt-1.5 border-t border-slate-800">
                  <span>To Pay on Delivery:</span>
                  <span className="font-mono text-emerald-400">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={totalQuantity === 0}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Place Order Now ({totalQuantity} Items)
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        /* Order Confirmed / Live Tracking View */
        <div className="mt-6 p-6 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  Order Confirmed: {orderId}
                </span>
                {priority && (
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px] uppercase font-bold">
                    PRIORITY EXPRESS
                  </span>
                )}
              </div>
              <h4 className="text-white font-bold text-base mt-1.5">Estimated Arrival: 18 minutes</h4>
              <p className="text-xs text-slate-400">Delivering to: <span className="text-slate-200">{customerName}</span> at <span className="text-slate-200">{address}</span></p>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-400 block">Total Due on Arrival</span>
              <span className="font-mono text-xl font-extrabold text-emerald-400">${grandTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Live Progress Stepper */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-medium text-slate-400">
              <span className={statusStep >= 1 ? 'text-amber-400 font-bold' : ''}>1. Received</span>
              <span className={statusStep >= 2 ? 'text-amber-400 font-bold' : ''}>2. Baking in Oven 🔥</span>
              <span className={statusStep >= 3 ? 'text-amber-400 font-bold' : ''}>3. On the Way 🛵</span>
              <span className={statusStep >= 4 ? 'text-emerald-400 font-bold' : ''}>4. Delivered 🎉</span>
            </div>

            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-700"
                style={{ width: `${(statusStep / 4) * 100}%` }}
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setStatusStep(prev => Math.min(4, prev + 1))}
                disabled={statusStep >= 4}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-300 font-mono disabled:opacity-40"
              >
                Simulate Next Driver Step →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
