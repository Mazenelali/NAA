import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { request } from "../../manager/backendManager"
import ContentCard from "../../components/cardContent/ContentCard"
export default function Content() {
    const location = useParams()
    const [contents, setContents] = useState([])

    useEffect(()=>{
        const getContent = async()=>{
            const result = await request.getCategories({folderName:location.majorId})
            if(!request.error)setContents(result.data.files)
        }
    getContent() 
    },[])

  return (
    <div style={{padding:'20px'}}>   
        <ContentCard files={contents}/>
    </div>
  )
}
