import { useState } from 'react'

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
      <div className="slider__left-arrow" onClick={prevSlide}>
        -1
      </div>
      <div className="slider__right-arrow" onClick={nextSlide}>
        +1
      </div>
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
