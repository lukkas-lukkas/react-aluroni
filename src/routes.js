import Home from 'pages/Home';
import Menu from 'pages/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}
