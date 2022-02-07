import styles from './Header.module.css'
import mainImage from '../../assets/img/main-image.jpg'

import { HeaderCartButton } from "./HeaderCartButton/HeaderCartButton"

export const Header = ({setCartIsShown}) => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Kitchen</h1>
        <HeaderCartButton setCartIsShown={setCartIsShown} />
      </header>
      <div className={styles['image-container']}>
        <img src={mainImage} alt="React Kitchen" className={styles['main-image']}/>
      </div>
    </>
  )
}
