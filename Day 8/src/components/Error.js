import React from 'react'
import Header from './Header'
import { useRouteError } from 'react-router-dom'


const Error = () => {
    const error = useRouteError();
      return (
    <div>
        <Header/>
      <h1>{error.data} Ocurred!</h1>
    </div>
  )
}

export default Error
