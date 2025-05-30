import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 

// Pages
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import HoursAndLocation from './pages/HoursAndLocationPage'


function App() {

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="hoursandlocation" element={<HoursAndLocation />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
