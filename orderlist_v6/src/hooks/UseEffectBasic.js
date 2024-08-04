import { useEffect, useState } from 'react'

const UseEffectBasic = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('useEffect çalıştı')
    if (value > 0) {
      document.title = `Yeni mesajlar (${value})`
    }
  })

  console.log('Bileşen render edildi')
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue((p) => p + 1)}>Tıklayın</button>
    </>
  )
}
export default UseEffectBasic
