import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import Header from './components/Header'
import HomePage from './components/pages/Home.jsx'
import AboutPage from './components/pages/About'
import CoinDetailsPage from './components/pages/CoinDetails'
import NotFoundPage from './components/pages/NotFound'
const API_URL = import.meta.env.VITE_API_URL

const App = () => {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [limit, setLimit] = useState(10)
  const [filter, setFilter] = useState('')
  const [sortBy, setSortBy] = useState('market_cap_desc')

  useEffect(() => {
    async function fetchCoins() {
      try {
        const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
        )
        if (!res.ok) throw new Error('Failed to fetch data')
        const data = await res.json()
        // console.log('data:', data)
        setCoins(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCoins()
  }, [limit])

  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              coins={coins}
              filter={filter}
              setFilter={setFilter}
              limit={limit}
              setLimit={setLimit}
              sortBy={sortBy}
              setSortBy={setSortBy}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path='/coin/:id' element={<CoinDetailsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
