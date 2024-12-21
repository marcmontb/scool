import React from 'react';
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';

export function PostList() {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Hamza Ahmed</span>
                <span className="text-yellow-500">👑</span>
                <span className="text-sm text-gray-500">5d ago in General</span>
              </div>
              <h2 className="font-semibold mt-1">The 17 Laws of Masculinity</h2>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <p className="text-gray-600 mb-4">
          I made a 25 minute video for you guys. Please do me a favour and do this on the
          video: 1. Watch the video all the way to the end 2. Write 3 comments to boost the
          engagement
        </p>

        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 hover:text-gray-900">
              <ThumbsUp className="w-5 h-5" />
              <span>234</span>
            </button>
            <button className="flex items-center gap-2 hover:text-gray-900">
              <MessageSquare className="w-5 h-5" />
              <span>82</span>
            </button>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}