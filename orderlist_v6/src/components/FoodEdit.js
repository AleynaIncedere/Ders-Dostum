import { useState } from 'react'

const FoodEdit = ({ food, onSubmit }) => {
  const [title, setTitle] = useState(food.title)
  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // onEdit(food.id, title)
    onSubmit(food.id, title)
  }

  return (
    <form className='food-edit' onSubmit={handleSubmit}>
      <input className='input' value={title} onChange={handleChange} />
      <button className='button'>Save</button>
    </form>
  )
}
export default FoodEdit
