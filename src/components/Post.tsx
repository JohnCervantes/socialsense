'use client';

import { useState } from 'react';

interface PostProps {
  id: string;
  content: string;
  author: string;
  likes: number;
  comments: number;
  timestamp: string;
}

export default function Post({ id, content, author, likes, comments, timestamp }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setCurrentLikes(isLiked ? currentLikes - 1 : currentLikes + 1);
  };

  return (
    <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-6 mb-4">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center border-2 border-[#00ff9d]">
          <span className="text-[#00ff9d] font-bold">{author.charAt(0)}</span>
        </div>
        <div className="ml-3">
          <p className="font-semibold text-[#00ff9d]">{author}</p>
          <p className="text-gray-400 text-sm">{timestamp}</p>
        </div>
      </div>
      
      <p className="text-gray-200 mb-4">{content}</p>
      
      <div className="flex items-center space-x-4 text-gray-400">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-1 transition-colors ${
            isLiked ? 'text-[#00ff9d]' : 'hover:text-[#00ff9d]'
          }`}
        >
          <svg
            className="w-5 h-5"
            fill={isLiked ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span>{currentLikes}</span>
        </button>
        
        <button className="flex items-center space-x-1 hover:text-[#00ff9d] transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span>{comments}</span>
        </button>
      </div>
    </div>
  );
} 