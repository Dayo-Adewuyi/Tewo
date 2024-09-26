import Link from 'next/link';


export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-6 text-layeredDarkBlue">Tewo</h1>
      <p className="text-xl mb-12 max-w-2xl mx-auto">Manage your assets with advanced liquidity provision and perpetual trading.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          title="Account"
          description="Manage assets across multiple blockchains seamlessly."
          link="/dashboard"
          icon="🏦"
        />
        <FeatureCard 
          title="Liquidity Provision"
          description="Provide liquidity using advanced Uniswap v4 hooks."
          link="/liquidity"
          icon="💧"
        />
        <FeatureCard 
          title="Perps"
          description="Engage in secure perpetual futures trading."
          link="/trading"
          icon="📈"
        />
        <FeatureCard 
          title="Cross-Chain Transfers"
          description="Perform secure cross-chain transfers with Eigenlayer AVS."
          link="/transfers"
          icon="🔗"
        />
        <FeatureCard 
          title="Yield Farming"
          description="Optimize your yield with advanced strategies."
          link="/yield"
          icon="🌾"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description, link, icon }) {
  return (
    <Link href={link} className="block p-6 bg-white rounded-lg border border-layeredTeal shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="text-4xl mb-4">{icon}</div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-layeredDarkBlue">{title}</h5>
      <p className="font-normal text-gray-700">{description}</p>
    </Link>
  );
}