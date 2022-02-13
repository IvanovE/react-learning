import styles from './AvailableMeals.module.css'
import { ItemMeal } from "../ItemMeal/ItemMeal"

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm5',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
  {
    id: 'm6',
    name: 'Salad',
    description: 'Very healthy and useful',
    price: 18.99,
  },
  {
    id: 'm7',
    name: 'Chicken',
    description: 'Like meat?) That thing is for you!',
    price: 18.99,
  },
  {
    id: 'm8',
    name: 'Fish',
    description: 'Delicious!',
    price: 18.99,
  },
  {
    id: 'm9',
    name: 'Bread',
    description: 'Mmm',
    price: 18.99,
  },
  {
    id: 'm10',
    name: 'Pasta',
    description: 'Very tasty!',
    price: 18.99,
  },
  {
    id: 'm11',
    name: 'Pizza',
    description: 'The best!',
    price: 18.99,
  }
]

export const AvailableMeals = () => {
  return (
    <div className={styles.list}>
      {DUMMY_MEALS.map(meal => {
        return <ItemMeal key={meal.id}
                         id={meal.id}
                         price={meal.price}
                         title={meal.name}
                         description={meal.description}
        />
      })}
    </div>
  )
}
