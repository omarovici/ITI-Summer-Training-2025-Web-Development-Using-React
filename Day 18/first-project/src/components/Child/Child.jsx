import React from 'react'

export default function Child(props) {
    console.log(props);
  return (
    <h1 className='bg-warning'>User Name:{props.data}</h1>
  )
}
