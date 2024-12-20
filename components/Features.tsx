import { Zap, Shield, RefreshCwIcon as Refresh } from 'lucide-react'

const features = [
  {
    icon: <Zap className="w-12 h-12 text-yellow-400" />,
    title: 'Lightning Fast Transactions',
    description: 'Experience near-instantaneous transfers and trades with our cutting-edge blockchain technology.'
  },
  {
    icon: <Shield className="w-12 h-12 text-green-400" />,
    title: 'Unparalleled Security',
    description: 'Rest easy knowing your assets are protected by state-of-the-art encryption and security measures.'
  },
  {
    icon: <Refresh className="w-12 h-12 text-blue-400" />,
    title: 'Seamless Integration',
    description: 'Effortlessly connect your existing wallets and exchanges for a unified crypto experience.'
  }
]

export default function Features() {
  return (
    <section id="features" className=" text-white py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose CryptoNova?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

