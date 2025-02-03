import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-[50px] mt-[200px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center">
            <Image src="/image.png" alt="Dine Market" width={150} height={150} />
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed">
            Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <FaTwitter className="w-5 h-5 text-gray-600" />
            </Link>
            <Link href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <FaFacebookF className="w-5 h-5 text-gray-600" />
            </Link>
            <Link href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <FaInstagram className="w-5 h-5 text-gray-600" />
            </Link>
            <Link href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <FaGithub className="w-5 h-5 text-gray-600" />
            </Link>
          </div>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Company</h3>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
            <li><Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Use</Link></li>
            <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
            <li><Link href="/how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Support</h3>
          <ul className="space-y-3">
            <li><Link href="/support" className="text-gray-600 hover:text-gray-900">Support Carrer</Link></li>
            <li><Link href="/service" className="text-gray-600 hover:text-gray-900">24h Service</Link></li>
            <li><Link href="/quick-chat" className="text-gray-600 hover:text-gray-900">Quick Chat</Link></li>
          </ul>
        </div>

        {/* Contact Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Contact</h3>
          <ul className="space-y-3">
            <li><Link href="/whatsapp" className="text-gray-600 hover:text-gray-900">Whatsapp</Link></li>
            <li><Link href="/support" className="text-gray-600 hover:text-gray-900">Support 24h</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-gray-600 text-sm text-center">
          © 2024 abdulbasit — @abdulbasit
        </p>
      </div>
    </footer>
  )
}

export default Footer
