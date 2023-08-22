import { useEffect, useState } from 'react'

function Banner({ backgroundImageUrl, title }) {
  const [titleLayout, setTitleLayout] = useState(title)

  useEffect(() => {
    if (title !== undefined && title.indexOf(',') > -1) {
      let titleArray = title.split(',')
      titleArray[0] = titleArray[0] + ','
      setTitleLayout(titleArray)
    }
  }, [title])

  return (
    <section
      className="banner-section"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="banner-section__title">
        <h1>
          <span className="banner-section__title__content">{title}</span>
          {Array.isArray(titleLayout)
            ? titleLayout.map((text, index) => (
                <span
                  key={index}
                  className="banner-section__title__content--break"
                >
                  {text}
                </span>
              ))
            : titleLayout}
        </h1>
      </div>
    </section>
  )
}

export default Banner
