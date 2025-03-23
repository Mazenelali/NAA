import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Layout from './Layout';
import ListCategories from './views/listCategories/ListCategories';
import ListContent from './views/listCategories/ListContent';
import Login from './views/login/Login';
import { useState } from 'react';
import Content from './views/content/Content';

export default function App() {
  const [isLoggedIn,setIsloggedIn]=useState(localStorage.getItem('MINASSAT_TALEB_LOGIN'))


  if (isLoggedIn) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="sector" element={<Outlet />}>
              <Route path=':sectorId' element={<Outlet />}>
                <Route index element={<ListCategories />} />
                <Route path=":majorId" element={<Content />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<>Not found !! </>} />
        </Routes>
      </BrowserRouter>
    )
  } else {
    return (
      <BrowserRouter>
        <Routes>
           <Route path="/login" element={<Login getIsLogin={setIsloggedIn} />} />
           <Route path="*"   element={<Login getIsLogin={setIsloggedIn} />}  />
        </Routes>
      </BrowserRouter>
    )
  }

}

