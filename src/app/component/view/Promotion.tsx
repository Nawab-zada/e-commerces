import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export default function Promotions() {
  return (
    <section className="container mx-auto px-4 py-1 md:py-4">
      <div className="text-center mb-8">
        <span className="text-sm text-blue-600 font-medium">PROMOTIONS</span>
        <h2 className="text-3xl font-bold text-[#212121] mt-2">Our Promotions Events</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Left Column - Promotional Banners */}
        <div className="lg:col-span-2 space-y-4">
          {/* Top Banner */}
          <div className="bg-[#d6d6d8] flex flex-col md:flex-row items-center justify-between overflow-hidden">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-[#212121]">GET UP TO 60%</h3>
              <p className="text-lg">For the summer season</p>
            </div>
            <div className="relative w-full md:w-1/2 h-[200px]">
              <Image
                src="/image.webp"
                alt="Summer season promotion"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-[#212121] text-white p-8 text-center">
            <h3 className="text-4xl font-bold mb-4">GET 30% Off</h3>
            <p className="mb-4">USE PROMO CODE</p>
            <span className="bg-[#474747] px-8 py-3 rounded-lg tracking-widest">
              DINEWEEKENDSALE
            </span>
          </div>
        </div>

        {/* Right Column - Product Cards */}
        <Card className="bg-[#efe1c7] h-[400px] ">
          <CardContent className="p-4">
            <div className="text-lg mb-1">Flex Sweatshirt</div>
            <div className="flex items-center gap-2">
              <span className="line-through">$100.00</span>
              <span className="font-bold">$75.00</span>
            </div>
            <div className="relative h-[300px] mt-8 py-4">
              <Image
                src="/image (1).webp"
                alt="Flex Sweatshirt"
                fill
                className="object-cover"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#d7d7d9] h-[400px]  ">
          <CardContent className="">
            <div className="text-lg ">Flex Sweatshirt</div>
            <div className="flex items-center gap-2">
              <span className="line-through">$225.00</span>
              <span className="font-bold">$190.00</span>
            </div>
            <div className="relative h-[300px] mt-11">
              <Image
                src="/image (2).webp"
                alt="Flex Sweatshirt"
                fill
                className="object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}