// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [petname, setPetname] = React.useState('')

  const checkLowerCase = petname !== petname.toLowerCase()

  function submitHandler(e) {
    e.preventDefault()
    console.log(inputRef.current.value, 'is username')
    // console.dir(e.target)
    console.log(e.target.elements.surname.value, 'is surname')
  }

  const displayFlex = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: '100%',
        ...displayFlex,
      }}
    >
      <form onSubmit={submitHandler}>
        <div
          style={{
            margin: '10px auto',
            padding: 0,
            width: '30%',
            ...displayFlex,
          }}
        >
          <label>Username:</label>
          <input type="text" ref={inputRef} />
          <br />
          <label htmlFor="surname">Surname:</label>
          <input name="surname" id="surname" type="text" />
          <br />
          <label htmlFor="petname">Petname:</label>
          <input
            name="petname"
            id="petname"
            type="text"
            value={petname}
            onChange={e => setPetname(e.target.value.toLowerCase())}
          />
          {checkLowerCase && (
            <span style={{color: 'red'}}>
              <b> Petname should be lowercase </b>
            </span>
          )}
          <button disabled={checkLowerCase} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
