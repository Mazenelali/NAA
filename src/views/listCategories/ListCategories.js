import { useLocation, useNavigate, useParams } from 'react-router-dom'
import './ListCategories.css'
import TabBar from '../../components/tabBar/TabBar'
import { useEffect, useState } from 'react'
import { request } from '../../manager/backendManager'
import ListContent from './ListContent'
import Loder from '../../components/loder/Loder'

export default function ListCategories() {
  const [data, setData] = useState({})
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [subDataList, setSubDataList] = useState([])
  const [loader , setLoader] = useState(false)
  const location = useParams()
  const navigate =useNavigate()

  const getSubList = async (name) => {
    setLoader(true)
    const result = await request.getCategories({ folderName: name },true)
    if (!result.error) {
      setSubDataList(result.data.folders)
    }
    setLoader(false)
  }

  useEffect(() => {
    async function getDataNest() {
      const result = await request.getCategories({ folderName: location.sectorId },true)
      if (!result.error) {
        setData(result.data)
        const firstEle = result?.data?.folders?.[0]
        if (firstEle) {
          setSelectedCategory(firstEle)
          getSubList(firstEle.name)
        }
      }
    }
    getDataNest()
  }, [])

  const handleSelect = (data)=>{
    if(data.name === selectedCategory.name)return
    setSelectedCategory(data)
    getSubList(data.name)
  }

  const handleClickContent = (ele)=>{
    navigate(`${ele.name}`)
  }

  return (
    <div>
      <TabBar getSelected={handleSelect} list={data?.folders || []} selected={selectedCategory} />
      {loader ?<Loder/> :<ListContent list={subDataList} getSelected={handleClickContent}  />}
    </div>
  )
}
