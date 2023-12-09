'use client'

import { fadeIn, staggerContainer } from '@/utils'
import { motion } from 'framer-motion'
import TypingText from '../TypingText'

function About() {
  return (
    <section className="paddings relative z-10">
      <div className="gradient-02 z-0" />

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="inner_width flex_center mx-auto flex-col"
      >
        <TypingText text="| About Metaversus" className="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="text-secondary-white mt-2 text-center text-xl font-normal sm:text-3xl"
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
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="mt-8 h-7 w-[1.125rem] object-contain"
        />
      </motion.div>
    </section>
  )
}

export default About
