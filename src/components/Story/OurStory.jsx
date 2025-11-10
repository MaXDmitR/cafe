import React from 'react'
import StoryParText from './StoryParText'
import TitleCarousel from './TitleCarousel'
import { useAnimatedInView } from '../../hooks/useAnimatedInView'

const OurStory = () => {

const { ref, classNames } = useAnimatedInView({
        direction: 'top',
        timer: 500,
        threshold: 0.1,
        triggerOnce: true,
        animationSpeed: '0.5s',
        animationDistance: '0'
    })

  return (
    <section className='storySection'>

      <div className='storyTitleBlock'>
        <div ref={ref} className={`storyTitle ${classNames}`}>
          <h1>AROMAPLACE</h1>
          <p>Crafted Coffee & Cozy Moments</p>
        </div>
        

        {<TitleCarousel />}
      </div>

      <StoryParText
        image="images/story7.jpg"
        title="The birth of an idea"
        text={[<p>Our founder,  <strong>little Tom</strong>, grew up in a house where the <strong>aroma of coffee</strong> was always in the air. His grandfather, a former sailor, brought <strong>exotic beans from distant countries</strong>, and his grandmother knew how to brew a drink that ‘opened up the world.</p>,
        <p>Tom, still a child, decided that his ‘coffee’ had to be <strong>special</strong>. Every summer, he set up an <strong>improvised counter in the garden</strong>, selling ‘refreshing drinks’ to his neighbours. One hot day, when all the sugar bowls were empty and regular coffee seemed too bitter, Tom <strong>accidentally mixed</strong> his grandfather's cold drink with his grandmother's secret ingredient — <strong>a drop of natural, barely noticeable honey syrup</strong>.</p>]}
        reverse={false}
        rounding={"bottom-right"}
        border={"right"}
      />

      <StoryParText
        image="images/story5.jpg"
        title="Brand philosophy"
        text={[<p>When Tom grew up, he devoted himself to creating the <strong>perfect place</strong> where this childhood magic could happen every day. He named his brainchild <strong>AromaPlace</strong> to <strong>honour that very ‘aroma’</strong> from his childhood and to <strong>emphasise that here, not only taste but also atmosphere is valued</strong>.</p>,
        <p>Today at AromaPlace, <strong>every cup is prepared with the same precision</strong> as that first experimental drink. The secret of <strong>‘Golden Warmth’</strong> is not an ingredient, but a <strong>philosophy: real coffee should always bring joy and a feeling of home</strong>.</p>]}
        reverse={true}
        rounding={"top-left"}
        border={"left"}
      />

      <div className='storySlogan'>
        <div
          className="storySloganImage"
          style={{ backgroundImage: "url('images/story6.jpg')" }}
          aria-label="Затишний інтер'єр кав'ярні"
        >
        </div>
        <div className='storySloganText'>
          <p>We don't just sell coffee — we create a place where your best day begins. Come and experience the ‘Golden Warmth’ in every cup.</p>
        </div>
      </div>

      {/*<h1>Team Members(coming soon)</h1>
      <h1>Tesmotial(coming soon)</h1>*/}
    </section>
  )
}

export default OurStory
