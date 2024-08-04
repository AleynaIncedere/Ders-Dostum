import { useState } from 'react'

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  return (
    <>
      <h1>{text || 'murat'}</h1>
      <button onClick={() => setIsError((s) => !s)}>Toggle Error</button>
      {isError && <h1>Error....</h1>}
      {isError ? (
        <p>hata var...</p>
      ) : (
        <div>
          <h2>Hata Yok</h2>
        </div>
      )}
      {!text && <h1>Hello World</h1>}
    </>
  )
}
export default ShortCircuit
