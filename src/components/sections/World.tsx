'use client'

import { fadeIn } from '@/utils'
import { motion } from 'framer-motion'
import TypingText from '../TypingText'
import TitleText from '../TitleText'
import Image from 'next/image'
import StaggerContainer from '../StaggerContainer'

function World() {
  return (
    <section className="paddings relative z-10">
      <StaggerContainer className="inner_width mx-auto flex flex-col">
        <TypingText text="| People on the world" className="text-center" />

        <TitleText className="text-center">
          Track friends around you and invite them to play together in the same
          world
        </TitleText>

        <motion.div
          variants={fadeIn({
            direction: 'up',
            type: 'tween',
            delay: 0.3,
            duration: 1,
          })}
          className="relative mt-16 flex h-[34.375rem] w-full"
        >
          <Image
            src="/map.png"
            alt="map"
            className="h-full w-full object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
          />

          <div className="absolute bottom-20 right-20 h-[4.375rem] w-[4.375rem] rounded-full bg-[#5d6680] p-1.5">
            <div className="relative h-full w-full">
              <Image
                src="/people-01.png"
                alt="people"
                className="h-full w-full rounded-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>

          <div className="absolute left-20 top-10 h-[4.375rem] w-[4.375rem] rounded-full bg-[#5d6680] p-1.5">
            <div className="relative h-full w-full">
              <Image
                src="/people-02.png"
                alt="people"
                className="h-full w-full rounded-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>

          <div className="absolute left-[45%] top-1/2 h-[4.375rem] w-[4.375rem] rounded-full bg-[#5d6680] p-1.5">
            <div className="relative h-full w-full">
              <Image
                src="/people-03.png"
                alt="people"
                className="h-full w-full rounded-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>
        </motion.div>
      </StaggerContainer>
    </section>
  )
}

export default World
