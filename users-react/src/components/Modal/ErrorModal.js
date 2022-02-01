import styles from './ErrorModal.module.css'

import { Button } from "../Button/Button"

export const ErrorModal = ({title, message, setError}) => {
  const closeModal = () => {
    setError(false)
  }

  return (
    <>
      <div className={styles.backdrop} onClick={closeModal}/>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>
            {title}
          </h2>
        </header>
        <div className={styles.content}>
          <p>
            {message}
          </p>
        </div>
        <footer className={styles.footer}>
          <Button type={'button'} onClick={closeModal}>Understand!</Button>
        </footer>
      </div>
    </>
  )
}
