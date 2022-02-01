import styles from './Input.module.css'

export const Input = ({label, type, value, setValue}) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <input
        type={type}
        className={styles.input}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}
