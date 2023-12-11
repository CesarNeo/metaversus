'use client'

import { SOCIALS, footerVariants } from '@/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'

function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="paddings relative py-8"
    >
      <div className="footer-gradient" />

      <div className="inner_width mx-auto flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h4 className="text-5xl font-bold text-white md:text-6xl">
            Enter the Metaverse
          </h4>

          <button
            type="button"
            className="flex h-fit items-center gap-3 rounded-[32px] bg-[#25618b] px-6 py-4"
          >
            <Image
              src="/headset.svg"
              alt="headset"
              className="h-6 w-6 object-contain"
              width={24}
              height={24}
            />

            <span className="text-base font-normal uppercase text-white">
              Enter Metaverse
            </span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-12 h-[2px] bg-white/10" />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <h4 className="text-2xl font-extrabold text-white">Metaversus</h4>
            <p className="text-sm font-normal text-white/50">
              Copyright © 2021 - 2022 Metaversus. All rights reserved.
            </p>

            <div className="flex gap-4">
              {SOCIALS.map((social) => (
                <Image
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="h-6 w-6 object-contain"
                  width={24}
                  height={24}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
