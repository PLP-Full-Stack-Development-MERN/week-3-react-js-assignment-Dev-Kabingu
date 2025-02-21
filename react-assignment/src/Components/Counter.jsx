import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const increment = () =>{
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

  return (
    <>
    <h1 className='mb-2 font-bold text-2xl mt-8'>The Counter</h1>
    <div className='shadow p-4 bg-gray-200 mb-4'>
        <h1 className = 'font-bold mb-2 text-2xl'>Counter</h1>
        <p className = 'font-bold text-xl'>Current Count: {count} </p>
        <div className='m-4'>
            <button onClick={increment} className = 'cursor-pointer py-2 px-4 mx-4 rounded bg-blue-500 text-base font-bold text-white hover:bg-blue-700 transform hover:scale-105 transform-scale duration-300'>Increment</button>
            <button onClick={decrement} className = ' cursor-pointer py-2 px-4 mx-4 rounded bg-blue-500 text-base font-bold text-white hover:bg-blue-700 hover:scale-105'>Decrement</button>
        </div>
    </div>
    </>
  )
}

export default Counter