import "./NavBar.css"
import arrow from "../../assets/icons/arrow-back-outline.svg"
import whiteLogo from "../../assets/White-cropped.png"
import { useLocation , useNavigate } from "react-router-dom"
export default function NavBar() {

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="nav-container">
      {location.pathname !== '/' && <img src={arrow} alt="arrow" className="arrow" onClick={()=>navigate(-1)} />}
      <img src={whiteLogo} className="logo-nav" alt="whiteLogo" />
    </div>
  )
}
