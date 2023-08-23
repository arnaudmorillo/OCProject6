import { BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Routing from './router/routing'
import Header from './components/header'
import Footer from './components/footer'
import { ContextData } from './ContextData'

function App() {
  const [housingData, setHousingData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // fetching data from json file
  useEffect(() => {
    fetch('data.json')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setHousingData(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (isLoading) return <div>loading...</div>

  return (
    <ContextData.Provider value={{ housingData, setHousingData }}>
      <Router>
        <Header />
        <Routing />
        <Footer />
      </Router>
    </ContextData.Provider>
  )
}

export default App
