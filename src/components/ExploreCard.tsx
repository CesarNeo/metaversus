'use client'

import { motion } from 'framer-motion'

import { EXPLORE_WORLDS, fadeIn } from '@/utils'
import Image from 'next/image'

interface ExploreCardProps {
  world: (typeof EXPLORE_WORLDS)[number]
  index: number
  active: string
  handleClick: (id: string) => void
}

function ExploreCard({ active, handleClick, index, world }: ExploreCardProps) {
  return (
    <motion.button
      type="button"
      data-active={active === world.id}
      variants={fadeIn({
        direction: 'right',
        type: 'spring',
        delay: index * 0.5,
        duration: 0.75,
      })}
      className="relative flex h-[43.75rem] min-w-[10.625rem] items-center justify-center transition-[flex] duration-[0.7s] ease-out-flex data-[active=false]:flex-[2] data-[active=true]:flex-[10] data-[active=false]:lg:flex-[0.5] data-[active=true]:lg:flex-[3.5]"
      onClick={() => handleClick(world.id)}
    >
      <Image
        src={world.imgUrl}
        alt={world.title}
        fill
        className="h-full w-full rounded-3xl object-cover"
        sizes="(min-width: 1024px) 50vw, 100vw"
        quality={100}
      />

      {active !== world.id ? (
        <h3 className="absolute z-0 text-lg font-semibold text-white sm:text-2xl lg:bottom-20 lg:origin-[0,0] lg:-rotate-90">
          {world.title}
        </h3>
      ) : (
        <div className="absolute bottom-0 w-full flex-col justify-start rounded-b-3xl bg-[rgba(0,0,0,0.5)] p-8">
          <div className="flex_center glassmorphism mb-4 h-[60px] w-[60px] rounded-3xl">
            <div className="relative h-1/2 w-1/2">
              <Image
                src="/headset.svg"
                alt="headset"
                className="h-1/2 w-1/2 object-contain"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          <p className="text-base font-normal uppercase leading-5 text-white">
            Enter the Metaverse
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
            {world.title}
          </h2>
        </div>
      )}
    </motion.button>
  )
}

export default ExploreCard
