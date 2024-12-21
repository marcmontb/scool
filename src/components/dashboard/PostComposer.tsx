import React from 'react';

export function PostComposer() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <div className="flex gap-3">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="Write something"
          className="flex-1 bg-gray-100 rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}