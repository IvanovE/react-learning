import styles from './UserItem.module.css'

export const UserItem = ({name, age}) => {
  return (
    <div className={styles.item}>
      {`${name} (${age} years)`}
    </div>
  )
}
