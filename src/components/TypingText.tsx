'use client'

import { cn, textContainer, textVariant2 } from '@/utils'
import { motion } from 'framer-motion'
import { Children, ComponentProps } from 'react'

type TypingTextProps = ComponentProps<typeof motion.p> & {
  text: string
}

function TypingText({ className, text, ...props }: TypingTextProps) {
  return (
    <motion.p
      {...props}
      variants={textContainer}
      className={cn('text-sm font-normal text-secondary-white', className)}
    >
      {Children.toArray(
        Array.from(text).map((char) => (
          <motion.span variants={textVariant2}>
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        )),
      )}
    </motion.p>
  )
}

export default TypingText
