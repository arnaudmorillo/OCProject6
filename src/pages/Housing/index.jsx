import { useLocation } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { ContextData } from '../../ContextData'

import Rating from '../../components/rating'
import Collapse from '../../components/collapse'
import SlideShow from '../../components/slideShow'

function Housing() {
  let location = useLocation()
  const { housingData } = useContext(ContextData)
  const [thisHousing, setThisHousing] = useState({})

  useEffect(() => {
    let id = location.pathname.substring(1)
    setThisHousing(housingData.find((housing) => housing.id === id))
  }, [housingData, location.pathname])

  return (
    <main>
      housing {thisHousing.id}
      <SlideShow pictures={thisHousing.pictures} />
      <Rating rating={thisHousing.rating} />
      <Collapse title="Description" text={thisHousing.description} />
      <Collapse title="Equipments" text={thisHousing.equipments} />
    </main>
  )
}

export default Housing
