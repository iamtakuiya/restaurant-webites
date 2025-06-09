import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 

// Pages
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import HoursAndLocation from './pages/HoursAndLocationPage'
import MenuPage from './pages/MenuPage';
import AboutUs from './pages/AboutUsPage';
import EventsPage from './pages/EventsPage';

function App() {

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="hoursandlocation" element={<HoursAndLocation />} />
          <Route path="menus" element={<MenuPage />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="events" element={<EventsPage />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
