import React from 'react'
import Button from './Button'

const Form = ({ resource, setResource }) => {
  return (
    <>
        <form onClick={(e)=>e.preventDefault()}>
            <Button
                textContent="users"
                resource={resource}
                setResource={setResource}
            />
            <Button
                textContent="posts"
                resource={resource}
                setResource={setResource}
            />
            <Button
                textContent="comments"
                resource={resource}
                setResource={setResource}
            />
        </form>
    </>
  )
}

export default Form