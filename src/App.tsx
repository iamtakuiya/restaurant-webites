import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 

// Pages
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import HoursAndLocation from './pages/HoursAndLocationPage'
import MenuPage from './pages/MenuPage';

function App() {

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="hoursandlocation" element={<HoursAndLocation />} />
          <Route path="menus" element={<MenuPage />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
