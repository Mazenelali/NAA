import HomeCard from "../../components/homeCard/HomeCard"
import styles from "./ListContent.module.css"

export default function ListContent({ list, getSelected }) {
  const isGrid = window.innerWidth > 600

  return (
    <div className={isGrid ? styles.gridContainer : styles.listContainer}>
      {list.map((ele) =>
        isGrid ? (
          <HomeCard
            key={ele.id}
            content={ele.name}
            onClick={() => getSelected?.(ele)}
          />
        ) : (
          <div
            key={ele.id}
            className={styles.listItem}
            onClick={() => getSelected?.(ele)}
          >
            <p>{ele.name}</p>
          </div>
        )
      )}
    </div>
  );
}