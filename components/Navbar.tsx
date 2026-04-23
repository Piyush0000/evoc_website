'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-5">
      {/* Logo mark */}
      <Link href="/" aria-label="Home" className="block hover:opacity-80 transition-opacity">
        <img
          src="/logo.png"
          alt="Logo"
          className="object-contain brightness-[3] grayscale"
          style={{ width: '64px', height: '64px' }}
        />
      </Link>

      {/* Pill nav container */}
      <div
        className="hidden md:flex items-center gap-0.5"
        style={{
          background: 'rgba(12, 12, 20, 0.65)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '14px',
          padding: '5px 6px',
          boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
        }}
      >
        {['Home', 'Offering', 'About', 'Pricing', 'Blog'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-5 py-[7px] text-[13.5px] font-medium text-white/65 hover:text-white transition-colors rounded-full hover:bg-white/5"
          >
            {item}
          </Link>
        ))}

        <Link
          href="#login"
          className="ml-1 px-6 py-[7px] bg-[#1E3BFF] hover:bg-[#2A47FF] text-white text-[13.5px] font-semibold rounded-[12px] transition-all"
          style={{ boxShadow: '0 0 18px rgba(30,59,255,0.35)' }}
        >
          Log in
        </Link>
      </div>

      {/* Mobile fallback */}
      <button className="md:hidden text-white/70 p-2" aria-label="Menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}
