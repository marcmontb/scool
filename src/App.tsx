import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CommunityPage } from './pages/CommunityPage';
import { DashboardPage } from './pages/DashboardPage';
import { AuthPage } from './pages/Auth';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}