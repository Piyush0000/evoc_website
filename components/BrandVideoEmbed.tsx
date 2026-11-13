'use client';

import React, { useState } from 'react';
import { Loader2, Volume2 } from 'lucide-react';

interface BrandVideoEmbedProps {
  className?: string;
  autoplay?: boolean;
  title?: string;
}

export default function BrandVideoEmbed({
  className = '',
  autoplay = true,
  title = 'Evoke Labs - Brand Story & Walkthrough',
}: BrandVideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Modern browsers require mute=1 for programmatic autoplay to trigger without user gesture.
  // autoplay=1&mute=1 ensures instant playback across Chrome, Safari, Edge and Mobile.
  const embedUrl = `https://www.youtube.com/embed/Kve3pRIthVs?si=s4ecjWN389TR4Arv&rel=0&modestbranding=1&controls=1&enablejsapi=1${
    autoplay ? '&autoplay=1&mute=1' : ''
  }`;

  return (
    <div
      className={`relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0c0d12] border border-white/15 shadow-[0_15px_50px_rgba(24,62,235,0.25)] group ${className}`}
    >
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0f] text-white/40 gap-3 z-0 animate-pulse">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#183EEB]">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold text-white/30">
            Loading Brand Briefing...
          </span>
        </div>
      )}

      {/* YouTube Iframe with autoplay permissions */}
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full relative z-10 border-0 transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Autoplay Audio Hint Badge */}
      {isLoaded && autoplay && (
        <div className="absolute bottom-3 left-3 z-20 pointer-events-none transition-opacity duration-700 opacity-90 group-hover:opacity-100">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] text-white/70 font-medium shadow-lg">
            <Volume2 className="w-3 h-3 text-[#6085ff]" />
            <span>Tap video to unmute</span>
          </div>
        </div>
      )}
    </div>
  );
}
