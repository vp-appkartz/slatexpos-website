import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <Loader2 className="h-10 w-10 animate-spin text-slate-800" />
    </div>
  );
};

export default LoadingSpinner;
