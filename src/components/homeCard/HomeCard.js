import './HomeCard.css'
export default function HomeCard({image , onClick}) {
  return (
    <div onClick={onClick} className='card-container'>
        <img src={image} alt=''  style={{objectFit:'cover' , width:'100%' , height:'100%'}} />
    </div>
  )
}
