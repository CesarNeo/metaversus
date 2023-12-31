'use client'

import { fadeIn } from '@/utils'
import { motion } from 'framer-motion'
import TypingText from '../TypingText'
import StaggerContainer from '../StaggerContainer'

function About() {
  return (
    <section className="paddings relative z-10">
      <div className="gradient-02 z-0" />

      <StaggerContainer className="inner_width flex_center mx-auto flex-col">
        <TypingText text="| About Metaversus" className="text-center" />

        <motion.p
          variants={fadeIn({
            direction: 'up',
            type: 'tween',
            delay: 0.2,
            duration: 1,
          })}
          className="mt-2 text-center text-xl font-normal text-secondary-white sm:text-3xl"
        >
          <strong className="font-extrabold text-white">Metaverse</strong> is a
          new thing in the future, where you can enjoy the virtual world by
          feeling like it&apos;s really real, you can feel what you feel in this
          metaverse world, because this is really the{' '}
          <strong className="font-extrabold text-white">
            madness of the metaverse
          </strong>{' '}
          of today, using only{' '}
          <strong className="font-extrabold text-white">VR</strong> devices you
          can easily explore the metaverse world you want, turn your dreams into
          reality. Let&apos;s{' '}
          <strong className="font-extrabold text-white">explore</strong> the
          madness of the metaverse by scrolling down
        </motion.p>

        <motion.img
          variants={fadeIn({
            direction: 'up',
            type: 'tween',
            delay: 0.3,
            duration: 1,
          })}
          src="/arrow-down.svg"
          alt="arrow down"
          className="mt-8 h-7 w-[1.125rem] object-contain"
        />
      </StaggerContainer>
    </section>
  )
}

export default About
