'use client';

import { useState, useEffect } from 'react';
import DomeGallery from '@/components/DomeGallery';
import InteractionFlow from '@/components/InteractionFlow';

// --- Love Timer Component ---
const LoveTimer = () => {
    // Start date: March 14, 2023 at midnight GMT+7
    const startDate = new Date('2023-03-14T00:00:00+07:00');
    
    const calculateTime = () => {
        // Get current time in GMT+7
        const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
        const start = new Date(startDate.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
        
        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();
        let days = now.getDate() - start.getDate();
        let hours = now.getHours() - start.getHours();
        let minutes = now.getMinutes() - start.getMinutes();
        let seconds = now.getSeconds() - start.getSeconds();
        
        // Adjust for negative values
        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }
        if (hours < 0) {
            hours += 24;
            days--;
        }
        if (days < 0) {
            // Borrow days from previous month
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
            months--;
        }
        if (months < 0) {
            months += 12;
            years--;
        }
        
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
