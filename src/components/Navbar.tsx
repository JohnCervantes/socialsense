'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#1a1a1a] border-b border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-[#00ff9d]">
              SocialSense
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/' ? 'bg-[#00ff9d] text-[#0a0a0a]' : 'text-gray-300 hover:text-[#00ff9d]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/profile"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/profile' ? 'bg-[#00ff9d] text-[#0a0a0a]' : 'text-gray-300 hover:text-[#00ff9d]'
              }`}
            >
              Profile
            </Link>
            <Link
              href="/create-post"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/create-post' ? 'bg-[#00ff9d] text-[#0a0a0a]' : 'text-gray-300 hover:text-[#00ff9d]'
              }`}
            >
              Create Post
            </Link>
            <Link
              href="/stats"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/stats' ? 'bg-[#00ff9d] text-[#0a0a0a]' : 'text-gray-300 hover:text-[#00ff9d]'
              }`}
            >
              Stats
            </Link>
            <Link
              href="/login"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/login' ? 'bg-[#00ff9d] text-[#0a0a0a]' : 'text-gray-300 hover:text-[#00ff9d]'
              }`}
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/signup' ? 'bg-[#00ff9d] text-[#0a0a0a]' : 'text-gray-300 hover:text-[#00ff9d]'
              }`}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 