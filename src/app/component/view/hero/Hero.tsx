import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py- md:py-3">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-block">
            <span className="bg-[#ffece3] text-blue-600 px-6 py-2 rounded-md text-sm font-medium">
              Sale 70%
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#212121] leading-tight">
            An Industrial<br />
            Take on<br />
            Streetwear
          </h1>
          
          <p className="text-gray-600 max-w-lg text-base md:text-lg">
            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
          </p>
          
          <Button size="lg" className="bg-[#212121] hover:bg-[#212121]/90 text-white px-8 h-14">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Start shopping
          </Button>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 relative">
          <div className="aspect-square w-full max-w-[650px] mx-auto relative">
            <div className="absolute inset-0 bg-[#ffece3] rounded-full" />
            <div className="absolute inset-0">
              <Image
                src="/HeroGirlimg.webp"
                alt="Hero fashion model"
                fill
                className="object-cover p-4 md:p-8"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}