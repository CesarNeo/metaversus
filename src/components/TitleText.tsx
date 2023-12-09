'use client'

import { cn, textVariant2 } from '@/utils'
import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

type TitleTextProps = ComponentProps<typeof motion.h2>

function TitleText({ className, ...props }: TitleTextProps) {
  return (
    <motion.h2
      {...props}
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={cn(
        'text-secondary-white mt-2 text-5xl font-bold md:text-6xl',
        className,
      )}
    />
  )
}

export default TitleText
