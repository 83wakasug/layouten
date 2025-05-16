import React from 'react'

const Post = ({title,body}) => {

  
   
      return (
        <div className="flex space-y-5">
       
          <div className='border border-emerald-600 p-16 space-y-7 ' >
            <h2 className= "text-2xl max-w-md truncate whitespace-nowrap overflow-hidden font-bold ">{title}</h2>
            <h3 className=" border-t text-lg p-2" >{body}</h3>
          </div>

        
      </div>
  )

}

export default Post