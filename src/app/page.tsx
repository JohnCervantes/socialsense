'use client';

import { useState } from 'react';
import Post from '@/components/Post';
import CreatePost from '@/components/CreatePost';

export default function Home() {
  const [posts, setPosts] = useState([
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
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/150?img=2',
      },
      content: 'Beautiful day for a hike! 🏞️',
      timestamp: '4 hours ago',
      likes: 12,
      comments: 3,
    },
  ]);

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <CreatePost setPosts={setPosts} posts={posts}/>
      <div className="mt-6 space-y-6">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
