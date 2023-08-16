import { useLocation } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { ContextData } from '../../ContextData'

import Rating from '../../components/rating'
import Collapse from '../../components/collapse'
import SlideShow from '../../components/slideShow'
import Host from '../../components/host'
import Tags from '../../components/tags'

function Housing() {
  let location = useLocation()
  const { housingData } = useContext(ContextData)
  const [thisHousing, setThisHousing] = useState({})

  useEffect(() => {
    let id = location.pathname.substring(11)
    setThisHousing(housingData.find((housing) => housing.id === id))
  }, [housingData, location.pathname])

  if (thisHousing === {}) return <div>loading...</div>

  return (
    <main className="housing">
      <SlideShow pictures={thisHousing.pictures} />
      <div className="housing__info">
        <div className="housing__info__location">
          <div className="housing__info__location__title">
            <h1>{thisHousing.title}</h1>
            <p>{thisHousing.location}</p>
          </div>
          <Tags tags={thisHousing.tags} />
        </div>
        <div className="housing__info__host">
          <Host host={thisHousing.host} />
          <Rating rating={thisHousing.rating} />
        </div>
      </div>
      <div className="housing__details">
        <Collapse title="Description" text={thisHousing.description} />
        <Collapse title="Equipments" text={thisHousing.equipments} />
      </div>
    </main>
  )
}

export default Housing
