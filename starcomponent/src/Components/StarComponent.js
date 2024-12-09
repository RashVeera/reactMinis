import React, { useState } from 'react'

const StarComponent = ({starCount=5}) => {
    const [star,setStar]=useState(0)
    const [hover,setHover]=useState(0)


  return (
    <div className='container'>
        {
            new Array(starCount).fill(0).map((value,index)=>{
                return  <span 
                onClick={()=>{setStar(index+1)}} 
                onMouseEnter={()=>{setHover(index+1)}}
                onMouseLeave={()=>setHover(0)}
                className={`star ${((hover===0 && index<star) || index<hover)?'gold':''} `}>&#9733;</span>
            })
        }
    </div>
  )
}

export default StarComponent