import { INSIGHTS } from '@/utils'
import TypingText from '../TypingText'
import TitleText from '../TitleText'
import InsightCard from '../InsightCard'
import { Children } from 'react'
import StaggerContainer from '../StaggerContainer'

function Insights() {
  return (
    <section className="paddings relative z-10">
      <StaggerContainer className="inner_width mx-auto flex flex-col">
        <TypingText text="| Insight" className="text-center" />

        <TitleText className="text-center">Insight about metaverse</TitleText>

        <div className="mt-12 flex flex-col gap-7">
          {Children.toArray(
            INSIGHTS.map((insight, index) => (
              <InsightCard index={index + 1} insight={insight} />
            )),
          )}
        </div>
      </StaggerContainer>
    </section>
  )
}

export default Insights
