import "./NavBar.css"
import arrow from "../../assets/icons/arrow-back-outline.svg"
import whiteLogo from "../../assets/White-cropped.png"
import { useLocation } from "react-router-dom"
export default function NavBar() {

  const location = useLocation()

  return (
    <div className="nav-container">
      {!location.pathname === '/' && <img src={arrow} alt="arrow" style={{ cursor: 'pointer', width: 50, height: 35 }} />}
      <img src={whiteLogo} className="logo-nav" alt="whiteLogo" />
    </div>
  )
}
