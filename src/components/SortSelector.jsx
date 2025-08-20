const SortSelector = ({ sort, onSortChange }) => {
  return (
    <div className='controls'>
      <label htmlFor='sort'>Sort By:</label>
      <select
        id='sort'
        value={sort}
        onChange={(e) => {
          onSortChange(e.target.value)
        }}
      >
        <option value='market_cap_desc'>Market Cap (Descending)</option>
        <option value='market_cap_asc'>Market Cap (Ascending)</option>
        <option value='price_desc'>Price (Descending)</option>
        <option value='price_asc'>Price (Ascending)</option>
        <option value='change_desc'>24h Change (Descending)</option>
        <option value='change_asc'>24h Change (Ascending)</option>
      </select>
    </div>
  )
}

export default SortSelector
