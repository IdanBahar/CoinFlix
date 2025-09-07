import { Routes, Route } from 'react-router'
import Header from './components/Header'
import HomePage from './components/pages/Home.jsx'
import AboutPage from './components/pages/About'
import CoinDetailsPage from './components/pages/CoinDetails'
import NotFoundPage from './components/pages/NotFound'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/coin/:id' element={<CoinDetailsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
