import { useState } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  const [isNewsletterSuccess, setIsNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsNewsletterSuccess(true);
    setTimeout(() => setIsNewsletterSuccess(false), 3000);
  };

  return (
    <footer className="bg-layeredDarkBlue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Tewo</h3>
            <p className="text-sm text-gray-300">Bringing DEFI to your doorstep.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/dashboard" className="hover:text-layeredTeal transition-colors duration-300">Dashboard</Link></li>
              <li><Link href="/liquidity" className="hover:text-layeredTeal transition-colors duration-300">Liquidity</Link></li>
              <li><Link href="/trading" className="hover:text-layeredTeal transition-colors duration-300">Trading</Link></li>
              <li><Link href="/transfers" className="hover:text-layeredTeal transition-colors duration-300">Transfers</Link></li>
              <li><Link href="/yield" className="hover:text-layeredTeal transition-colors duration-300">Yield</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-layeredTeal transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-layeredTeal transition-colors duration-300">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-white hover:text-layeredTeal transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-white hover:text-layeredTeal transition-colors duration-300">
                <FaDiscord size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-gray-900 rounded focus:ring-2 focus:ring-layeredTeal"
                required
              />
              <button
                type="submit"
                className="w-full bg-layeredTeal text-white py-2 rounded hover:bg-opacity-90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            <Transition
              show={isNewsletterSuccess}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <p className="text-sm text-layeredTeal mt-2">Thank you for subscribing!</p>
            </Transition>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © 2024 Tewo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}