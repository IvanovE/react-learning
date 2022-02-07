import styles from './MealsSummary.module.css'

export const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2 className={styles.title}>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  )
}
