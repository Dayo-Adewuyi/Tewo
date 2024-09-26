import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-layeredDarkBlue text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Tewo</Link>
        <div className="space-x-4">
          <Link href="/dashboard" className="hover:text-layeredTeal transition-colors duration-300">Dashboard</Link>
          <Link href="/liquidity" className="hover:text-layeredTeal transition-colors duration-300">Liquidity</Link>
          <Link href="/trading" className="hover:text-layeredTeal transition-colors duration-300">Trading</Link>
          <Link href="/transfers" className="hover:text-layeredTeal transition-colors duration-300">Transfers</Link>
          <Link href="/yield" className="hover:text-layeredTeal transition-colors duration-300">Yield</Link>
        </div>
      </div>
    </nav>
  );
}