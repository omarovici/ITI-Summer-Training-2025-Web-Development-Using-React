import React, { useState } from 'react'
import Child from '../Child/child'

export default function Parent() {
  let [userName, setUserName] = useState("Omar")
  return (
    <>
      <h1>Thats the state and props like in the session</h1>
      <div className='text-2x1 bg-info p-4'>
        <h1>Parent</h1>
        <Child data={userName} />
      </div>
    </>
  )
}
