import CoinCard from '../CoinCard'
import LimitSelector from '../LimitSelector'
import FilterInput from '../FilterInput'
import SortSelector from '../SortSelector'
import Spinner from '../Spinner'

const HomePage = ({
  coins,
  filter,
  setFilter,
  limit,
  setLimit,
  sortBy,
  setSortBy,
  loading,
  error,
}) => {
  const filteredCoins = coins
    .filter((coin) => {
      return (
        coin.name.toLowerCase().includes(filter.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(filter.toLowerCase())
      )
    })
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case 'market_cap_desc':
          return b.market_cap - a.market_cap
        case 'market_cap_asc':
          return a.market_cap - b.market_cap
        case 'price_desc':
          return b.current_price - a.current_price
        case 'price_asc':
          return a.current_price - b.current_price
        case 'change_desc':
          return b.price_change_percentage_24h - a.price_change_percentage_24h
        case 'change_asc':
          return a.price_change_percentage_24h - b.price_change_percentage_24h
      }
    })
  return (
    <div>
      {loading && <Spinner color='white' />}
      {error && <div className='error'> {error}</div>}
      <div className='top-controls'>
        <FilterInput filter={filter} onFilterChange={setFilter} />
        <SortSelector sort={sortBy} onSortChange={setSortBy} />
        <LimitSelector limit={limit} onLimitChange={setLimit} />
      </div>
      {!loading && !error && (
        <main className='grid'>
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin) => <CoinCard key={coin.id} coin={coin} />)
          ) : (
            <p>No results found</p>
          )}
        </main>
      )}
    </div>
  )
}

export default HomePage
