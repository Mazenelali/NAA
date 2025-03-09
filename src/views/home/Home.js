import style from "./Home.module.css"
import HomeCard from "../../components/homeCard/HomeCard"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <h1 className={style.title} > منصة طالب </h1>
      <div className={style.containerHome}>
        <HomeCard content={'التعليم الجامعي'} onClick={() => navigate('/sector/lu')} />
        <HomeCard content={'التعليم المهني'} onClick={() => navigate('/sector/collage')} />
        <HomeCard content={'دورات تدريبية'} onClick={() => navigate('/sector/training')} />
      </div>
    </div>
  )
}
