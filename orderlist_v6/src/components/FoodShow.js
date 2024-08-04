import { useState } from 'react'
import FoodEdit from './FoodEdit'

const FoodShow = ({ food, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false)
  const handleDeleteClick = () => {
    onDelete(food.id)
  }

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false)
    onEdit(id, newTitle)
  }

  const handleEditClick = () => {
    setShowEdit((pre) => !pre)
  }
  let content = showEdit ? (
    <FoodEdit food={food} onSubmit={handleSubmit} />
  ) : (
    <h3>{food.title}</h3>
  )
  return (
    <div className='food-show'>
      <div
        className='food-background'
        style={{
          backgroundImage: `url(https://picsum.photos/seed/${food.id}/200/300)`,
        }}
      ></div>
      <div className='food-content'>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}
export default FoodShow
