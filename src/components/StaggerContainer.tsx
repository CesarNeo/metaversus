'use client'

import { staggerContainer } from '@/utils'
import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

type StaggerContainerProps = ComponentProps<typeof motion.div>

function StaggerContainer({
  initial = 'hidden',
  whileInView = 'show',
  viewport = { once: false, amount: 0.25 },
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={staggerContainer()}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      {...props}
    />
  )
}

export default StaggerContainer
