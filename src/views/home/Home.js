import style from "./Home.module.css"
import HomeCard from "../../components/homeCard/HomeCard"
import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { request } from "../../manager/backendManager"
import { useDispatch } from "react-redux"

export default function Home() {
  const [listCategoreis, setListCategories] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await request.getCategories({ folderName: 'Minaset Taleb' })
      if (!result.error) setListCategories(result.data.folders)
    }
    fetchCategories()
  }, [])


  return (
    <div>
      <h1 className={style.title} > منصة طالب </h1>
      <div className={style.containerHome}>
        {listCategoreis.map(ele => (
          <React.Fragment key={ele.id}>
            <HomeCard content={ele.name} onClick={() => navigate(`/sector/${ele.name}`)} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
