import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Error from './pages/error404'

function App() {

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/home" />;
    }

    return children;
  };


  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* <Route path="/"> */}

            {/* <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route path="home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route path="/register" element={<Register />} />
          </Route> */}

          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/error404" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
