import { ComponentProps } from 'react'

type StartStepsProps = ComponentProps<'div'> & {
  number: number
}

function StartSteps({ number, children, ...props }: StartStepsProps) {
  return (
    <div {...props} className="flex_center flex-row">
      <div className="flex_center h-[4.375rem] w-[4.375rem] rounded-3xl bg-[#323f5d]">
        <p className="text-xl font-bold text-white">
          {number.toString().padStart(2, '0')}
        </p>
      </div>

      <p className="ml-8 flex-1 text-lg font-normal leading-8 text-[#b0b0b0]">
        {children}
      </p>
    </div>
  )
}

export default StartSteps
