// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()

  function submitHandler(e) {
    e.preventDefault()
    console.log(inputRef.current.value, 'is username')
    // console.dir(e.target)
    console.log(e.target.elements.surname.value, 'is surname')
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Username:</label>
        <input type="text" ref={inputRef} />
        <label htmlFor="surname">Surname:</label>
        <input name="surname" id="surname" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
