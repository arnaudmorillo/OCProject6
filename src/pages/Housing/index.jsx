import { useLocation } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { ContextData } from '../../ContextData'

import Rating from '../../components/rating'
import Collapse from '../../components/collapse'

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
      <Rating thisHousing={thisHousing} />
      <Collapse title="Description" text={thisHousing.description} />
      <Collapse title="Equipments" text={thisHousing.equipments} />
    </main>
  )
}

export default Housing
