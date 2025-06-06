import { Link } from 'react-router-dom';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { modulesList } from '@/lib/modules';

interface ModuleNavProps {
  currentId: string;
}

export default function ModuleNav({ currentId }: ModuleNavProps) {
  const index = modulesList.findIndex((m) => m.id === currentId);
  if (index === -1) return null;

  const prevModule = modulesList[(index - 1 + modulesList.length) % modulesList.length];
  const nextModule = modulesList[(index + 1) % modulesList.length];

  return (
    <div className="sticky top-[56px] bg-white py-4 z-20 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to={prevModule.path}
          className="flex items-center space-x-2 font-poppins font-semibold text-gray-700"
        >
          <ChevronsLeft size={32} strokeWidth={3} />
          <span>{prevModule.title}</span>
        </Link>
        <Link
          to={nextModule.path}
          className="flex items-center space-x-2 font-poppins font-semibold text-gray-700"
        >
          <span>{nextModule.title}</span>
          <ChevronsRight size={32} strokeWidth={3} />
        </Link>
      </div>
    </div>
  );
}
