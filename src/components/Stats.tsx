'use client';

import { useState, useEffect } from 'react';

interface StatsData {
  totalPosts: number;
  postsToday: number;
  averageLikes: number;
  averageComments: number;
  mostActiveUser: string;
}

export default function Stats() {
  const [stats, setStats] = useState<StatsData>({
    totalPosts: 0,
    postsToday: 0,
    averageLikes: 0,
    averageComments: 0,
    mostActiveUser: '',
  });

  // In a real application, this would fetch data from an API
  useEffect(() => {
    // Sample data for demonstration
    const sampleStats: StatsData = {
      totalPosts: 150,
      postsToday: 12,
      averageLikes: 25,
      averageComments: 5,
      mostActiveUser: 'John Doe',
    };
    setStats(sampleStats);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Social Media Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Total Posts</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.totalPosts}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Posts Today</h3>
          <p className="text-3xl font-bold text-green-600">{stats.postsToday}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Average Likes</h3>
          <p className="text-3xl font-bold text-red-600">{stats.averageLikes}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Average Comments</h3>
          <p className="text-3xl font-bold text-purple-600">{stats.averageComments}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Most Active User</h3>
          <p className="text-3xl font-bold text-indigo-600">{stats.mostActiveUser}</p>
        </div>
      </div>
    </div>
  );
} 