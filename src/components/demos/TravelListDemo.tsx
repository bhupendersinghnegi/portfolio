import React, { useState } from 'react';
import { Plus, Trash2, CheckCircle2, RotateCcw, Luggage, ArrowUpDown } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Item {
  id: string;
  description: string;
  quantity: number;
  packed: boolean;
}

const INITIAL_ITEMS: Item[] = [
  { id: '1', description: 'MacBook Pro & Charger', quantity: 1, packed: true },
  { id: '2', description: 'Passport & International IDs', quantity: 2, packed: true },
  { id: '3', description: 'Noise Cancelling Headphones', quantity: 1, packed: true },
  { id: '4', description: 'Cotton T-Shirts', quantity: 5, packed: false },
  { id: '5', description: 'Comfortable Walking Shoes', quantity: 2, packed: false },
  { id: '6', description: 'Travel Power Adapter Plug', quantity: 1, packed: false },
];

export const TravelListDemo: React.FC = () => {
  const [items, setItems] = useState<Item[]>(INITIAL_ITEMS);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [sortBy, setSortBy] = useState<'input' | 'description' | 'packed'>('input');

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    const newItem: Item = {
      id: Date.now().toString(),
      description: description.trim(),
      quantity,
      packed: false,
    };

    setItems(prev => [newItem, ...prev]);
    setDescription('');
    setQuantity(1);
  };

  const handleToggleItem = (id: string) => {
    setItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const nextPacked = !item.packed;
          if (nextPacked) {
            // check if all items are now packed
            const allElsePacked = prev.filter(i => i.id !== id).every(i => i.packed);
            if (allElsePacked) {
              confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
            }
          }
          return { ...item, packed: nextPacked };
        }
        return item;
      })
    );
  };

  const handleDeleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearAll = () => {
    if (window.confirm('Clear all luggage items?')) {
      setItems([]);
    }
  };

  const handleReset = () => {
    setItems(INITIAL_ITEMS);
  };

  // Derived state
  const totalItems = items.length;
  const packedItems = items.filter(i => i.packed).length;
  const percentage = totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

  // Sorting
  let sortedItems = [...items];
  if (sortBy === 'description') {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === 'packed') {
    sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 md:p-6 text-slate-100 font-sans shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
            <Luggage className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-base md:text-lg">Travel Packing Master</h3>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                React Derived State
              </span>
            </div>
            <p className="text-xs text-slate-400">Declarative state synchronization with instant sort algorithms & luggage metrics</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Initial
          </button>
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleAddItem} className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 flex flex-wrap gap-2.5 items-center">
        <span className="text-xs font-medium text-slate-300 shrink-0">What do you need for your trip?</span>

        <select
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          aria-label="Quantity"
          className="bg-slate-900 border border-slate-700 text-white rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-teal-500 font-mono"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Item name (e.g. Passport, Charger)..."
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="flex-1 min-w-[180px] bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-teal-500"
        />

        <button
          type="submit"
          disabled={!description.trim()}
          className="px-4 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all disabled:opacity-50"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Item
        </button>
      </form>

      {/* Items List & Controls */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-slate-400">
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>Sort Items:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              aria-label="Sort packing items"
              className="bg-slate-800 border border-slate-700 text-slate-200 rounded px-2 py-1 text-xs focus:outline-none"
            >
              <option value="input">By Input Order</option>
              <option value="description">By Item Name (A-Z)</option>
              <option value="packed">By Packed Status</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono">
              {packedItems} / {totalItems} Packed ({percentage}%)
            </span>
            {totalItems > 0 && (
              <button
                type="button"
                onClick={handleClearAll}
                className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                Clear List
              </button>
            )}
          </div>
        </div>

        {/* Grid of Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-[260px] overflow-y-auto pr-1">
          {sortedItems.length === 0 ? (
            <div className="col-span-full py-8 text-center text-slate-500 text-xs">
              No items in your packing list yet. Start packing above!
            </div>
          ) : (
            sortedItems.map(item => (
              <div
                key={item.id}
                onClick={() => handleToggleItem(item.id)}
                className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${
                  item.packed
                    ? 'bg-teal-950/30 border-teal-800/40 text-slate-400'
                    : 'bg-slate-800/60 border-slate-700/60 text-slate-100 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                      item.packed
                        ? 'bg-teal-500 border-teal-500 text-slate-950'
                        : 'border-slate-600 bg-slate-900'
                    }`}
                  >
                    {item.packed && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <span className="font-mono text-xs font-bold text-teal-400 shrink-0">
                    {item.quantity}x
                  </span>
                  <span
                    className={`text-xs truncate ${
                      item.packed ? 'line-through text-slate-500' : 'text-slate-200'
                    }`}
                  >
                    {item.description}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    handleDeleteItem(item.id);
                  }}
                  className="text-slate-500 hover:text-rose-400 p-1 transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Progress & Summary Bar */}
      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="font-medium text-slate-300">
            {percentage === 100
              ? '✈️ Ready to go! Everything is packed!'
              : percentage > 0
              ? `🎒 You have ${totalItems - packedItems} items left to pack`
              : 'Start packing your luggage for departure!'}
          </span>
          <span className="font-mono font-bold text-teal-400">{percentage}%</span>
        </div>

        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};
