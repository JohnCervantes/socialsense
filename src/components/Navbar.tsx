'use client';

import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Implement logout logic
    router.push('/login');
  };

  return (
    <nav className="bg-[#1a1a1a] border-b border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-end items-center h-16">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-gray-300 hover:text-[#00ff9d] transition-colors"
          >
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
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </nav>
  );
} 