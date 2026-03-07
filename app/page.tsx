'use client';

import { useState, useEffect } from 'react';
import DomeGallery from '@/components/DomeGallery';
import InteractionFlow from '@/components/InteractionFlow';

// --- Love Timer Component ---
const LoveTimer = () => {
    const startDate = new Date('2023-03-14T00:00:00');
    
    const calculateTime = () => {
        const now = new Date();
        const diff = now.getTime() - startDate.getTime();
        
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        return { years, months, days, hours, minutes, seconds };
    };

    const [time, setTime] = useState(calculateTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(calculateTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const pad = (num: number) => num.toString().padStart(2, '0');

    return (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                <div className="flex items-center gap-2 text-white font-mono text-sm sm:text-lg whitespace-nowrap">
                    <span className="text-red-400 font-bold">{time.years} Years</span>
                    <span className="text-white/50">|</span>
                    <span>{time.months} Months</span>
                    <span className="text-white/50">|</span>
                    <span>{time.days} days</span>
                    <span className="text-white/50">|</span>
                    <span>{pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}</span>
                </div>
            </div>
        </div>
    );
};

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

  const userImages = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg',
    '/8.jpg',
    '/9.jpg',
    '/10.jpg',
    '/VID1.gif',
    '/VID5.gif',
    '/11.jpg',
    '/12.jpg',
    '/13.jpg',
    '/14.jpg',
    '/15.jpg',
    '/16.jpg',
    '/17.jpg',
    '/18.jpg',
    '/19.jpg',
    '/20.jpg',
    '/VID2.gif',
    '/VID6.gif',
    '/21.jpg',
    '/22.jpg',
    '/23.jpg',
    '/24.jpg',
    '/25.jpg',
    '/26.jpg',
    '/27.jpg',
    '/28.jpg',
    '/29.jpg',
    '/30.jpg',
    '/VID3.gif',
    '/VID7.gif',
    '/31.jpg',
    '/32.jpg',
    '/33.jpg',
    '/34.jpg',
    '/35.jpg',
    '/36.jpg',
    '/37.jpg',
    '/38.jpg',
    '/39.jpg',
    '/40.jpg',
    '/VID4.gif',
    '/VID8.gif',
    '/41.jpg',
    '/42.jpg',
    '/43.jpg',
    '/44.jpg',
    '/VID9.gif',
    '/VID10.gif',
  ];

  return (
    <main className="w-screen h-screen bg-[#060010]">
      {!showGallery ? (
        <InteractionFlow onFlowComplete={() => setShowGallery(true)} />
      ) : (
        <>
          <LoveTimer />
          <audio src="/lovely.mp3" autoPlay loop className="hidden" />
          <DomeGallery
            images={userImages}
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
            autoRotationSpeed={0.1}
          />
        </>
      )}
    </main>
  );
}
