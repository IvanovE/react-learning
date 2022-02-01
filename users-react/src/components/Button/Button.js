import styles from './Button.module.css'

export const Button = ({type, children, onClick=null}) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
