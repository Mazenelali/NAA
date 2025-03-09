import { useLocation, useParams } from 'react-router-dom'
import './ListCategories.css'

export default function ListCategories() {
  const location =useParams()
  console.log(location)
  return (
    <div>
      ListCategories
    </div>
  )
}
