import { useLocation, useNavigate, useParams } from 'react-router-dom'
import './ListCategories.css'
import TabBar from '../../components/tabBar/TabBar'
import { useEffect, useState } from 'react'
import { request } from '../../manager/backendManager'
import ListContent from './ListContent'

export default function ListCategories() {
  const [data, setData] = useState({})
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [subDataList, setSubDataList] = useState([])

  const location = useParams()
  const navigate =useNavigate()

  const getSubList = async (name) => {
    const result = await request.getCategories({ folderName: name })
    if (!result.error) {
      setSubDataList(result.data.folders)
    }
  }

  useEffect(() => {
    async function getDataNest() {
      const result = await request.getCategories({ folderName: location.sectorId })
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
    setSelectedCategory(data)
    getSubList(data.name)
  }

  const handleClickContent = (ele)=>{
    navigate(`${ele.name}`)
  }

  return (
    <div>
      <TabBar getSelected={handleSelect} list={data?.folders || []} selected={selectedCategory} />
      <ListContent list={subDataList} getSelected={handleClickContent}  />
    </div>
  )
}
