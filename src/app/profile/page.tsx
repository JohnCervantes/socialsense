import Navbar from '@/components/Navbar';
import Post from '@/components/Post';

// Sample user data
const user = {
  name: 'John Doe',
  username: '@johndoe',
  bio: 'Software developer | Next.js enthusiast | Coffee lover',
  location: 'San Francisco, CA',
  work: 'Senior Software Engineer at Tech Corp',
  education: 'Computer Science at Stanford University',
  followers: 123,
  following: 456,
  coverPhoto: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
  profilePhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
};

// Sample user posts
const userPosts = [
  {
    id: '1',
    content: 'Just finished building my first Next.js application! 🚀',
    author: 'John Doe',
    likes: 24,
    comments: 5,
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    content: 'Learning Tailwind CSS has been a game-changer for my development workflow!',
    author: 'John Doe',
    likes: 15,
    comments: 3,
    timestamp: '4 hours ago',
  },
];

export default function Profile() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      
      {/* Cover Photo */}
      <div className="relative h-50">
        <img
          src={user.coverPhoto}
          alt="Cover"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
      </div>

      {/* Profile Info */}
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            {/* Profile Card */}
            <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src={user.profilePhoto}
                    alt={user.name}
                    className="w-32 h-32 rounded-full border-4 border-[#00ff9d]"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-[#00ff9d] animate-pulse opacity-50" />
                </div>
                <h1 className="text-2xl font-bold mt-6 text-[#00ff9d]">{user.name}</h1>
                <p className="text-gray-400">{user.username}</p>
                <p className="text-gray-300 mt-2 text-center">{user.bio}</p>
                
                <div className="w-full border-t border-[#2a2a2a] my-4" />
                
                <div className="w-full space-y-2">
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {user.location}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {user.work}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {user.education}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-2/3 lg:w-3/4 md:ml-4 mt-4 md:mt-0">
            {/* Post Creation */}
            <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4 mb-4">
              <div className="flex items-center">
                <img
                  src={user.profilePhoto}
                  alt={user.name}
                  className="w-10 h-10 rounded-full border-2 border-[#00ff9d]"
                />
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  className="ml-4 flex-1 bg-[#2a2a2a] text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ff9d] border border-[#2a2a2a]"
                />
              </div>
              <div className="flex justify-between mt-4 pt-4 border-t border-[#2a2a2a]">
                <button className="flex items-center text-gray-400 hover:text-[#00ff9d] px-4 py-2 rounded-md transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Photo/Video
                </button>
                <button className="flex items-center text-gray-400 hover:text-[#00ff9d] px-4 py-2 rounded-md transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Feeling/Activity
                </button>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {userPosts.map((post) => (
                <Post key={post.id} {...post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 