import { useState } from 'react'
import FoodCreate from './FoodCreate'
import FoodList from './FoodList'

const App = () => {
  const [foods, setFoods] = useState([])

  const deleteFoodById = (id) => {
    const updatedFoods = foods.filter((food) => {
      return food.id !== id
    })
    setFoods(updatedFoods)
  }

  const createFood = (title) => {
    const updatedFoods = [...foods, { id: crypto.randomUUID(), title }]
    setFoods(updatedFoods)
  }

  const editFoodById = (id, newTitle) => {
    const updatedFoods = foods.map((food) => {
      if (food.id === id) {
        return { ...food, title: newTitle }
      }
      return food
    })
    setFoods(updatedFoods)
  }

  return (
    <div className='app'>
      <FoodCreate onCreate={createFood} />
      <FoodList onEdit={editFoodById} foods={foods} onDelete={deleteFoodById} />
    </div>
  )
}
export default App
