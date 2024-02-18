import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='row center'>
        <h5 className='header col s12 light'>
          The button has been pressed {count} times!
        </h5>
      </div>
      <div className='row center'>
        <button
          className='btn-large waves-effect waves-light orange'
          onClick={() => {
            setCount(count + 1)
          }}
        >
          Button
        </button>
      </div>
    </div>
  )
}

export default Counter
