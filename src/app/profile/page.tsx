'use client';

import { useState } from 'react';
import Post from '@/components/Post';

export default function Profile() {
  const [user] = useState({
    name: 'John Doe',
    username: '@johndoe',
    bio: 'Software Developer | Tech Enthusiast | Coffee Lover',
    followers: 1234,
    following: 567,
    posts: 42,
  });

  const [posts] = useState([
    {
      id: 1,
      author: {
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150?img=1',
      },
      content: 'Just finished my new project! 🎉',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 5,
    },
    {
      id: 2,
      author: {
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150?img=1',
      },
      content: 'Beautiful day for a hike! 🏞️',
      timestamp: '4 hours ago',
      likes: 12,
      comments: 3,
    },
  ]);

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-[#00ff9d] to-[#00b8ff]"></div>
        <div className="px-6 pb-6">
          <div className="flex items-end -mt-16">
            <div className="h-32 w-32 rounded-full border-4 border-[#1a1a1a] bg-[#2a2a2a] overflow-hidden">
              <img
                src="https://i.pravatar.cc/150?img=1"
                alt={user.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="ml-6">
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-gray-400">{user.username}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-300">{user.bio}</p>
            <div className="flex space-x-6 mt-4">
              <div>
                <span className="text-white font-semibold">{user.posts}</span>
                <span className="text-gray-400 ml-2">Posts</span>
              </div>
              <div>
                <span className="text-white font-semibold">{user.followers}</span>
                <span className="text-gray-400 ml-2">Followers</span>
              </div>
              <div>
                <span className="text-white font-semibold">{user.following}</span>
                <span className="text-gray-400 ml-2">Following</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-white mb-4">Posts</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
} 