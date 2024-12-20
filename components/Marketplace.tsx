import Image from 'next/image'

const nftItems = [
  { id: 1, name: 'Cosmic Cube', price: '0.5 ETH' },
  { id: 2, name: 'Digital Dreamscape', price: '0.8 ETH' },
  { id: 3, name: 'Neon Nexus', price: '0.3 ETH' },
  { id: 4, name: 'Quantum Quasar', price: '1.2 ETH' },
]

export default function Marketplace() {
  return (
      <section id="marketplace" className=" bg-gray-900 text-white  py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">NFT Marketplace Preview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {nftItems.map((item) => (
                <div key={item.id} className=" bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                      src="https://dailyhodl.com/wp-content/uploads/2023/03/bitcoin-hayes-forecast.jpg"
                      alt={item.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{item.name}</h3>
                    <p className="text-purple-400">{item.price}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}
