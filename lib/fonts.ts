import { Inter, Instrument_Serif, Playfair_Display, Bodoni_Moda } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument',
  weight: ['400'],
  style: ['normal', 'italic'],
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bodoni',
  weight: ['400'], // Bodoni Moda is variable, we'll use weight 400 and adjust via css if needed, or specify range
  style: ['normal', 'italic'],
});
