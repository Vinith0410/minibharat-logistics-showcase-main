import React from 'react';
import indiaMapDefault from '@/assets/india-map-default.png';

interface IndiaMapProps {
  hoveredRegion: string | null;
  onRegionHover: (region: string | null) => void;
  networkData: Array<{
    region: string;
    centers: string;
    color: string;
    bgColor: string;
    borderColor: string;
    mapColor: string;
  }>;
}

const IndiaMap: React.FC<IndiaMapProps> = ({ hoveredRegion, onRegionHover, networkData }) => {
  return (
    <div className="relative bg-white p-4 rounded-3xl shadow-2xl animate-fade-in hover-scale">
      <div className="w-full h-96 flex items-center justify-center">
        <img 
          src={indiaMapDefault} 
          alt="India Network Map" 
          className="w-full h-full object-contain transition-all duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default IndiaMap;
