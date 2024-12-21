import React from 'react';
import { Trophy, TrendingUp, MessageSquare, ThumbsUp } from 'lucide-react';

const leaderboard = [
  {
    id: 1,
    name: "Colson R",
    points: 1118,
    posts: 45,
    likes: 892,
    comments: 234,
    avatar: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80"
  },
  {
    id: 2,
    name: "Latif Scool",
    points: 1107,
    posts: 38,
    likes: 756,
    comments: 189,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80"
  }
];

export function LeaderboardSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {['This Week', 'This Month', 'All Time', 'My Stats'].map((period) => (
          <div key={period} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-4">{period}</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <div>
                  <div className="font-semibold">1,234</div>
                  <div className="text-sm text-gray-500">Points</div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-green-500">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">12%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Top Contributors</h2>
        </div>
        {leaderboard.map((user, index) => (
          <div key={user.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 border-b last:border-b-0">
            <div className="flex-none w-8 text-center font-semibold text-gray-500">
              #{index + 1}
            </div>
            <img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <div className="font-semibold">{user.name}</div>
              <div className="text-sm text-gray-500">{user.points} points</div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                <span>{user.posts}</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" />
                <span>{user.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}