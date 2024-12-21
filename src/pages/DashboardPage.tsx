import React, { useState } from 'react';
import { CommunityHeader } from '../components/dashboard/CommunityHeader';
import { NavigationTabs } from '../components/dashboard/NavigationTabs';
import { PostComposer } from '../components/dashboard/PostComposer';
import { PostFilters } from '../components/dashboard/PostFilters';
import { PostList } from '../components/dashboard/PostList';
import { ClassroomSection } from '../components/dashboard/ClassroomSection';
import { CalendarSection } from '../components/dashboard/CalendarSection';
import { MembersSection } from '../components/dashboard/MembersSection';
import { LeaderboardSection } from '../components/dashboard/LeaderboardSection';
import { CommunityInfoCard } from '../components/CommunityInfoCard';

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState('community');

  const renderContent = () => {
    switch (activeTab) {
      case 'community':
        return (
          <>
            <PostComposer />
            <PostFilters />
            <PostList />
          </>
        );
      case 'classroom':
        return <ClassroomSection />;
      case 'calendar':
        return <CalendarSection />;
      case 'members':
        return <MembersSection />;
      case 'leaderboards':
        return <LeaderboardSection />;
      case 'about':
        return <div>About content coming soon...</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CommunityHeader />
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>

          {/* Sidebar */}
          <div className="w-80 flex-none">
            <div className="sticky top-8">
              <CommunityInfoCard fixed />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}