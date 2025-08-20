const AboutPage = () => {
  return (
    <div className='about'>
      <h1>About CoinFlix Dashboard</h1>
      <p>
        <strong>
          <u>Introduction </u>
        </strong>
        CoinFlix is a simple yet powerful dashboard application designed to
        track and analyze cryptocurrency data in real time. The app connects to
        an external API, such as CoinGecko, and displays up-to-date information
        about popular coins including their price, market capitalization, and
        24-hour changes. Its clean interface makes it easy for users to monitor
        the crypto market without feeling overwhelmed.
      </p>
      <p>
        <strong>
          <u>Features </u>
        </strong>{' '}
        The dashboard provides filtering, sorting, and limiting options so users
        can customize the data they see. You can search for a coin by name or
        symbol, sort the list by price, market cap, or percentage change, and
        select how many coins to display at once. These controls allow users to
        get a quick overview of the market in the way that best suits their
        needs.
      </p>
      <p>
        <strong>
          <u>Technology </u>
        </strong>
        Crypto Dash is built with React and makes use of hooks like useState and
        useEffect to manage state and fetch data asynchronously. Components such
        as CoinCard, FilterInput, SortSelector, and LimitSelector keep the code
        modular and easy to maintain. This structure not only improves
        readability but also makes it straightforward to expand the app with new
        features in the future.
      </p>
      <p>
        <strong>
          <u>Purpose </u>
        </strong>
        The main goal of Crypto Dash is to provide beginners and enthusiasts
        with a lightweight tool to practice React development while also gaining
        insight into cryptocurrency trends. It demonstrates how to work with
        external APIs, manage application state, and implement real-world
        features such as searching and sorting. As a result, Crypto Dash is both
        an educational project for developers and a practical utility for anyone
        interested in the crypto space.
      </p>
    </div>
  )
}

export default AboutPage
