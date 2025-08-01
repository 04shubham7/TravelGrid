import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Created guides page to display travel guides
import TravelGuidesCarousel from './pages/TravelGuidesProfiles.jsx'
import Contact from './components/Contact.jsx'


import Home from './pages/Home'
import Discover from './pages/Discover'
import Trips from './pages/Trips'
import Review from './pages/Review'
import Forums from './pages/Forums'
import Contributors from './pages/Contributors'

import Hotels from './pages/Hotels'
import HotelDetails from './pages/HotelDetails'

import TicketBooking from './pages/TicketBooking'


import NotFound from './pages/NotFound'
import ErrorBoundary from './components/ErrorHandle/ErrorBoundary'
import NetworkError from './components/ErrorHandle/NetworkError'
import ServerError from './components/ErrorHandle/ServerError'

import TravelPackages from './pages/TravelPackages'
import HotelBookingPage from './pages/HotelBookingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/Auth/ProtectedRoute'

import FAQ from './pages/FAQ.jsx'
import { AuthProvider } from './context/AuthContext'

const router = createBrowserRouter([

  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/discover', element: <Discover /> },
      { path: '/trips', element: <Trips /> },
      { path: '/review', element: <Review /> },
      { path: '/forums', element: <Forums /> },
      { path: '/contributors', element: <Contributors /> },

      { path: '/hotels', element: <Hotels /> },
      { path: '/hotels/:id', element: <HotelDetails /> },
      // { path: 'hotel-booking', element: <HotelBookingPage /> },


      { path: '/ticket', element: <TicketBooking /> },
      { path: '/guides', element: <TravelGuidesCarousel /> },
      { path: '/packages', element: <TravelPackages /> },
      { path: '/faq', element: <FAQ /> },

      { path: '/contact', element: <Contact /> },

      {
        path: '/dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )
      },

      // Error handling routes
      { path: '/network-error', element: <NetworkError /> },
      { path: '/server-error', element: <ServerError /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>,
)
