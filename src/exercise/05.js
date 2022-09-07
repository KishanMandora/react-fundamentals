// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({className = '', styles = {}, name = 'default box', size}) => {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: 'italic', ...styles}}
    >
      {name}
    </div>
  )
}

const smallBox = (
  <Box
    size="small"
    styles={{backgroundColor: 'lightblue'}}
    name="small lightblue box"
  />
)

const mediumBox = (
  <Box
    size="medium"
    styles={{backgroundColor: 'pink'}}
    name=" medium pink box"
  />
)
const largeBox = (
  <Box
    size="large"
    styles={{backgroundColor: 'orange'}}
    name=" large orange box"
  />
)

const sizeLess = <Box />

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {sizeLess}
    </div>
  )
}

export default App
