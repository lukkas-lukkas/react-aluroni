import Footer from 'components/Footer';
import Nav from 'components/Nav';
import Dish from 'pages/Dish';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import NotFound from 'pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path='*' element={<NotFound />}/>
        <Route path='/dish/:id' element={<Dish />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
