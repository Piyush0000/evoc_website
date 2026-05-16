'use client';

import React, { useState, useEffect } from 'react';
import { Info, ArrowDown, Share, Briefcase, ShieldCheck, TrendingUp, CircleDollarSign, BarChart3, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { DM_Sans } from 'next/font/google';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';

const dmSans = DM_Sans({ subsets: ['latin'] });

// Helper to format currency in Indian format
const formatINR = (value: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
};

const getChartMax = (val: number) => {
  if (val <= 10) return 10;
  if (val <= 50) return 50;
  if (val <= 100) return 100;
  if (val <= 200) return 200;
  if (val <= 500) return 500;
  if (val <= 1000) return 1000;
  if (val <= 2000) return 2000;
  if (val <= 5000) return 5000;
  if (val <= 10000) return 10000;
  if (val <= 20000) return 20000;
  if (val <= 50000) return 50000;
  return Math.ceil(val / 10000) * 10000;
};

// Smooth counting animation component
function AnimatedCounter({ value, isCurrency = false }: { value: number, isCurrency?: boolean }) {
  const motionValue = useMotionValue(value);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.2, // Extremely snappy, exact duration
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, motionValue]);

  return (
    <motion.span>
      {useTransform(motionValue, (latest) => {
        const rounded = Math.round(latest);
        return isCurrency ? formatINR(rounded) : rounded.toLocaleString('en-IN');
      })}
    </motion.span>
  );
}

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
} as const;

export default function SavingsCalculator({ hideHeader = false }: { hideHeader?: boolean }) {
  const [monthlyOrders, setMonthlyOrders] = useState(500);
  const [avgOrderValue, setAvgOrderValue] = useState(1000);
  const [monthlyToolStack, setMonthlyToolStack] = useState(30000);
  const [monthlyManpower, setMonthlyManpower] = useState(20000);
  const [currentRtoRate, setCurrentRtoRate] = useState(27);
  const [estimatedRtoRate, setEstimatedRtoRate] = useState(13);

  const [mounted, setMounted] = useState(false);
  const [pulseGlow, setPulseGlow] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Computed values
  const ordersLostToday = Math.round(monthlyOrders * (currentRtoRate / 100));
  const ordersLostEvoc = Math.round(monthlyOrders * (estimatedRtoRate / 100));
  const fewerReturns = ordersLostToday - ordersLostEvoc;

  const monthlyRevenue = monthlyOrders * avgOrderValue;
  const rtoBleedToday = ordersLostToday * avgOrderValue;
  const totalCostToday = monthlyToolStack + monthlyManpower + rtoBleedToday;

  const evocCommission = monthlyRevenue * 0.04;
  const rtoBleedEvoc = ordersLostEvoc * avgOrderValue;
  const totalCostEvoc = evocCommission + rtoBleedEvoc;

  const monthlySavings = totalCostToday - totalCostEvoc;
  const annualImpact = monthlySavings * 12;

  // Trigger pulse effect when savings change
  useEffect(() => {
    if (!mounted) return;
    setPulseGlow(true);
    const timer = setTimeout(() => setPulseGlow(false), 400);
    return () => clearTimeout(timer);
  }, [monthlySavings, mounted]);

  // Chart Y-axis max
  const maxLostOrders = getChartMax(Math.max(ordersLostToday, ordersLostEvoc, 1));

  if (!mounted) return null;

  // Helper for dynamic slider track background
  const getSliderStyle = (val: number, min: number, max: number) => {
    const percentage = ((val - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(to right, #3758FF ${percentage}%, #1E293B ${percentage}%)`
    };
  };

  return (
    <div className={`relative overflow-hidden bg-[#030712] text-white p-5 md:p-6 ${dmSans.className} selection:bg-[#3758FF]/30 selection:text-white rounded-[16px] md:rounded-[24px]`}>
      
      {/* Subtle Animated Background Orb */}
      <motion.div 
        className="absolute w-[400px] h-[400px] bg-[#3758FF] rounded-full blur-[150px] opacity-[0.06] pointer-events-none"
        animate={{
          x: [-50, 100, -50],
          y: [-50, 50, -50],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ top: '10%', left: '15%' }}
      />

      <div className="relative z-10 w-full mx-auto">
        <div className="flex justify-between items-start mb-5">
          <div>
            {!hideHeader && (
              <Link href="/" className="inline-block mb-3 text-[#9CA3AF] hover:text-white transition-colors text-[12px]">
                ← Back to home
              </Link>
            )}
            <h3 className="text-[18px] md:text-[20px] font-bold text-white leading-tight mb-1">Evoc Labs — savings calculator</h3>
            <p className="text-[#9CA3AF] text-[12px]">Compare running your brand manually vs with Evoc Labs (4% per order)</p>
          </div>
          {!hideHeader && (
            <button className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-[#1E293B] rounded-md text-white text-[11px] hover:bg-white/5 transition-colors">
              <Share className="w-3.5 h-3.5" />
              Share Report
            </button>
          )}
        </div>

        {/* Top Info Banner */}
        <div className="bg-[#0B1426] border border-[#1E3BFF] rounded-[6px] p-2.5 flex items-center gap-2 mb-6 w-full shadow-sm">
          <Info className="w-4 h-4 text-[#3758FF] shrink-0" />
          <p className="text-[#93C5FD] text-[12px]">Evoc Labs charges 4% per order + reduces RTO through AI-powered address verification</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          
          {/* COLUMN 1: YOUR BRAND INPUTS */}
          <motion.div variants={itemVariants} className="flex flex-col h-fit">
            <h2 className="text-[#3758FF] text-[10px] uppercase tracking-widest mb-3 font-bold">Your brand inputs</h2>
            <div className="flex flex-col gap-3">
              
              {/* Monthly orders */}
              <div className="bg-transparent border-b border-[#1E293B] pb-3">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[#9CA3AF] text-[12px]">Monthly orders</span>
                  <span className="text-[14px] font-bold text-white">{monthlyOrders.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="100" max="100000" step="100"
                  value={monthlyOrders}
                  onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                  className="custom-slider"
                  style={getSliderStyle(monthlyOrders, 100, 100000)}
                />
                <div className="flex justify-between text-[#64748B] text-[10px] mt-1.5">
                  <span>100</span>
                  <span>100,000</span>
                </div>
              </div>

              {/* Avg. order value */}
              <div className="bg-transparent border-b border-[#1E293B] pb-3">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[#9CA3AF] text-[12px]">Avg. order value (₹)</span>
                  <span className="text-[14px] font-bold text-white">{formatINR(avgOrderValue)}</span>
                </div>
                <input
                  type="range"
                  min="100" max="10000" step="100"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="custom-slider"
                  style={getSliderStyle(avgOrderValue, 100, 10000)}
                />
                <div className="flex justify-between text-[#64748B] text-[10px] mt-1.5">
                  <span>₹100</span>
                  <span>₹10,000</span>
                </div>
              </div>

              {/* Monthly tool stack */}
              <div className="bg-transparent border-b border-[#1E293B] pb-3">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[#9CA3AF] text-[12px]">Monthly tool stack (₹)</span>
                  <span className="text-[14px] font-bold text-white">{formatINR(monthlyToolStack)}</span>
                </div>
                <input
                  type="range"
                  min="0" max="200000" step="1000"
                  value={monthlyToolStack}
                  onChange={(e) => setMonthlyToolStack(Number(e.target.value))}
                  className="custom-slider"
                  style={getSliderStyle(monthlyToolStack, 0, 200000)}
                />
                <div className="flex justify-between text-[#64748B] text-[10px] mt-1.5">
                  <span>₹0</span>
                  <span>₹2,00,000</span>
                </div>
              </div>

              {/* Monthly manpower */}
              <div className="bg-transparent border-b border-[#1E293B] pb-3">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[#9CA3AF] text-[12px]">Monthly manpower (₹)</span>
                  <span className="text-[14px] font-bold text-white">{formatINR(monthlyManpower)}</span>
                </div>
                <input
                  type="range"
                  min="0" max="200000" step="1000"
                  value={monthlyManpower}
                  onChange={(e) => setMonthlyManpower(Number(e.target.value))}
                  className="custom-slider"
                  style={getSliderStyle(monthlyManpower, 0, 200000)}
                />
                <div className="flex justify-between text-[#64748B] text-[10px] mt-1.5">
                  <span>₹0</span>
                  <span>₹2,00,000</span>
                </div>
              </div>

              {/* Current RTO rate */}
              <div className="bg-transparent border-b border-[#1E293B] pb-3">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[#9CA3AF] text-[12px]">Current RTO rate</span>
                  <span className="text-[14px] font-bold text-white">{currentRtoRate}%</span>
                </div>
                <input
                  type="range"
                  min="25" max="80" step="1"
                  value={currentRtoRate}
                  onChange={(e) => setCurrentRtoRate(Number(e.target.value))}
                  className="custom-slider"
                  style={getSliderStyle(currentRtoRate, 25, 80)}
                />
                <div className="flex justify-between text-[#64748B] text-[10px] mt-1.5">
                  <span>25%</span>
                  <span>80%</span>
                </div>
              </div>

              {/* Estimated RTO with Evoc */}
              <div className="bg-transparent pb-1">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[#9CA3AF] text-[12px]">Estimated RTO with Evoc</span>
                  <span className="text-[14px] font-bold text-white">{estimatedRtoRate}%</span>
                </div>
                <input
                  type="range"
                  min="4" max="30" step="1"
                  value={estimatedRtoRate}
                  onChange={(e) => setEstimatedRtoRate(Number(e.target.value))}
                  className="custom-slider"
                  style={getSliderStyle(estimatedRtoRate, 4, 30)}
                />
                <div className="flex justify-between text-[#64748B] text-[10px] mt-1.5">
                  <span>4%</span>
                  <span>30%</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* COLUMN 2: MIDDLE SECTION */}
          <div className="flex flex-col gap-5">
            
            {/* RTO COMPARISON */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <h2 className="text-[#3758FF] text-[10px] uppercase tracking-widest mb-3 font-bold">RTO Comparison</h2>
              <div className="bg-[#0A101D] border border-[#1E293B] rounded-[6px] p-4 flex flex-col shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:border-[#3758FF]/50 hover:shadow-lg">
                <div className="flex justify-between items-start mb-5">
                  <h3 className="text-[#E2E8F0] text-[12px]">Orders lost to RTO<br/>per month</h3>
                  <div className="bg-[#172554] text-[#3758FF] px-2 py-1 rounded-full text-[10px] font-medium flex items-center gap-1">
                    <ArrowDown className="w-2.5 h-2.5" />
                    <AnimatedCounter value={fewerReturns} /> fewer returns
                  </div>
                </div>
                
                <div className="pl-10 pr-2 pt-4">
                  <div className="relative h-[90px] flex items-end border-l border-b border-[#1E293B]">
                    {/* Y-axis labels */}
                    <div className="absolute right-[calc(100%+6px)] top-0 bottom-0 flex flex-col justify-between text-[#64748B] text-[9px] text-right">
                      <span>{maxLostOrders}</span>
                      <span>{Math.round(maxLostOrders * 0.75)}</span>
                      <span>{Math.round(maxLostOrders * 0.5)}</span>
                      <span>{Math.round(maxLostOrders * 0.25)}</span>
                      <span>0</span>
                    </div>
                    
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                      <div className="w-full h-px bg-[#1E293B]/40"></div>
                      <div className="w-full h-px bg-[#1E293B]/40"></div>
                      <div className="w-full h-px bg-[#1E293B]/40"></div>
                      <div className="w-full h-px bg-[#1E293B]/40"></div>
                      <div className="w-full h-px bg-[#1E293B]/40"></div>
                    </div>

                    {/* Bars */}
                    <div className="relative z-10 flex justify-around w-full h-full items-end">
                      {/* Left Bar */}
                      <div className="flex flex-col justify-end items-center w-[35%] max-w-[40px] h-full">
                        <span className="text-white text-[10px] font-bold mb-1"><AnimatedCounter value={ordersLostToday} /></span>
                        <div 
                          className="w-full bg-[#3758FF] rounded-t-sm transition-all duration-300 ease-in-out"
                          style={{ height: `${(ordersLostToday / maxLostOrders) * 100}%`, minHeight: '3px' }}
                        ></div>
                      </div>
                      {/* Right Bar */}
                      <div className="flex flex-col justify-end items-center w-[35%] max-w-[40px] h-full">
                        <span className="text-white text-[10px] font-bold mb-1"><AnimatedCounter value={ordersLostEvoc} /></span>
                        <div 
                          className="w-full bg-[#1E3BFF] rounded-t-sm transition-all duration-300 ease-in-out"
                          style={{ height: `${(ordersLostEvoc / maxLostOrders) * 100}%`, minHeight: '3px' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* X-axis labels */}
                  <div className="flex justify-around mt-2 text-[#9CA3AF] text-[10px]">
                    <span>Without Evoc</span>
                    <span>With Evoc</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* COST BREAKDOWN */}
            <motion.div variants={itemVariants} className="flex flex-col h-full">
              <h2 className="text-[#3758FF] text-[10px] uppercase tracking-widest mb-3 font-bold">Cost Breakdown</h2>
              <div className="bg-[#0A101D] border border-[#1E293B] rounded-[6px] p-4 flex flex-col flex-1 shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:border-[#3758FF]/50 hover:shadow-lg">
                <div className="space-y-0 text-[12px]">
                  <div className="flex justify-between items-center py-2.5 border-b border-[#1E293B]">
                    <span className="text-[#9CA3AF]">Monthly revenue (gross)</span>
                    <span className="text-white font-semibold"><AnimatedCounter value={monthlyRevenue} isCurrency /></span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-[#1E293B]">
                    <span className="text-[#9CA3AF]">Today: tools + manpower + RTO</span>
                    <span className="text-[#EF4444] font-semibold">-<AnimatedCounter value={totalCostToday} isCurrency /></span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-[#1E293B]">
                    <span className="text-[#9CA3AF]">With Evoc: 4% comm. + low RTO</span>
                    <span className="text-[#EF4444] font-semibold">-<AnimatedCounter value={totalCostEvoc} isCurrency /></span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-[#1E293B]">
                    <span className="text-[#3758FF] font-bold">Monthly savings</span>
                    <div 
                      className={`px-1.5 py-0.5 rounded font-bold transition-all duration-300 ${
                        pulseGlow 
                          ? 'bg-[#059669] text-white shadow-[0_0_15px_rgba(52,211,153,0.5)] scale-105' 
                          : 'bg-[#064E3B] text-[#4ADE80] scale-100'
                      }`}
                    >
                      <AnimatedCounter value={monthlySavings} isCurrency />
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2.5">
                    <span className="text-white font-medium">Annual impact</span>
                    <span className="text-white text-[13px] font-bold"><AnimatedCounter value={annualImpact} isCurrency /></span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* COLUMN 3: KEY IMPACT */}
          <motion.div variants={itemVariants} className="flex flex-col h-fit">
            <h2 className="text-[#3758FF] text-[10px] uppercase tracking-widest mb-3 font-bold">Key Impact</h2>
            <div className="bg-[#0A101D] border border-[#1E293B] rounded-[6px] p-4 shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:border-[#3758FF]/50 hover:shadow-lg">
              <div className="space-y-5">
                {/* Stat 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-[30px] h-[30px] rounded-full bg-[#172554] flex items-center justify-center shrink-0">
                     <Briefcase className="w-3.5 h-3.5 text-[#60A5FA]" />
                  </div>
                  <div>
                    <div className="text-[#3758FF] font-bold text-[15px] leading-none mb-1">4%</div>
                    <div className="text-[#9CA3AF] text-[10px] leading-tight">Evoc Labs charge per order</div>
                  </div>
                </div>
                
                {/* Stat 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-[30px] h-[30px] rounded-full bg-[#172554] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#60A5FA]" />
                  </div>
                  <div>
                    <div className="text-[#3758FF] font-bold text-[15px] leading-none mb-1">{currentRtoRate - estimatedRtoRate}%</div>
                    <div className="text-[#9CA3AF] text-[10px] leading-tight">Reduction in RTO (est.)</div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-[30px] h-[30px] rounded-full bg-[#172554] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-3.5 h-3.5 text-[#60A5FA]" />
                  </div>
                  <div>
                    <div className="text-[#3758FF] font-bold text-[15px] leading-none mb-1"><AnimatedCounter value={fewerReturns} /></div>
                    <div className="text-[#9CA3AF] text-[10px] leading-tight">Fewer returns per month</div>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="flex items-center gap-3">
                  <div className="w-[30px] h-[30px] rounded-full bg-[#172554] flex items-center justify-center shrink-0">
                    <CircleDollarSign className="w-3.5 h-3.5 text-[#60A5FA]" />
                  </div>
                  <div>
                    <div className="text-[#3758FF] font-bold text-[15px] leading-none mb-1"><AnimatedCounter value={monthlySavings} isCurrency /></div>
                    <div className="text-[#9CA3AF] text-[10px] leading-tight">Monthly savings (est.)</div>
                  </div>
                </div>

                {/* Stat 5 */}
                <div className="flex items-center gap-3">
                  <div className="w-[30px] h-[30px] rounded-full bg-[#172554] flex items-center justify-center shrink-0">
                    <BarChart3 className="w-3.5 h-3.5 text-[#60A5FA]" />
                  </div>
                  <div>
                    <div className="text-[#3758FF] font-bold text-[15px] leading-none mb-1"><AnimatedCounter value={annualImpact} isCurrency /></div>
                    <div className="text-[#9CA3AF] text-[10px] leading-tight">Annual impact (est.)</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM SUCCESS / CTA BANNER (Optional, matches screenshot subtle check) */}
        {!hideHeader && (
          <div className="mt-6 pt-4 border-t border-[#1E293B] flex items-center gap-2 text-[#9CA3AF] text-[11px]">
             <CheckCircle2 className="w-3.5 h-3.5 text-[#3758FF]" />
             <span>Adjust the sliders above to see your customized impact estimation in real-time.</span>
          </div>
        )}

        <style jsx>{`
          .custom-slider {
            -webkit-appearance: none;
            width: 100%;
            height: 3px;
            border-radius: 2px;
            outline: none;
            /* background is applied inline */
          }
          .custom-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: white;
            border: 2px solid #3758FF;
            cursor: pointer;
            box-shadow: 0 0 6px rgba(55, 88, 255, 0.4);
            transition: transform 0.15s ease, box-shadow 0.15s ease;
          }
          .custom-slider::-webkit-slider-thumb:hover {
            transform: scale(1.2);
            box-shadow: 0 0 8px rgba(55, 88, 255, 0.6);
          }
          .custom-slider:active::-webkit-slider-thumb {
            transform: scale(1.35);
            box-shadow: 0 0 14px 2px rgba(55, 88, 255, 0.9);
            border-width: 3px;
          }

          .custom-slider::-moz-range-thumb {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: white;
            border: 2px solid #3758FF;
            cursor: pointer;
            box-shadow: 0 0 6px rgba(55, 88, 255, 0.4);
            transition: transform 0.15s ease, box-shadow 0.15s ease;
          }
          .custom-slider::-moz-range-thumb:hover {
            transform: scale(1.2);
            box-shadow: 0 0 8px rgba(55, 88, 255, 0.6);
          }
          .custom-slider:active::-moz-range-thumb {
            transform: scale(1.35);
            box-shadow: 0 0 14px 2px rgba(55, 88, 255, 0.9);
            border-width: 3px;
          }
        `}</style>
      </div>
    </div>
  );
}
