import React from 'react'
import {Button} from "./Button";


const TagList = () => {


  return (
    <div>
      {
        Array.from({length:9 },(_, index) => <Button  key={index} consoleTxt="Button clicked!" btnTxt ="Click Tag BTN" />)
      }      
    </div>

  )
}



export default TagList