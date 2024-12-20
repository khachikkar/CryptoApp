import Image from 'next/image'

export default function Hero() {
  return (
      <section className="py-20 bg-gradient-to-r from-blue-950 via-purple-800 to-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className=" text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Revolutionize Your Crypto Experience with CryptoNova
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Discover a new era of cryptocurrency trading, investing, and innovation. Join CryptoNova and unlock the potential of blockchain technology.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
                src="https://www.ixbt.com/img/n1/news/2024/11/1/ixbtmedia_BTC_to_the_moon_--v_6.1_57acebc9-99d9-4768-9f54-1a5ec0167a6a_1_large.png"
                alt="Futuristic Crypto Coin"
                width={400}
                height={400}
                className="rounded-lg"
            />
          </div>
        </div>
      </section>
  )
}

