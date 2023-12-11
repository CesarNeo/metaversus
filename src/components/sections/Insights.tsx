'use client'

import { motion } from 'framer-motion'
import { INSIGHTS, staggerContainer } from '@/utils'
import TypingText from '../TypingText'
import TitleText from '../TitleText'
import InsightCard from '../InsightCard'
import { Children } from 'react'

function Insights() {
  return (
    <section className="paddings relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="inner_width mx-auto flex flex-col"
      >
        <TypingText text="| Insight" className="text-center" />

        <TitleText className="text-center">Insight about metaverse</TitleText>

        <div className="mt-12 flex flex-col gap-7">
          {Children.toArray(
            INSIGHTS.map((insight, index) => (
              <InsightCard index={index + 1} insight={insight} />
            )),
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default Insights
