import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Layout from './Layout';
import ListCategories from './views/listCategories/ListCategories';
import ListContent from './views/ListContent';
import Login from './views/login/Login';

export default function App() {

  const isLoggedIn = localStorage.getItem('MINASSAT_TALEB_LOGIN')


    return (
      <BrowserRouter>
        <Routes>
      
      { !isLoggedIn &&  <Route path="/login" element={<Login />} />}
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="sector" element={<Outlet />}>
              <Route path=':sectorId' element={<Outlet />}>
                <Route index element={<ListCategories />} />
                <Route path=":majorId" element={<ListContent />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<><Layout /> <Home/></>} />
        </Routes>
      </BrowserRouter>
    );

}

