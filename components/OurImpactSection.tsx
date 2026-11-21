'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const impactData = [
  {
    title: "₹10Cr+",
    subtitle: "in annual sales across sellers",
    image: "/images/impact/annual_sales_chart.webp",
    alt: "Annual Sales Dashboard"
  },
  {
    title: "20+",
    subtitle: "sellers are doing 1 Crore+ sales annually",
    image: "/images/impact/seller_tiers_chart.webp",
    alt: "Seller Tiers"
  },
  {
    title: "~ 65%",
    subtitle: "of our sellers have had a YoY GMV growth >= 100%",
    image: "/images/impact/yoy_growth_chart.webp",
    alt: "YoY GMV Growth"
  },
  {
    title: "> 20Lakhs+",
    subtitle: "customers visit our sellers on a daily basis",
    image: "/images/impact/india_map_customers.webp",
    alt: "Daily Customer Visits"
  },
  {
    title: "> 90%",
    subtitle: "of our sellers are selling D2C for the first time",
    image: "/images/impact/d2c_seller_pie.webp",
    alt: "B2C Seller Mix"
  },
  {
    title: "> 75%",
    subtitle: "of our sellers are from tier-2 & tier-3 cities",
    image: "/images/impact/tier2_3_map.webp",
    alt: "Tier-2 & Tier-3 Presence"
  }
];

const ImpactCard = ({ data, delay }: { data: typeof impactData[0], delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    whileHover={{
      y: -6,
      scale: 1.02,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
    }}
    className="relative group overflow-hidden rounded-[18px] bg-[#0b0c10] border border-white/5 flex flex-col cursor-default shadow-md"
  >
    {/* Floating Animation Loop (Subtle) */}
    <motion.div
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay * 2
      }}
      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#183EEB]/10 to-transparent" />
    </motion.div>

    {/* Refined Bottom Glow Gradient */}
    <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#183EEB]/10 via-transparent to-transparent pointer-events-none group-hover:from-[#183EEB]/20 transition-all duration-700 z-0" />

    {/* Image Section */}
    <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-white/5 z-10 p-2.5 sm:p-3">
      <div className="relative w-full h-full rounded-[12px] overflow-hidden bg-black/50">
        <Image
          src={data.image}
          alt={data.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
          loading="lazy"
        />
      </div>
    </div>

    {/* Text Content */}
    <div className="relative z-10 p-4 sm:p-5 pt-2 sm:pt-3 flex flex-col flex-grow justify-center">
      <motion.h3
        className="font-bold text-white mb-1.5 tracking-tight"
        style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}
      >
        {data.title}
      </motion.h3>
      <p className="text-[#9CA3AF] font-medium leading-snug" style={{ fontSize: 'clamp(12px, 1.2vw, 14px)' }}>
        {data.subtitle}
      </p>
    </div>
  </motion.div>
);

export default function OurImpactSection() {
  return (
    <section className="bg-black py-12 md:py-16 px-4 md:px-6 relative z-30">
      <div className="max-w-[1040px] mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white mb-3 tracking-tighter font-medium"
            style={{
              fontSize: 'clamp(32px, 4vw, 50px)'
            }}
          >
            Our <span className="text-[#183EEB]">Impact</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#9CA3AF] text-sm md:text-base max-w-xl mx-auto"
          >
            Empowering sellers to achieve unprecedented growth and scale across the nation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {impactData.map((data, index) => (
            <ImpactCard key={index} data={data} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
