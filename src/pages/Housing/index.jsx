import { useLocation } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { ContextData } from '../../ContextData'

import Rating from '../../components/rating'

function Housing() {
  let location = useLocation()
  const { housingData, setHousingData } = useContext(ContextData)
  const [thisHousing, setThisHousing] = useState({})

  useEffect(() => {
    let id = location.pathname.substring(1)
    setThisHousing(housingData.find((housing) => housing.id === id))
  }, [])

  return (
    <main>
      housing {thisHousing.id}
      <Rating thisHousing={thisHousing} />
    </main>
  )
}

export default Housing
