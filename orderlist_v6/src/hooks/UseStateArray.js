import { useState } from 'react'

const peopleData = [
  { id: 1, name: 'murat' },
  { id: 2, name: 'namık' },
  { id: 3, name: 'suzan' },
  { id: 4, name: 'eda' },
]

const UseStateArray = () => {
  const [people, setPeople] = useState(peopleData)
  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
        console.log(person)
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>Kaldır</button>
          </div>
        )
      })}
      <button onClick={() => setPeople([])}>Sil</button>
    </>
  )
}
export default UseStateArray
