import { useState } from 'react'

import arrowLeft from '../assets/arrow-left.png'
import arrowRight from '../assets/arrow-right.png'

function SlideShow({ pictures }) {
  const [current, setCurrent] = useState(0)

  if (!pictures) return <div>loading...</div>

  const length = pictures.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <section className="slider">
      {length > 1 && (
        <div>
          <div className="slider__left-arrow" onClick={prevSlide}>
            <img src={arrowLeft} alt="Go to previous" />
          </div>
          <div className="slider__right-arrow" onClick={nextSlide}>
            <img src={arrowRight} alt="Go to next" />
          </div>
          <div className="slider__number">
            {current + 1}/{length}
          </div>
        </div>
      )}
      {pictures.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? 'slider__slide slider__slide--active'
                : 'slider__slide'
            }
            key={index}
          >
            {index === current && (
              <img
                src={slide}
                alt="Logement"
                className="slider__slide__image"
              />
            )}
          </div>
        )
      })}
    </section>
  )
}

export default SlideShow
