import styles from './Backdrop.module.css'

export const Backdrop = ({setCartIsShown}) => {
  return <div className={styles.backdrop} onClick={() => setCartIsShown(false)} />
}
