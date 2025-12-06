import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Transactions from './components/loggedin/dashboard/RecentTransactions'

function App() {

  return (
    <div className='bg-linear-to-br from-gray-900 via-gray-800 to-gray-900'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/transactions' element={<Transactions />} />
      </Routes>
    </div>
  )
}

export default App
