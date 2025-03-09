import style from "./HomeCard.module.css"
export default function HomeCard({content , onClick}) {
  return (
    <div onClick={onClick} className={style.cardContainer}>
      <p className={style.label}>{content}</p>
    </div>
  )
}
