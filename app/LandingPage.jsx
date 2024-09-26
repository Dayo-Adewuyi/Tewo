import React, { useState } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { FaEthereum, FaRocket, FaUserAstronaut } from 'react-icons/fa';
import { GiTwoCoins } from 'react-icons/gi';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [contact, setContact] = useState('');
  const [otp, setOtp] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();

    console.log('Sending OTP to', contact);
    setModalStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log('Verifying OTP', otp);
    setIsModalOpen(false);
    setModalStep(1);
    setContact('');
    setOtp('');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalStep(1);
    setContact('');
    setOtp('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <header className="p-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center">
            <FaEthereum className="mr-2" />
            Tewo
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors duration-300"
          >
            Sign Up / Sign In
          </button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Main content remains the same */}
        <h1 className="text-5xl font-bold mb-8 text-center">
          Unleash Your DeFi Superpowers!
        </h1>
        
        <div className="flex justify-center mb-12">
          <Image
            src="https://cryptodaily.blob.core.windows.net/space/photo_2024-07-23%2015.34.09.jpeg"
            alt="Funny DeFi Meme"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<FaRocket className="text-4xl" />}
            title="Cross-Chain Swaps"
            description="Blast off between chains faster than a rocket ship! 🚀"
          />
          <FeatureCard
            icon={<GiTwoCoins className="text-4xl" />}
            title="Perps"
            description="Hook into liquidity like a pro fisherman! 🎣"
          />
          <FeatureCard
            icon={<FaUserAstronaut className="text-4xl" />}
            title="Smart Accounts"
            description="Your wallet just got a PhD in DeFi! 🧠"
          />
        </div>

        <div className="text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-purple-100 transition-colors duration-300 animate-bounce"
          >
            Join the DeFi Revolution!
          </button>
        </div>
      </main>

      <Transition
        show={isModalOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg text-gray-800 w-full max-w-md">
            {modalStep === 1 ? (
              <form onSubmit={handleContactSubmit}>
                <h2 className="text-2xl font-bold mb-4">Sign Up / Sign In</h2>
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="w-full p-2 mb-4 border rounded"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition-colors duration-300"
                >
                    Let&apos;s Go!
                </button>
              </form>
            ) : (
              <form onSubmit={handleOtpSubmit}>
                <h2 className="text-2xl font-bold mb-4">Enter OTP</h2>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full p-2 mb-4 border rounded"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition-colors duration-300"
                >
                  Verify OTP
                </button>
              </form>
            )}
            <button
              onClick={closeModal}
              className="mt-4 text-sm text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
      </Transition>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-lg">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-2">{title}</h3>
    </div>
    <p>{description}</p>
  </div>
);

export default LandingPage;