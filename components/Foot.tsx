"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const Foot = () => {
  const router = useRouter()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F4B4B] text-white py-3 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex max-sm:flex-col items-center justify-between gap-4 sm:p-3">
          {/* Left: Avatar + Text */}
          <div className="flex max-sm:justify-between  items-center gap-3 min-w-0">
            <div className="h-10 w-10 md:h-15 md:w-15 rounded-full overflow-hidden ring-2 ring-white/20 flex-shrink-0">
              <Image
                src="/foot.png"
                alt="Promo Gift"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="leading-tight text-sm md:text-[20px] max-sm:text-center truncate">
              <p className="font-semibold text-white truncate">
                🔥Free GIFT for you if you HURRY NOW.
              </p>
              <p className=" truncate">
                Gift going out of stock! 😔😔
              </p>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex-shrink-0">
            <Button
              className="bg-[#023E8A] hover:bg-[#123d93] text-white font-semibold sm:text-[20px] rounded-md px-4 md:px-6 py-2 md:py-7"
              onClick={() => router.push('/?pkg=regular#order')}
            >
              Yes! I Want To Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Foot
