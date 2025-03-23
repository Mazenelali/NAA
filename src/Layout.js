import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";
import { useSelector } from "react-redux";
import Loder from "./components/loder/Loder";

export default function Layout() {
  const {isShowLoader} = useSelector((state)=>state.global)

  return (
    <div>
        <NavBar/>
        <div style={{ minHeight:'75vh' , position :'relative'}}>
          {isShowLoader && <Loder/>}
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
