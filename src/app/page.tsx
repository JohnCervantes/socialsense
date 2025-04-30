import Navbar from '@/components/Navbar';
import Post from '@/components/Post';
import CreatePost from '@/components/CreatePost';

// Sample posts data
const samplePosts = [
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
    author: 'Jane Smith',
    likes: 15,
    comments: 3,
    timestamp: '4 hours ago',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-2xl mx-auto py-8 px-4">
        <CreatePost />
        <div className="space-y-4">
          {samplePosts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}
