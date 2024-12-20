import { Twitter, Facebook, Instagram, GitlabIcon as GitHub } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-purple-500">CryptoNova</h3>
            <p className="text-gray-400 mt-2">Empowering the future of finance</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Twitter /></a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Facebook /></a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Instagram /></a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><GitHub /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2023 CryptoNova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

