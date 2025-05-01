'use client';

import { useState } from 'react';

export default function CreatePost({setPosts, posts}: {setPosts: (posts: any[]) => void, posts: any[]}) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement post creation logic
    console.log('Creating post:', content);
    setContent('');
    setPosts([{
      id: posts.length + 1,
      content: content,
      author: {
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150?img=1',
      },
      timestamp: "just now",
      likes: 0,
      comments: 0,
    }, ...posts]);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
} 