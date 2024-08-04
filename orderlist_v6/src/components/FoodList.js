import FoodShow from './FoodShow'

const FoodList = ({ foods, onDelete, onEdit }) => {
  const renderedFoods = foods.map((food) => {
    return (
      <FoodShow onEdit={onEdit} key={food.id} food={food} onDelete={onDelete} />
    )
  })
  return <div className='food-list'>{renderedFoods}</div>
}
export default FoodList
