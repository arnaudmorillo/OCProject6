import { useContext } from 'react'
import { ContextData } from '../../ContextData'
import { Link } from 'react-router-dom'

import Banner from '../../components/banner'
import Background from '../../assets/background-home.png'
import HousingCard from '../../components/housingCard'

function Home() {
  const { housingData, setHousingData } = useContext(ContextData)

  return (
    <main>
      <Banner
        backgroundImageUrl={Background}
        title={'Chez vous, partout et ailleurs'}
      />
      <section className="home-gallery">
        {housingData.map((housing) => (
          <Link
            to={'/' + housing.id}
            className="home-gallery__link"
            key={housing.id}
          >
            <HousingCard
              backgroundImageUrl={housing.cover}
              title={housing.title}
            />
          </Link>
        ))}
      </section>
    </main>
  )
}

export default Home
