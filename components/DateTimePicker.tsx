'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';

interface DateTimePickerProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Allowed time slots strictly from 11:00 AM to 07:00 PM
export const ALLOWED_TIME_SLOTS = [
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
  '05:00 PM',
  '05:30 PM',
  '06:00 PM',
  '06:30 PM',
  '07:00 PM',
];

// Helper to format date into readable string
export const formatSelectedDateTime = (date: Date, time: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return `${formattedDate} at ${time}`;
};

export default function DateTimePicker({ value, onChange, disabled }: DateTimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize date: default to today (or next Monday if today is Sunday)
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const today = new Date();
    if (today.getDay() === 0) {
      // If Sunday, default to next Monday
      const mon = new Date(today);
      mon.setDate(today.getDate() + 1);
      return mon;
    }
    return today;
  });

  // Calendar month/year navigation state
  const [viewYear, setViewYear] = useState<number>(() => selectedDate.getFullYear());
  const [viewMonth, setViewMonth] = useState<number>(() => selectedDate.getMonth());

  // Selected time slot (defaults to 11:00 AM)
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');

  // Sync initial state to parent form if empty
  useEffect(() => {
    if (!value) {
      const initialStr = formatSelectedDateTime(selectedDate, selectedTime);
      onChange(initialStr);
    }
  }, []);

  // Update parent when selectedDate or selectedTime changes
  const updateValue = (newDate: Date, newTime: string) => {
    setSelectedDate(newDate);
    setSelectedTime(newTime);
    onChange(formatSelectedDateTime(newDate, newTime));
  };

  // Close popover on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Calendar calculations
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isCurrentMonth = today.getFullYear() === viewYear && today.getMonth() === viewMonth;

  const handlePrevMonth = () => {
    if (isCurrentMonth) return; // Prevent going before current month
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((prev) => prev - 1);
    } else {
      setViewMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((prev) => prev + 1);
    } else {
      setViewMonth((prev) => prev + 1);
    }
  };

  // Days in month
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  
  // First day of month (Monday = 0, ..., Sunday = 6)
  const firstDayIndex = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7;

  // Days array for calendar grid
  const days = [];
  for (let i = 0; i < firstDayIndex; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="space-y-1.5 relative" ref={containerRef}>
      <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1 flex items-center justify-between">
        <span>Select a preferable time and date</span>
        <span className="text-[9px] text-[#183EEB] font-semibold tracking-normal normal-case">
          Mon – Sat &bull; 11 AM – 7 PM
        </span>
      </label>

      {/* Input Trigger Button */}
      <div 
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`relative group cursor-pointer w-full bg-white/[0.03] border ${
          isOpen ? 'border-[#183EEB]/60 bg-white/[0.05]' : 'border-white/10'
        } rounded-xl py-3.5 pl-11 pr-10 hover:border-white/20 transition-all flex items-center justify-between text-sm ${
          disabled ? 'opacity-60 cursor-not-allowed' : ''
        }`}
      >
        <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20 group-hover:text-[#183EEB] transition-colors" />
        
        <span className={value ? 'text-white font-medium' : 'text-white/40'}>
          {value || 'Select date and time'}
        </span>

        <Clock className="w-4 h-4 text-white/20 group-hover:text-[#183EEB] transition-colors shrink-0" />
      </div>

      {/* Popover Calendar & Clock Picker */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute left-0 right-0 top-full mt-2 z-50 bg-[#0A0A0A] border border-white/10 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl max-h-[85vh] overflow-y-auto"
          >
            {/* Header: Month & Year Navigator */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-[#183EEB]" />
                <span className="font-bold text-sm tracking-tight text-white">
                  {MONTH_NAMES[viewMonth]} {viewYear}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevMonth}
                  disabled={isCurrentMonth}
                  className="p-1.5 rounded-lg bg-white/[0.04] border border-white/5 hover:bg-white/10 text-white/60 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                  title="Previous month"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextMonth}
                  className="p-1.5 rounded-lg bg-white/[0.04] border border-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
                  title="Next month"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Day Names Row */}
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {DAY_NAMES.map((name, i) => (
                <div 
                  key={name} 
                  className={`text-[11px] font-bold uppercase tracking-wider py-1 ${
                    i === 6 ? 'text-red-400/50' : 'text-white/30'
                  }`}
                  title={i === 6 ? 'Sunday (Closed)' : undefined}
                >
                  {name}
                </div>
              ))}
            </div>

            {/* Calendar Days Grid */}
            <div className="grid grid-cols-7 gap-1 mb-5">
              {days.map((day, index) => {
                if (day === null) {
                  return <div key={`empty-${index}`} className="h-8" />;
                }

                const cellDate = new Date(viewYear, viewMonth, day);
                cellDate.setHours(0, 0, 0, 0);

                const isSunday = cellDate.getDay() === 0;
                const isPast = cellDate < today;
                const isDisabled = isSunday || isPast;

                const isSelected = 
                  selectedDate.getFullYear() === cellDate.getFullYear() &&
                  selectedDate.getMonth() === cellDate.getMonth() &&
                  selectedDate.getDate() === cellDate.getDate();

                const isToday = 
                  today.getFullYear() === cellDate.getFullYear() &&
                  today.getMonth() === cellDate.getMonth() &&
                  today.getDate() === cellDate.getDate();

                return (
                  <button
                    key={`day-${day}`}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => updateValue(cellDate, selectedTime)}
                    className={`h-8 rounded-lg text-xs font-medium transition-all relative flex items-center justify-center ${
                      isSelected
                        ? 'bg-[#183EEB] text-white font-bold shadow-[0_0_15px_rgba(24,62,235,0.4)]'
                        : isDisabled
                        ? 'text-white/15 cursor-not-allowed line-through decoration-white/10'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    } ${isToday && !isSelected ? 'border border-[#183EEB]/50 text-white' : ''}`}
                    title={isSunday ? 'Sundays closed' : undefined}
                  >
                    {day}
                    {isToday && !isSelected && (
                      <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#183EEB]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Time / Clock Selector Section */}
            <div className="pt-4 border-t border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#183EEB]" />
                  <span className="text-xs font-bold text-white tracking-wide uppercase">
                    Select Time (11:00 AM – 07:00 PM)
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#183EEB] bg-[#183EEB]/10 px-2 py-0.5 rounded border border-[#183EEB]/20">
                  {selectedTime}
                </span>
              </div>

              {/* Time Slots Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5 max-h-36 overflow-y-auto pr-1">
                {ALLOWED_TIME_SLOTS.map((slot) => {
                  const isSlotSelected = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => updateValue(selectedDate, slot)}
                      className={`py-2 px-1 text-[11px] rounded-lg font-mono transition-all text-center flex items-center justify-center gap-1 ${
                        isSlotSelected
                          ? 'bg-[#183EEB] text-white font-bold shadow-[0_0_12px_rgba(24,62,235,0.4)]'
                          : 'bg-white/[0.03] border border-white/5 text-white/60 hover:text-white hover:bg-white/[0.08]'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Confirmation Footer */}
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
              <div className="text-[11px] text-white/40 truncate">
                Slot: <span className="text-white font-medium">{formatSelectedDateTime(selectedDate, selectedTime)}</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="bg-[#183EEB] hover:bg-[#183EEB]/90 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 shrink-0"
              >
                <Check className="w-3.5 h-3.5" />
                Confirm Slot
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
