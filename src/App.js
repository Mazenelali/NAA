import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Layout from './Layout';
import ListCategories from './views/listCategories/ListCategories';
import ListContent from './views/ListContent';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path="sector" element={<Outlet/>}>
          <Route path=':sectorId' element={<Outlet/>}>
          <Route index element={<ListCategories/>}/>
          <Route path=":majorId" element={<ListContent/>} />
          </Route>
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

