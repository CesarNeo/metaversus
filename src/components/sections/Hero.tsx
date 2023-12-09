'use client'

import { slideIn, staggerContainer, textVariant } from '@/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <section className="y_paddings pl-6 sm:pl-16">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="inner_width mx-auto flex flex-col"
      >
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h1 variants={textVariant(1.1)} className="hero_heading">
            Metaverse
          </motion.h1>

          <motion.div
            variants={textVariant(1.2)}
            className="flex items-center justify-center"
          >
            <h1 className="hero_heading">Ma</h1>
            <div className="hero_text" />
            <h1 className="hero_heading">ness</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn({
            direction: 'right',
            type: 'tween',
            delay: 0.2,
            duration: 1,
          })}
          className="relative -mt-3 flex h-[18.75rem] w-full sm:h-[31.25rem] md:-mt-5"
        >
          <div className="hero-gradient absolute -top-8 z-0 h-[18.75rem] w-full overflow-hidden rounded-tl-[140px] 2xl:rounded-t-[140px]" />
          <Image
            src="/cover.png"
            alt="cover"
            className="z-10 h-[18.75rem] w-full rounded-tl-[140px] object-cover sm:h-[31.25rem]"
            fill
            sizes="(min-width: 768px) 100vw, 768px"
            priority
          />

          <Link
            href="#explore"
            className="relative z-10 -mt-[3.125rem] ml-auto flex w-max justify-end self-end overflow-hidden pr-10 sm:-mt-[4.375rem]"
          >
            <Image
              src="/stamp.png"
              alt="stamp"
              className="h-[6.25rem] w-[6.25rem] object-contain sm:h-[9.6875rem] sm:w-[9.6875rem]"
              height={155}
              width={155}
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
