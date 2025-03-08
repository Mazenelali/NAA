import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Layout from './Layout';
import ListCategories from './views/listCategories/ListCategories';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path="majors" element={<> <ListCategories/> <Outlet/></>}>
          <Route path=":majorId" element={<>hi</>} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

