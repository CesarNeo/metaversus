import { NEW_FEATURES } from '@/utils'
import Image from 'next/image'

interface NewFeaturesProps {
  feature: (typeof NEW_FEATURES)[number]
}

function NewFeatures({
  feature: { imgUrl, subtitle, title },
}: NewFeaturesProps) {
  return (
    <div className="flex w-full min-w-[13.125rem] flex-1 flex-col sm:max-w-[15.625rem]">
      <div className="flex_center h-[4.375rem] w-[4.375rem] rounded-3xl bg-[#323f5d]">
        <div className="relative h-1/2 w-1/2">
          <Image
            src={imgUrl}
            alt="icon"
            className="h-1/2 w-1/2 object-contain"
            fill
          />
        </div>
      </div>

      <h1 className="mt-7 text-2xl font-bold text-white">Title {title}</h1>
      <p className="mt-4 flex-1 text-lg font-normal leading-8 text-[#b0b0b0]">
        {subtitle}
      </p>
    </div>
  )
}

export default NewFeatures
