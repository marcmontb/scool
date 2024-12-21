import React from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';

const members = [
  {
    id: 1,
    name: "Colson R",
    role: "Admin",
    location: "New York, USA",
    joinDate: "Mar 2024",
    avatar: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80"
  },
  {
    id: 2,
    name: "Latif Skool",
    role: "Moderator",
    location: "London, UK",
    joinDate: "Feb 2024",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80"
  }
];

export function MembersSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="search"
            placeholder="Search members..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Invite Members
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {members.map((member) => (
          <div key={member.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 border-b last:border-b-0">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{member.name}</span>
                <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                  {member.role}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {member.joinDate}</span>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}