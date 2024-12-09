import React, { useEffect, useRef, useState } from 'react'

const ImageCarousel = () => {
    const [images,setimages]=useState(null)
    const [indexing,setindex]=useState(0)
    const focusin=useRef(null)
    // console.log(focusin.current)
    const handleImages = async ()=>{
        const data = await fetch("https://picsum.photos/v2/list")
        const json = await data.json()
        setimages(json)
    }
    const handleleft =()=>{
        setindex(prevItem=>{
            if(prevItem===0){
                return 29
            }
            else{
                return prevItem-1
            }
        })
    }

    const handleright =()=>{
        setindex(prevItem=>{
            if(prevItem===29){
                return 0
            }
            else{
                return prevItem+1
            }
        })
    }
    useEffect(()=>{
        handleImages()
        focusin.current=setInterval(()=>{
         handleleft()
        },1000)

        return ()=>{
            clearInterval(focusin.current)
        }
    },[])

    if(images===null) return;
  return (
    <div onMouseEnter={()=>clearInterval(focusin.current)}
         onMouseLeave={()=>{focusin.current=setInterval(()=>{
            handleleft()
           },1000)}}
    className='image-carousel'>
        <div onClick={()=>handleleft()} className='leftbutton'>{'<'}</div>
        <div   className='image'>
            <img  
            
            className='source_image' alt='download_images' src={images[indexing].download_url}/> 
        </div>
        <div onClick={()=>handleright()} className='rightbutton'>{'>'}</div>
    </div>
  )
}

export default ImageCarousel