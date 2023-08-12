function housingCard({ backgroundImageUrl, title }) {
  return (
    <article
      className="housing-card"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="housing-card__title">
        <h1>{title}</h1>
      </div>
    </article>
  )
}

export default housingCard
