import Navbar from '@/components/Navbar';
import CreatePost from '@/components/CreatePost';

export default function CreatePostPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Create a New Post</h1>
        <CreatePost />
      </div>
    </main>
  );
} 