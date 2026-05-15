'use client';

import SavingsCalculator from '@/components/SavingsCalculator';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

export default function CalculatorPage() {
  return (
    <div className={`min-h-screen bg-[#030712] ${dmSans.className}`}>
      <SavingsCalculator />
    </div>
  );
}
