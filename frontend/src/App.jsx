import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import Dashboard from './pages/Dashboard';

import Items from './pages/Items';

import Rentals from './pages/Rentals';

import Profile from './pages/Profile';

import MyRentals from './pages/MyRentals';

import CreateItem from './pages/CreateItem';

import EditItem from './pages/EditItem';

import NotFound from './pages/NotFound';

import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <div className='page-container'>

        <Routes>

          {/* Públicas */}

          <Route
            path='/'
            element={<Home />}
          />

          <Route
            path='/login'
            element={<Login />}
          />

          <Route
            path='/register'
            element={<Register />}
          />

          {/* Protegidas */}

          <Route

            path='/dashboard'

            element={

              <ProtectedRoute>

                <Dashboard />

              </ProtectedRoute>

            }

          />

          <Route

            path='/items'

            element={

              <ProtectedRoute>

                <Items />

              </ProtectedRoute>

            }

          />

          <Route

            path='/items/create'

            element={

              <ProtectedRoute>

                <CreateItem />

              </ProtectedRoute>

            }

          />

          <Route

            path='/items/edit/:id'

            element={

              <ProtectedRoute>

                <EditItem />

              </ProtectedRoute>

            }

          />

          <Route

            path='/rentals'

            element={

              <ProtectedRoute>

                <Rentals />

              </ProtectedRoute>

            }

          />

          <Route

            path='/my-rentals'

            element={

              <ProtectedRoute>

                <MyRentals />

              </ProtectedRoute>

            }

          />

          <Route

            path='/profile'

            element={

              <ProtectedRoute>

                <Profile />

              </ProtectedRoute>

            }

          />

          <Route

            path='*'

            element={<NotFound />}

          />

        </Routes>

      </div>

      <Footer />

    </BrowserRouter>

  )

}

export default App;