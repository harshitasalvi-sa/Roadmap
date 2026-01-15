import React from 'react'
import { useRouteError } from 'react-router'
import "./Error.css"

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>Error Occurred</h1>
        <div className='err-div'>
            <p>Error : {err.error.message}</p>
            <p>{err.status} - {err.statusText}</p>
        </div>
    </div>
  )
}

export default Error