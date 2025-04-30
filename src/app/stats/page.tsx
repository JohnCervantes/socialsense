import Navbar from '@/components/Navbar';
import Stats from '@/components/Stats';

export default function StatsPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto py-8 px-4">
        <Stats />
      </div>
    </main>
  );
} 