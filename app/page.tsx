'use client';

import { useState } from 'react';
import DomeGallery from '@/components/DomeGallery';
import InteractionFlow from '@/components/InteractionFlow';

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
    '/41.jpg',
    '/42.jpg',
    '/43.jpg',
    '/44.jpg',
    '/VID1.gif',
    '/VID2.gif',
    '/VID3.gif',
    '/VID4.gif',
    '/VID5.gif',
    '/VID6.gif',
    '/VID7.gif',
    '/VID8.gif',
    '/VID9.gif',
    '/VID10.gif',
  ];

  return (
    <main className="w-screen h-screen bg-[#060010]">
      {!showGallery ? (
        <InteractionFlow onFlowComplete={() => setShowGallery(true)} />
      ) : (
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
      )}
    </main>
  );
}
