import React from 'react'

const Button = ({ textContent, resource, setResource }) => {
  return (
    <>
        <button
            className={textContent === resource ? "selectedButton" : null}
            onClick={()=>setResource(textContent)}
        >
            {textContent}
        </button>
    </>
  )
}

export default Button