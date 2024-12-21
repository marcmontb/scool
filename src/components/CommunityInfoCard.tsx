import React from 'react';
import { Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CommunityInfoCardProps {
  fixed?: boolean;
}

export function CommunityInfoCard({ fixed = false }: CommunityInfoCardProps) {
  const navigate = useNavigate();
  const baseClasses = "w-80 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden";
  const positionClasses = fixed ? "fixed top-24" : "";

  const handleJoin = () => {
    navigate('/dashboard');
  };

  return (
    <div className={`${baseClasses} ${positionClasses}`}>
      {/* Logo Section */}
      <div className="bg-gray-900 p-6 flex justify-center">
        <svg
          viewBox="0 0 24 24"
          className="w-16 h-16 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="font-bold text-gray-900 mb-1">UDNIA</h2>
        <p className="text-sm text-gray-500 mb-1">scool.com/udnia-6098</p>
        <p className="text-sm text-gray-900 mb-4">
          Bienvenidos a la ÚNICA universidad Digital del mundo que les enseña a hacer dinero con IA
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div>
            <div className="font-semibold text-gray-900">1.8k</div>
            <div className="text-xs text-gray-500">Members</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">32</div>
            <div className="text-xs text-gray-500">Online</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">3</div>
            <div className="text-xs text-gray-500">Admins</div>
          </div>
        </div>

        {/* Join Button */}
        <button 
          onClick={handleJoin}
          className="w-full bg-[#FFD233] text-gray-900 rounded-lg px-6 py-3 font-medium hover:bg-[#FFD233]/90 transition-colors"
        >
          JOIN $49/month
        </button>

        {/* Powered by */}
        <div className="mt-4 text-center text-xs text-gray-500">
          powered by <span className="font-semibold">scool</span>
        </div>
      </div>
    </div>
  );
}