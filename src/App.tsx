/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home as HomeIcon, 
  Dumbbell, 
  Moon, 
  Wallet, 
  Trophy, 
  Settings, 
  Flame, 
  Droplets,
  Plus,
  Utensils,
  CreditCard,
  PlusCircle,
  Clock,
  MapPin,
  ChevronRight,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Verified,
  Shield,
  Star
} from 'lucide-react';

// --- Types ---
type Tab = 'home' | 'heavy' | 'salah' | 'money' | 'awards';

// --- Components ---

const TopAppBar = ({ onSettings }: { onSettings: () => void }) => (
  <header className="fixed top-0 left-0 w-full h-16 px-5 flex justify-between items-center bg-black/60 backdrop-blur-2xl border-b border-white/10 z-50">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&h=128&auto=format&fit=crop" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent tracking-tight">
        LifeHub
      </span>
    </div>
    <button 
      onClick={onSettings}
      className="p-2 rounded-full hover:bg-white/5 active:scale-90 transition-all text-zinc-400 hover:text-white"
    >
      <Settings className="w-5 h-5" />
    </button>
  </header>
);

const BottomNavBar = ({ activeTab, onTabSelect }: { activeTab: Tab, onTabSelect: (tab: Tab) => void }) => {
  const tabs = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'heavy', icon: Dumbbell, label: 'Heavy' },
    { id: 'salah', icon: Moon, label: 'Salah' },
    { id: 'money', icon: Wallet, label: 'Money' },
    { id: 'awards', icon: Trophy, label: 'Awards' },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 w-full h-20 px-6 flex justify-around items-center bg-black/80 backdrop-blur-3xl border-t border-white/10 z-50 rounded-t-3xl shadow-[0_-8px_32px_rgba(0,0,0,0.5)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabSelect(tab.id)}
            className={`relative flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-white scale-110' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            {isActive && (
              <motion.div 
                layoutId="nav-halo"
                className={`absolute -inset-2 rounded-xl blur-lg transition-colors
                  ${tab.id === 'heavy' ? 'bg-primary/20' : ''}
                  ${tab.id === 'salah' ? 'bg-secondary/20' : ''}
                  ${tab.id === 'money' ? 'bg-tertiary/20' : ''}
                  ${tab.id === 'home' ? 'bg-white/10' : ''}
                  ${tab.id === 'awards' ? 'bg-yellow-400/10' : ''}
                `}
              />
            )}
            <Icon className={`w-6 h-6 ${isActive ? (
              tab.id === 'heavy' ? 'text-primary' : 
              tab.id === 'salah' ? 'text-secondary' : 
              tab.id === 'money' ? 'text-tertiary-container' : 
              tab.id === 'awards' ? 'text-yellow-400' : 'text-white'
            ) : ''}`} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

// --- Screen Components ---

const HomeScreen = () => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="space-y-8"
  >
    {/* Summary Section */}
    <section>
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-2xl font-bold text-white font-sans">Summary • <span className="font-arabic font-semibold">ملخص</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card glow-red rounded-2xl p-4 flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <Dumbbell className="w-5 h-5 text-primary" />
            <span className="text-[10px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded tracking-tighter">HEAVY</span>
          </div>
          <div>
            <p className="text-white font-bold text-lg">Leg Day • <span className="font-arabic font-normal text-sm opacity-80">تمارين الأرجل</span></p>
            <p className="text-xs text-on-surface-variant font-medium">Scheduled for 18:00</p>
          </div>
        </div>
        
        <div className="glass-card glow-green rounded-2xl p-4 flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <Moon className="w-5 h-5 text-secondary" />
            <span className="text-[10px] font-black text-secondary bg-secondary/10 px-2 py-0.5 rounded tracking-tighter">SALAH</span>
          </div>
          <div>
            <p className="text-white font-bold text-lg">Asr • <span className="font-arabic font-normal text-sm opacity-80">صلاة العصر</span></p>
            <p className="text-xs text-secondary font-semibold italic">In 45 min • <span className="font-arabic font-normal">بعد ٤٥ دقيقة</span></p>
          </div>
        </div>

        <div className="glass-card glow-blue rounded-2xl p-4 flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <Wallet className="w-5 h-5 text-tertiary-container" />
            <span className="text-[10px] font-black text-tertiary-container bg-tertiary-container/10 px-2 py-0.5 rounded tracking-tighter">MONEY</span>
          </div>
          <div>
            <p className="text-white font-bold text-lg">$12,450.00 • <span className="font-arabic font-normal text-sm opacity-80">الرصيد</span></p>
            <p className="text-xs text-tertiary font-medium">+2.4% this month</p>
          </div>
        </div>
      </div>
    </section>

    {/* Vitals Section */}
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">Vitals • <span className="font-arabic font-semibold">الحيوية</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="glass-card rounded-3xl p-6 flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-white font-bold text-lg">Calories • <span className="font-arabic font-normal">السعرات</span></h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-primary">2,140</span>
              <span className="text-sm text-on-surface-variant">/ 3000 kcal</span>
            </div>
            <p className="text-sm text-on-surface-variant font-arabic">٨٦٠ سعرة متبقية</p>
          </div>
          <div className="relative w-20 h-20">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-container-high" cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="6" fill="transparent" />
              <circle className="text-primary-container" cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray="213.6" strokeDashoffset={213.6 * 0.29} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-black text-white">71%</div>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-white font-bold text-lg">Hydration • <span className="font-arabic font-normal">الماء</span></h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-tertiary">1,800</span>
                <span className="text-sm text-on-surface-variant">/ 2500 ml</span>
              </div>
            </div>
            <Droplets className="w-8 h-8 text-tertiary" />
          </div>
          <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
            <motion.div 
               initial={{ width: 0 }}
               animate={{ width: '72%' }}
               className="h-full bg-tertiary-container shadow-[0_0_15px_rgba(95,139,255,0.4)]"
            />
          </div>
          <p className="mt-2 text-xs text-on-surface-variant text-right font-arabic">٣ أكواب متبقية</p>
        </div>
      </div>
    </section>

    {/* Quick Actions */}
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">Quick Actions • <span className="font-arabic font-semibold">إجراءات سريعة</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { color: 'text-primary-container', bg: 'bg-primary-container/10', icon: PlusCircle, label: 'Log Workout', arabic: 'تسجيل تمرين' },
          { color: 'text-secondary', bg: 'bg-secondary/10', icon: Utensils, label: 'Log Meal', arabic: 'تسجيل وجبة' },
          { color: 'text-tertiary', bg: 'bg-tertiary/10', icon: CreditCard, label: 'Add Expense', arabic: 'إضافة مصاريف', full: true },
        ].map((action, i) => {
          const Icon = action.icon;
          return (
            <button key={i} className={`glass-card rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/5 active:scale-95 transition-all ${action.full ? 'col-span-2 md:col-span-1' : ''}`}>
              <div className={`p-3 rounded-full ${action.bg}`}>
                <Icon className={`w-6 h-6 ${action.color}`} />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-white leading-tight">{action.label}</p>
                <p className="text-[10px] text-on-surface-variant font-arabic leading-tight">{action.arabic}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>

    <div className="h-24" /> {/* Spacer */}
  </motion.div>
);

const HeavyScreen = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="space-y-8 pb-32"
  >
    <section className="space-y-4">
      <div className="flex justify-between items-end">
        <h2 className="text-3xl font-black text-white tracking-tight">Heavy Sessions</h2>
        <span className="text-xs font-black text-primary tracking-widest uppercase">Volume: 12.4k kg</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Push', sub: 'Chest, Shoulders, Tris', icon: Dumbbell, color: 'border-l-primary-container', active: true },
          { label: 'Pull', sub: 'Back, Bi, Rear Delts', icon: TrendingUp, color: 'border-l-transparent' },
          { label: 'Legs', sub: 'Quads, Glutes, Hams', icon: MapPin, color: 'border-l-transparent' },
          { label: 'Core', sub: 'HIIT & Abs focus', icon: Flame, color: 'border-l-transparent' },
        ].map((session, i) => (
          <button key={i} className={`glass-card p-6 rounded-2xl flex flex-col items-start gap-2 border-l-4 transition-all active:scale-95 ${session.color} ${session.active ? 'ring-1 ring-primary/20' : ''}`}>
            <session.icon className={`w-6 h-6 ${session.active ? 'text-primary' : 'text-zinc-500'}`} />
            <span className="text-xl font-bold text-white">{session.label}</span>
            <span className="text-[10px] text-zinc-500 font-medium leading-tight">{session.sub}</span>
          </button>
        ))}
      </div>
    </section>

    <section className="space-y-4">
      <h3 className="text-[10px] font-black text-zinc-500 tracking-[0.2em] uppercase px-1">Current Exercise</h3>
      <div className="glass-card rounded-3xl p-6 relative overflow-hidden ring-1 ring-primary/10">
        <div className="absolute top-0 right-0 p-6 opacity-5">
           <Dumbbell className="w-24 h-24" />
        </div>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h4 className="text-xl font-bold text-white">Incline Bench Press</h4>
            <p className="text-sm font-bold text-primary">Set 3 of 4</p>
          </div>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-white">
            <Settings className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="space-y-1">
            <label className="text-[10px] font-black text-zinc-500 uppercase">Weight</label>
            <input className="w-full bg-surface-container-low border-b-2 border-zinc-700 focus:border-primary-container text-white font-bold text-2xl text-center py-2 focus:outline-none transition-all" type="text" defaultValue="85" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black text-zinc-500 uppercase">Reps</label>
            <input className="w-full bg-surface-container-low border-b-2 border-zinc-700 focus:border-primary-container text-white font-bold text-2xl text-center py-2 focus:outline-none transition-all" type="text" defaultValue="8" />
          </div>
          <div className="flex items-end">
            <button className="w-full bg-primary-container text-white font-black py-3 rounded-xl active:scale-95 transition-all text-xs">DONE</button>
          </div>
        </div>
        <button className="w-full py-4 rounded-2xl border border-primary-container/30 text-primary-container font-bold flex items-center justify-center gap-3 active:bg-primary-container/5 transition-all">
          <Clock className="w-5 h-5" />
          <span>Start Rest Timer (90s)</span>
        </button>
      </div>
    </section>

    <section className="space-y-4">
      <div className="flex justify-between items-center px-1">
        <h3 className="text-[10px] font-black text-zinc-500 tracking-[0.2em] uppercase">Fuel Intake</h3>
        <span className="text-xs font-bold text-white">2,450 / 3,100 kcal</span>
      </div>
      <div className="glass-card rounded-3xl p-6 space-y-6">
        {[
          { label: 'Protein', val: '182g', target: '210g', percent: '85%', color: 'from-primary-container to-orange-500' },
          { label: 'Carbs', val: '240g', target: '350g', percent: '68%', color: 'from-orange-400 to-yellow-500' },
          { label: 'Fats', val: '58g', target: '85g', percent: '72%', color: 'from-zinc-500 to-zinc-300' },
        ].map((macro, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white font-bold">{macro.label}</span>
              <span className="text-zinc-500">{macro.val} / {macro.target}</span>
            </div>
            <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: macro.percent }}
                className={`h-full bg-gradient-to-r ${macro.color} rounded-full`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

const SalahScreen = () => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-8 pb-32"
  >
    <section className="relative glass-card rounded-3xl p-6 overflow-hidden emerald-glow border-t-2 border-secondary/30">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_70%)]" />
      <div className="relative z-10 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black text-white mb-1">Asr</h2>
          <p className="text-sm font-semibold text-secondary">Next Prayer in 1h 24m</p>
          <p className="font-arabic text-secondary/60 mt-2 text-lg">صلاة العصر</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-black text-white tracking-tighter">16:06</p>
          <div className="flex items-center gap-1 justify-end text-secondary text-xs font-black tracking-widest">
            <MapPin className="w-3 h-3" />
            <span>TUNIS</span>
          </div>
        </div>
      </div>
      <div className="mt-6 h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '66%' }}
          className="h-full bg-secondary shadow-[0_0_10px_rgba(149,211,186,0.5)]" 
        />
      </div>
    </section>

    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Weekly Streak</h3>
        <span className="text-secondary font-black text-[10px] tracking-tight">92% Consistency</span>
      </div>
      <div className="flex justify-between gap-1.5">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
          <div key={i} className={`flex-1 flex flex-col items-center gap-2 p-3 glass-card rounded-xl ${i === 3 ? 'ring-1 ring-secondary bg-secondary/10 scale-105' : 'opacity-60'}`}>
            <span className={`text-[9px] font-black uppercase tracking-tighter ${i === 3 ? 'text-secondary' : 'text-zinc-500'}`}>{day}</span>
            {i <= 3 ? (
              <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                <Verified className="w-4 h-4 text-secondary fill-current" />
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full border border-zinc-800" />
            )}
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-3">
      <h3 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Daily Prayers</h3>
      {[
        { name: 'Fajr', time: '05:12 AM', icon: Moon, done: true },
        { name: 'Dhuhr', time: '12:34 PM', icon: Star, done: true },
        { name: 'Asr', time: '04:06 PM', icon: Flame, active: true },
        { name: 'Maghrib', time: '07:58 PM', icon: Moon, next: true },
        { name: 'Isha', time: '09:32 PM', icon: Moon, next: true },
      ].map((p, i) => (
        <div key={i} className={`glass-card rounded-2xl p-4 flex items-center justify-between ${p.active ? 'ring-1 ring-secondary bg-secondary/5' : p.next ? 'opacity-40' : ''}`}>
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${p.active ? 'bg-secondary text-on-secondary' : 'bg-secondary/10 text-secondary border border-secondary/20'}`}>
              <p.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-black text-white">{p.name}</p>
              <p className={`text-xs ${p.active ? 'text-secondary' : 'text-zinc-500'}`}>{p.time}</p>
            </div>
          </div>
          {p.done ? (
             <div className="w-10 h-10 flex items-center justify-center text-secondary">
               <Verified className="w-6 h-6 fill-current" />
             </div>
          ) : p.active ? (
            <button className="px-4 py-2 bg-secondary text-on-secondary text-[10px] font-black rounded-full active:scale-95 transition-all">LOG NOW</button>
          ) : (
            <div className="w-8 h-8 rounded-full border border-zinc-800" />
          )}
        </div>
      ))}
    </section>
  </motion.div>
);

const MoneyScreen = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-8 pb-32"
  >
    <section>
      <div className="glass-card rounded-3xl p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-tertiary-container/10 blur-[80px] rounded-full" />
        <h2 className="text-[10px] font-black text-tertiary uppercase tracking-[0.2em] mb-1 opacity-60">Total Balance</h2>
        <div className="text-4xl font-black text-white mb-8 flex items-baseline gap-1">
          <span className="text-tertiary text-2xl font-bold">$</span>12,450.80
        </div>
        <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-tighter">Income</span>
            <div className="flex items-center gap-1 text-secondary font-black text-lg">
              <ArrowUpRight className="w-5 h-5" />
              <span>$5,200.00</span>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-tighter">Expenses</span>
            <div className="flex items-center gap-1 text-primary font-black text-lg">
              <ArrowDownRight className="w-5 h-5" />
              <span>$2,840.15</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="space-y-4">
      <div className="flex justify-between items-end mb-2">
        <h3 className="text-2xl font-bold text-white tracking-tight">Spending</h3>
        <span className="text-sm font-bold text-tertiary-container">May 2024</span>
      </div>
      <div className="glass-card rounded-3xl p-8">
        <div className="flex items-center justify-center mb-8 relative">
          <div className="w-44 h-44 rounded-full border-[14px] border-zinc-900 flex items-center justify-center">
            <div className="text-center">
              <span className="block text-zinc-500 text-[10px] uppercase font-black tracking-tighter mb-1">Spent</span>
              <span className="text-white font-black text-2xl">$2,840</span>
            </div>
          </div>
          <svg className="absolute w-44 h-44 -rotate-90">
            <circle cx="88" cy="88" r="81" fill="transparent" stroke="currentColor" className="text-tertiary-container" strokeWidth="14" strokeDasharray="508.9" strokeDashoffset="140" strokeLinecap="round" />
            <circle cx="88" cy="88" r="81" fill="transparent" stroke="currentColor" className="text-secondary" strokeWidth="14" strokeDasharray="508.9" strokeDashoffset="420" strokeLinecap="round" />
          </svg>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Rent & Utilities', amount: '$1,800.00', color: 'bg-tertiary-container' },
            { label: 'Food & Dining', amount: '$640.50', color: 'bg-secondary' },
            { label: 'Gym & Health', amount: '$120.00', color: 'bg-primary-container' },
            { label: 'Transport', amount: '$279.65', color: 'bg-zinc-600' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                <span className="text-sm font-medium text-on-surface">{item.label}</span>
              </div>
              <span className="text-sm font-black text-white">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="space-y-4 pb-8">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-2xl font-bold text-white tracking-tight">Activity</h3>
        <button className="text-xs font-bold text-zinc-500 hover:text-white transition-colors">See all</button>
      </div>
      <div className="space-y-3">
        {[
          { icon: Utensils, label: 'The Coffee House', sub: 'Food • Today', amount: '-$12.40', color: 'bg-tertiary-container/20 text-tertiary-container' },
          { icon: Dumbbell, label: 'Elite Fitness', sub: 'Gym • Yesterday', amount: '-$85.00', color: 'bg-primary-container/20 text-primary-container' },
          { icon: Shield, label: 'Company Payroll', sub: 'Income • 2 days ago', amount: '+$5,200.00', color: 'bg-secondary-container/20 text-secondary', pos: true },
        ].map((tx, i) => (
          <div key={i} className="glass-card rounded-2xl p-4 flex items-center justify-between hover:bg-white/5 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${tx.color}`}>
                <tx.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-bold">{tx.label}</p>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-tighter">{tx.sub}</p>
              </div>
            </div>
            <span className={`font-black tracking-tight ${tx.pos ? 'text-secondary' : 'text-white'}`}>{tx.amount}</span>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

const AwardsScreen = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="space-y-8 pb-32"
  >
    <section>
      <div className="glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col items-center text-center shadow-[0_0_40px_rgba(255,75,43,0.15)]">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-container/20 blur-3xl rounded-full" />
        <div className="mb-6">
          <Shield className="w-16 h-16 text-[#FF4B2B] drop-shadow-[0_0_15px_rgba(255,75,43,0.6)]" fill="currentColor" />
        </div>
        <h1 className="text-4xl font-black text-white mb-1">Level 12</h1>
        <p className="text-primary-container font-black text-xs uppercase mb-8 tracking-[0.2em]">Elite Performer</p>
        <div className="w-full max-w-xs">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Next Level</span>
            <span className="text-xs font-black text-white">850 / 1000 XP</span>
          </div>
          <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '85%' }}
              className="h-full bg-gradient-to-r from-[#FF4B2B] to-[#FF8E2B] rounded-full shadow-[0_0_12px_rgba(255,75,43,0.5)]" 
            />
          </div>
        </div>
      </div>
    </section>

    <div className="space-y-10">
      {[
        { 
          section: 'Heavy', color: 'primary-container', icon: Dumbbell,
          items: [
            { label: '7-Day Iron Streak', sub: 'Perfect week achieved.', xp: '100 XP', progress: '100%', unlocked: true, icon: Flame },
            { label: 'Heavyweight King', sub: 'Lift total 50,000kg.', xp: '500 XP', progress: '30%', icon: Trophy },
          ]
        },
        { 
          section: 'Salah', color: 'secondary', icon: Moon,
          items: [
            { label: '40-Day Consistency', sub: 'Established new foundation.', xp: '250 XP', progress: '100%', unlocked: true, icon: Star },
          ]
        },
        { 
          section: 'Money', color: 'tertiary-container', icon: Wallet,
          items: [
            { label: 'Budget Master', sub: '3 months under limit.', xp: '200 XP', progress: '100%', unlocked: true, icon: Verified },
            { label: 'Halfway Millionaire', sub: 'Reach net worth milestone.', xp: '1000 XP', progress: '15%', icon: Shield },
          ]
        },
      ].map((cat, i) => (
        <section key={i} className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <cat.icon className={`w-5 h-5 text-${cat.color}`} />
            <h2 className="text-xl font-bold text-white">{cat.section}</h2>
          </div>
          <div className="space-y-4">
            {cat.items.map((item, j) => {
              const ItemIcon = item.icon;
              return (
                <div key={j} className={`glass-card p-5 rounded-2xl flex items-center gap-5 border-l-4 border-l-${cat.color} ${!item.unlocked ? 'opacity-40 grayscale' : ''}`}>
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${item.unlocked ? `bg-${cat.color}/10 shadow-[0_0_12px_rgba(0,0,0,0.3)]` : 'bg-surface-container-high'}`}>
                    <ItemIcon className={`w-8 h-8 ${item.unlocked ? `text-${cat.color}` : 'text-zinc-600'}`} fill={item.unlocked ? 'currentColor' : 'none'} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="font-bold text-white leading-tight">{item.label}</h3>
                       <span className={`text-[9px] font-black px-2 py-1 rounded bg-${cat.color}/20 text-${cat.color}`}>{item.xp}</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full mb-2">
                      <div className={`bg-${cat.color} h-full rounded-full`} style={{ width: item.progress }} />
                    </div>
                    <p className="text-xs text-zinc-500 font-medium">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  </motion.div>
);

const LoginScreen = ({ onLogin }: { onLogin: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-surface flex flex-col items-center justify-center px-6 overflow-hidden"
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
    <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-primary-container/5 blur-[120px]" />
    
    <div className="relative z-10 w-full max-w-md flex flex-col items-center">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 mb-6 border border-white/10">
           <PlusCircle className="w-10 h-10 text-primary-container" />
        </div>
        <h1 className="text-4xl font-black text-white mb-2 tracking-tighter">LifeHub</h1>
        <div className="space-y-1">
          <p className="text-lg font-bold text-on-surface-variant">Welcome back, High Performer</p>
          <p className="font-arabic text-2xl text-primary-container/80 tracking-tight" dir="rtl">أهلاً بك مجدداً، أيها المتميز</p>
        </div>
      </div>

      <div className="w-full glass-card rounded-3xl p-8 glow-red shadow-2xl">
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between px-1">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Email Address</label>
                <span className="font-arabic text-[10px] text-zinc-500">البريد الإلكتروني</span>
              </div>
              <input className="w-full bg-surface-container-high/50 border-b-2 border-zinc-700 focus:border-primary-container transition-all px-4 py-3 text-white placeholder:text-zinc-700 outline-none rounded-t-xl" placeholder="name@energy.com" type="email" required />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between px-1">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Password</label>
                <span className="font-arabic text-[10px] text-zinc-500">كلمة المرور</span>
              </div>
              <input className="w-full bg-surface-container-high/50 border-b-2 border-zinc-700 focus:border-primary-container transition-all px-4 py-3 text-white placeholder:text-zinc-700 outline-none rounded-t-xl" placeholder="••••••••" type="password" required />
            </div>
          </div>

          <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary-container to-[#FF416C] rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-white shadow-xl shadow-primary-container/20">
            <span className="font-black text-sm uppercase tracking-widest">LOGIN</span>
            <span className="font-arabic text-lg font-bold">تسجيل الدخول</span>
            <Flame className="w-5 h-5 fill-current" />
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5" /></div>
          <div className="relative flex justify-center"><span className="bg-[#1A1A1A] px-4 text-[10px] font-black text-zinc-600 uppercase tracking-widest">Or continue with</span></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 border border-white/10 rounded-2xl hover:bg-white/5 transition-all">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-3 border border-white/10 rounded-2xl hover:bg-white/5 transition-all">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Apple</span>
          </button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-zinc-500 font-medium">Don't have an account? <button className="text-primary-container font-black hover:underline underline-offset-4 ml-1">Sign up for free / اشترك مجاناً</button></p>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home': return <HomeScreen />;
      case 'heavy': return <HeavyScreen />;
      case 'salah': return <SalahScreen />;
      case 'money': return <MoneyScreen />;
      case 'awards': return <AwardsScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {!isLoggedIn && <LoginScreen onLogin={() => setIsLoggedIn(true)} />}
      </AnimatePresence>

      <TopAppBar onSettings={() => setIsLoggedIn(false)} />
      <main className="pt-20 px-5 max-w-lg mx-auto">
        <AnimatePresence mode="wait">
          {isLoggedIn && renderScreen()}
        </AnimatePresence>
      </main>
      
      {/* Contextual FAB */}
      <AnimatePresence>
        {isLoggedIn && activeTab === 'home' && (
          <motion.button 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed right-6 bottom-24 w-14 h-14 rounded-2xl bg-primary-container text-white flex items-center justify-center shadow-[0_8px_24px_rgba(255,86,55,0.3)] active:scale-90 transition-transform z-40"
          >
            <Plus className="w-8 h-8" />
          </motion.button>
        )}
      </AnimatePresence>

      {isLoggedIn && <BottomNavBar activeTab={activeTab} onTabSelect={setActiveTab} />}
    </div>
  );
}


