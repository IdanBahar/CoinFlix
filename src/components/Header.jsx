import { Link } from 'react-router'

const Header = () => {
  return (
    <>
      <div className='top-nav'>
        <h1>🚀 Crypto Dashboard</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </div>
      </div>
    </>
  )
}

export default Header
