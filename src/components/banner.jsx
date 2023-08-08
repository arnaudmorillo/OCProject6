function Banner({ backgroundImageUrl, title }) {
  return (
    <section
      className="banner-section"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="banner-section__title">
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export default Banner
