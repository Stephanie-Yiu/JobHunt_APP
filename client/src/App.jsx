import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, About, Profile, SignOut, SignUp } from './pages';
import { Header } from './components';

export default function App() {
 return (
  <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/SignOut" element={<SignOut />} />
    <Route path="/SignUp" element={<SignUp />} />
   </Routes>
  </BrowserRouter>
 );
}
