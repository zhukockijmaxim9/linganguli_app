import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteHeader from './components/SiteHeader/SiteHeader'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import Practice from './pages/Practice/Practice'
import Achievements from './pages/Achievements/Achievements'
import Profile from './pages/Profile/Profile'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <SiteHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
