'use client';

export default function Stats() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-white mb-6">Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1a1a1a] rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Engagement</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400">Total Posts</p>
              <p className="text-3xl font-bold text-[#00ff9d]">42</p>
            </div>
            <div>
              <p className="text-gray-400">Total Likes</p>
              <p className="text-3xl font-bold text-[#00ff9d]">1,234</p>
            </div>
            <div>
              <p className="text-gray-400">Total Comments</p>
              <p className="text-3xl font-bold text-[#00ff9d]">567</p>
            </div>
          </div>
        </div>
        <div className="bg-[#1a1a1a] rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Growth</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400">Followers</p>
              <p className="text-3xl font-bold text-[#00ff9d]">1,234</p>
            </div>
            <div>
              <p className="text-gray-400">Following</p>
              <p className="text-3xl font-bold text-[#00ff9d]">567</p>
            </div>
            <div>
              <p className="text-gray-400">Engagement Rate</p>
              <p className="text-3xl font-bold text-[#00ff9d]">12.5%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 