import React from 'react'
import styles from "./Loder.module.css"
import logo from "../../assets/Black.png"

export default function Loder() {
  return (
      <div className={styles.loaderContainer}>
        <img src={logo} />
      </div>
  )
}
