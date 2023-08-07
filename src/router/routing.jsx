import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import APropos from '../pages/A-propos'
import Error from '../pages/Error'

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Routing
