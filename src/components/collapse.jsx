import { useState, useRef } from 'react'

import CollapseArrow from './collapseArrow'

function Collapse({ title, text }) {
  const [open, setOPen] = useState(false)

  // Handles opening and closing of collapse
  const toggle = () => {
    setOPen(!open)
  }

  // if the content of collapse is an array, display as a list
  const collapseText =
    text instanceof Array ? (
      <ul className="collapse__text__content__list">
        {text.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      text
    )

  const contentRef = useRef()

  return (
    <article className="collapse">
      <div className="collapse__title">
        <h2>{title}</h2>
        <div
          className={
            !open ? 'collapse__title__arrow-up' : 'collapse__title__arrow-down'
          }
          onClick={toggle}
        >
          <CollapseArrow />
        </div>
      </div>
      <div
        className="collapse__text"
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current.scrollHeight + 'px' }
            : { height: '0px' }
        }
      >
        <div className="collapse__text__content">{collapseText}</div>
      </div>
    </article>
  )
}

export default Collapse
