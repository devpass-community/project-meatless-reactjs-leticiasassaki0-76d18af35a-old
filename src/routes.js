import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/restaurant/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default routes;
