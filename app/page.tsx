import Link from 'next/link';

export default async function HomePage() {
  return (
    <main className="flex bg-gradient-to-r from-pink-300 via-purple-300 to-blue-400 h-full flex-col items-center justify-center">

      <div className="relative flex flex-col items-center">

        <div className="flex flex-row items-center">
       
          <Link
            href="/pricing"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Pricing
          </Link>

        </div>
      </div>
    </main>
  );
}
