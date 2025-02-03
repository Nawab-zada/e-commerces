'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 mt-[200px]">
      <div className="relative">
        {/* Background Text */}
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
          <p className="text-[100px] md:text-[180px] font-bold text-[#f2f3f7] leading-none">
            Newsletter
          </p>
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212121]">
            Subscribe Our Newsletter
          </h2>
          <p className="text-base text-gray-600">
            Get the latest information and promo offers directly
          </p>

          {/* Form */}
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-xl"
          >
            <Input
              type="email"
              placeholder="Input email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 px-4 border-2 border-gray-800"
            />
            <Button 
              type="submit"
              className="h-12 px-8 bg-[#212121] hover:bg-[#212121]/90 text-white"
            >
              Get Started
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}