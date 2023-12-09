'use client'

import { EXPLORE_WORLDS, staggerContainer } from '@/utils'
import { motion } from 'framer-motion'
import TypingText from '../TypingText'
import TitleText from '../TitleText'
import ExploreCard from '../ExploreCard'
import { useState } from 'react'

function Explore() {
  const [active, setActive] = useState('world-2')

  return (
    <section id="explore" className="paddings">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="inner_width flex_center mx-auto flex-col"
      >
        <TypingText text="| The World" className="text-center" />
        <TitleText className="text-center">
          Choose the world you want <br className="hidden md:block" /> to
          explore
        </TitleText>

        <div className="mt-[3.125rem] flex min-h-[70dvh] w-full flex-col gap-5 lg:flex-row">
          {EXPLORE_WORLDS.map((world, index) => (
            <ExploreCard
              key={world.id}
              world={world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore
