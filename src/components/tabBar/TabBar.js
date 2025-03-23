import styles from "./TabBar.module.css"

export default function TabBar({ list, getSelected, selected }) {
  return (
    <div className={styles.tabBarContainer}>
        {/* <div className={styles.rightArrow}> {'<'} </div> */}
      {list.map(ele => (
        <div key={ele.id} onClick={() => getSelected?.(ele)} className={selected?.id === ele.id ? styles.selected : styles.notSelected}>
          <p>{ele.name}</p>
        </div>
      ))}
      {/* <div className={styles.leftArrow} > {'>'} </div> */}
    </div>
  )
}
