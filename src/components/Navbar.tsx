'use client'

import { navVariants } from '@/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'

function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="x_paddings relative py-8"
    >
      <div className="gradient-01 absolute inset-0 w-1/2" />
      <div className="inner_width mx-auto flex justify-between gap-8">
        <Image
          src="/search.svg"
          alt="search"
          className="h-6 w-6 object-contain"
          width={24}
          height={24}
        />

        <h2 className="text-2xl font-extrabold leading-7 text-white">
          METAVERSUS
        </h2>

        <Image
          src="/menu.svg"
          alt="menu"
          className="h-6 w-6 object-contain"
          width={24}
          height={24}
        />
      </div>
    </motion.nav>
  )
}

export default Navbar
