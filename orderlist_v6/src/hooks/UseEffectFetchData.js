import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setUsers(data)
    console.log(data)
  }
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <h3>Github Users</h3>
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user
        return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <h4>{login}</h4>
            <a href={html_url}>Profile</a>
          </li>
        )
      })}
    </>
  )
}
export default UseEffectFetchData
