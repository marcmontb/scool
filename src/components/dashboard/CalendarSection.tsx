import React from 'react';
import { Calendar, Clock, Users, Video } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "2 Hour Zoom Call With Hamza",
    date: "2024-03-15",
    time: "14:00",
    duration: "2h",
    attendees: 156,
    type: "zoom"
  },
  {
    id: 2,
    title: "Weekly Mastermind Session",
    date: "2024-03-17",
    time: "18:00",
    duration: "1h",
    attendees: 89,
    type: "live"
  }
];

export function CalendarSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Upcoming Events</h2>
      </div>
      <div className="divide-y">
        {events.map((event) => (
          <div key={event.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-start gap-4">
              <div className="flex-none w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{event.time} • {event.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Video className="w-4 h-4" />
                    <span>{event.type}</span>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}