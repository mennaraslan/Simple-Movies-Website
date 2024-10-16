import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import LayoutPage from './Components/Pages/LayoutPage';
import Films from './Components/Films';
import Profile from './Components/Profile';
import AboutPage from './Components/Pages/AboutPage';
import { UserProvider } from './Contexts/UserContext';
import FilmDetails from './Components/FilmDetails';
import { FilmProvider } from './Contexts/FilmContext';
import { WatchListProvider} from './Contexts/WatchListContext';
import Register from './Components/Register';

function App() {
  return (
    <UserProvider>
      <WatchListProvider>
      <FilmProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/home" element={<LayoutPage/>}>
          <Route index element={<Films />} />
          <Route path="profile" element={<Profile/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="filmdetails" element={<FilmDetails/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/login" />}></Route>
        </Routes>
      </BrowserRouter>
      </FilmProvider>
      </WatchListProvider>
    </UserProvider>
  )
}

export default App;
