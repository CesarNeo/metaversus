'use client'

import { INSIGHTS, fadeIn } from '@/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface InsightCardProps {
  index: number
  insight: (typeof INSIGHTS)[number]
}

function InsightCard({
  index,
  insight: { imgUrl, subtitle, title },
}: InsightCardProps) {
  return (
    <motion.div
      variants={fadeIn({
        direction: 'up',
        type: 'spring',
        delay: index * 0.5,
        duration: 1,
      })}
      className="flex flex-col items-center gap-4 md:flex-row"
    >
      <Image
        src={imgUrl}
        alt={title}
        width={400}
        height={400}
        className="h-[250px] w-full rounded-[32px] object-cover md:w-[270px]"
      />

      <div className="flex w-full justify-between">
        <div className="flex max-w-2xl flex-1 flex-col md:ml-16">
          <h4 className="text-2xl font-normal text-white lg:text-4xl">
            {title}
          </h4>
          <p className="mt-4 text-sm font-normal text-secondary-white lg:text-xl">
            {subtitle}
          </p>
        </div>

        <div className="hidden h-[6.25rem] w-[6.25rem] items-center justify-center rounded-full border border-white bg-transparent lg:flex">
          <div className="relative h-[40%] w-[40%]">
            <Image
              src="/arrow.svg"
              alt="arrow"
              className="h-[40%] w-[40%] object-contain"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default InsightCard
