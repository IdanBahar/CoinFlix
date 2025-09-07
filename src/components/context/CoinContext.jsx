import { useState, useEffect, useContext, createContext } from 'react'
const API_URL = import.meta.env.VITE_API_URL

const CoinContext = createContext()

export function CoinProvider({ children }) {
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
    <CoinContext.Provider
      value={{
        coins,
        loading,
        error,
        limit,
        filter,
        sortBy,
        setLimit,
        setFilter,
        setSortBy,
      }}
    >
      {children}
    </CoinContext.Provider>
  )
}

export function useCoinContext() {
  return useContext(CoinContext)
}
