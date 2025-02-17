import { useState } from 'react'

const FoodCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('')
  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onCreate(title)
    setTitle('')
  }
  return (
    <div className='food-create'>
      <h3>Sipariş Listesi</h3>
      <form onSubmit={handleSubmit}>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}
export default FoodCreate
