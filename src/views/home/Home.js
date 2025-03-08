import "./Home.css"
import HomeCard from "../../components/homeCard/HomeCard"
import LUlogo from "../../assets/LU.jpg"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className='container-home'>
      <HomeCard image={LUlogo} onClick={()=>navigate('/majors')}  />
      <HomeCard  onClick={()=>navigate('/majors')} />   
    </div>
  )
}
