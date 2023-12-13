'use client'

import { NEW_FEATURES, fadeIn, planetVariants } from '@/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import TypingText from '../TypingText'
import TitleText from '../TitleText'
import NewFeatures from '../NewFeatures'
import StaggerContainer from '../StaggerContainer'

function WhatsNew() {
  return (
    <section className="paddings relative z-10">
      <StaggerContainer className="inner_width mx-auto flex flex-col gap-8 lg:flex-row">
        <motion.div
          variants={fadeIn({
            direction: 'right',
            type: 'tween',
            delay: 0.2,
            duration: 1,
          })}
          className="flex flex-[0.75] flex-col justify-center"
        >
          <TypingText text="| What's New?" />
          <TitleText>What&apos;s new about Metaversus?</TitleText>

          <div className="mt-12 flex w-full flex-wrap items-start justify-between gap-6">
            {NEW_FEATURES.map((feature) => (
              <NewFeatures key={feature.title} feature={feature} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={planetVariants('right')}
          className="flex_center flex-1"
        >
          <div className="relative h-[90%] w-[90%]">
            <Image
              src="/whats-new.png"
              alt="whats new"
              className="h-[90%] w-[90%] object-contain"
              width={1200}
              height={1000}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </motion.div>
      </StaggerContainer>
    </section>
  )
}

export default WhatsNew
