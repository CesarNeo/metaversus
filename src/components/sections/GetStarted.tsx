'use client'

import {
  STARTING_FEATURES,
  fadeIn,
  planetVariants,
  staggerContainer,
} from '@/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import TypingText from '../TypingText'
import TitleText from '../TitleText'
import StartSteps from '../StartSteps'

function GetStarted() {
  return (
    <section className="paddings relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="inner_width mx-auto flex flex-col gap-8 lg:flex-row"
      >
        <motion.div
          variants={planetVariants('left')}
          className="flex_center flex-1"
        >
          <div className="relative h-[90%] w-[90%]">
            <Image
              src="/get-started.png"
              alt="get started"
              className="h-[90%] w-[90%] object-contain"
              width={1200}
              height={1000}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex flex-[0.75] flex-col justify-center"
        >
          <TypingText text="| How Metaversus Works" />
          <TitleText>Get started with just few clicks</TitleText>

          <div className="mt-8 flex w-full max-w-sm flex-col items-start gap-6">
            {STARTING_FEATURES.map((feature, index) => (
              <StartSteps key={feature} number={index + 1}>
                {feature}
              </StartSteps>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GetStarted
