"use client"
import Image from 'next/image'
import { motion } from 'framer-motion';

export default function Hero() {
  return (
      <section className="py-20 bg-gradient-to-r from-blue-950 via-purple-800 to-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1
                className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{opacity: 0, y: -50}}  // Starting position (opacity and vertical movement)
                animate={{opacity: 1, y: 0}}    // Final position (fully visible and no vertical movement)
                transition={{duration: 1}}      // Transition duration
            >
              Revolutionize Your Crypto Experience with CryptoNova
            </motion.h1>
            <motion.p
                className="text-xl mb-8 text-gray-300"
                initial={{opacity: 0, y: 20}} // Start slightly below and transparent
                animate={{opacity: 1, y: 0}}   // Fade in and slide up
                transition={{duration: 1}}     // Duration of the animation
            >
              Discover a new era of cryptocurrency trading, investing, and innovation. Join CryptoNova and unlock the
              potential of blockchain technology.
            </motion.p>
            <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Get Started
            </button>
          </div>
          <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{x: '100%'}}       // Start position off the right side
              animate={{x: 0}}            // End position (original position)
              transition={{duration: 1}}  // Transition duration
          >
            <Image
                src="https://www.ixbt.com/img/n1/news/2024/11/1/ixbtmedia_BTC_to_the_moon_--v_6.1_57acebc9-99d9-4768-9f54-1a5ec0167a6a_1_large.png"
                alt="Futuristic Crypto Coin"
                width={400}
                height={400}
                className="rounded-lg"
            />
          </motion.div>
        </div>
      </section>
  )
}

