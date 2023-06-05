import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-400">

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
          <Link href="/">Home</Link>
          </div>
          <div className="flex flex-1 justify-end space-x-8">
            <Link href="/pricing">Pricing</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
