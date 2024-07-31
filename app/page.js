import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-8">Hello, welcome to the Finance app</h1>
      <div className="space-x-4">
        <Link href="/dashboard" legacyBehavior>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Dashboard
          </button>
        </Link>
        <Link href="/playground" legacyBehavior>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
            Playground
          </button>
        </Link>
      </div>
    </div>
  );
}
