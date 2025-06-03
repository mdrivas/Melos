'use client';

interface CirclePairProps {
  color: string;
}

export function CirclePair({ color }: CirclePairProps) {
  return (
    <div className="relative">
      {/* Main circle */}
      <div className={`w-24 h-24 rounded-full opacity-80 ${color}`} />
      {/* Secondary circle */}
      <div 
        className={`w-20 h-20 rounded-full opacity-60 ${color} transform -mt-20 ml-14`}
      />
    </div>
  );
} 