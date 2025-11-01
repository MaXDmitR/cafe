import React from 'react'

const StoryParText = (props) => {
  return (
    <div className={`storyPar ${props.reverse ? 'reverse' : ''}`}>
      <div
        className="storyParImage"
        style={{ backgroundImage: `url(${props.image})` }}

        aria-label="Затишний інтер'єр кав'ярні"
      >
      </div>
      <div className='storyParText'>
        <h2>{props.title}</h2>
        {props.text.map((paragraph, index) => (
          <React.Fragment key={index}>
            {paragraph}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default StoryParText
