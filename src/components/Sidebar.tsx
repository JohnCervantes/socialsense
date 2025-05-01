'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, UserIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Profile', href: '/profile', icon: UserIcon },
    { name: 'Stats', href: '/stats', icon: ChartBarIcon },
  ];

  return (
    <div className="hidden md:flex md:w-64 md:flex-col">
      <div className="flex min-h-0 flex-1 flex-col border-r border-[#2a2a2a] bg-[#1a1a1a]">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            <Link href="/" className="text-xl font-bold text-[#00ff9d]">
              SocialSense
            </Link>
          </div>
          <nav className="mt-5 flex-1 space-y-1 px-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                    isActive
                      ? 'bg-[#00ff9d] text-[#0a0a0a]'
                      : 'text-gray-300 hover:bg-[#2a2a2a] hover:text-[#00ff9d]'
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-6 w-6 flex-shrink-0 ${
                      isActive ? 'text-[#0a0a0a]' : 'text-gray-400 group-hover:text-[#00ff9d]'
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex flex-shrink-0 border-t border-[#2a2a2a] p-4">
          <div className="flex items-center">
            <div>
              <div className="h-10 w-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                <UserIcon className="h-6 w-6 text-gray-400" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-300">John Doe</p>
              <p className="text-xs text-gray-400">@johndoe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 