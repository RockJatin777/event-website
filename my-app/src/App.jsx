import {BrowserRouter, Route, Routes} from 'react-router-dom'


import SignUp from './pages/register'
import Login from './pages/login'
import UpcomingEvents from './pages/upcomingEvents'
import RecommendedShows from './pages/recommendedShows'
import Home from './pages/Home'

import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<SignUp></SignUp>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/' element={<Home></Home>} />
        <Route path='/recommended-shows' element={<RecommendedShows></RecommendedShows>} />
        <Route path='/upcoming-events' element={<UpcomingEvents></UpcomingEvents>} />
      </Routes>
    </BrowserRouter>
  )
}