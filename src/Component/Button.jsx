import React from 'react'

export const Button = (props) => {
 const handleClick = () => console.log(props.consoleTxt)

  return (
    <button onClick={handleClick} type="button">{props.btnTxt}</button>
  )
}
