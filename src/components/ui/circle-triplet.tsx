'use client';

interface CircleTripletProps {
  color: string;
}

export function CircleTriplet({ color }: CircleTripletProps) {
  return (
    <div className="relative">
      {/* Main circle */}
      <div className={`w-24 h-24 rounded-full opacity-90 ${color}`} />
      {/* Secondary circle */}
      <div 
        className={`w-20 h-20 rounded-full opacity-60 ${color} transform -mt-16 ml-8`}
      />
      {/* Tertiary circle */}
      <div 
        className={`w-16 h-16 rounded-full opacity-45 ${color} transform -mt-14 -ml-6`}
      />
    </div>
  );
} 