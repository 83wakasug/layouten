import React from 'react'

export const Button = (props) => {
 const handleClick = () => console.log(props.consoleTxt)

  return (
    <button className="mb-0 h-10 bg-violet-600 text-white px-4 rounded " onClick={handleClick} type="button">{props.btnTxt}</button>
  )
}
