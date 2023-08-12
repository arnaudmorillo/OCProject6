import { Routes, Route } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ContextData } from '../ContextData'

import Home from '../pages/Home'
import APropos from '../pages/A-propos'
import Error from '../pages/Error'
import Housing from '../pages/Housing'

function Routing() {
  const { housingData, setHousingData } = useContext(ContextData)
  const [pathList, setPathList] = useState([])
  useEffect(() => {
    let list = []
    housingData.map((housing) => list.push(`/${housing.id}`))
    setPathList(list)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<APropos />} />
      {pathList.map((path, index) => {
        return <Route path={path} element={<Housing />} key={index} />
      })}
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Routing
