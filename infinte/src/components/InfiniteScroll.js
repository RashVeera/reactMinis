import React, { useEffect, useState } from 'react'
import load from "../assets/loading.png"

const InfiniteScroll = () => {
    const [coinData,setcoinData]=useState([])
    const [page,setpage]=useState(1)
    const [loading,setloading]=useState(false)

    const handlecryptoapi = async ()=>{
       try{
        setloading(true)
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=12`);
        const data = await response.json()
        setcoinData((prevdata)=>{
            const newdata=[...prevdata,...data]
            return newdata
        })   
       }     
       catch(e){
        console.log(e.message)
       }
       finally{
        setloading(false)
       }
    }

    const onscroll =()=>{
        if(document.documentElement.scrollTop+window.innerHeight + 1 >= document.documentElement.scrollHeight){
            setpage((prev)=>prev+1)
        }
    }

    useEffect(()=>{
        handlecryptoapi()
        window.addEventListener('scroll',onscroll)

        return ()=>{
            window.removeEventListener('scroll',onscroll)
        }
    },[page])
  return (
    <div className='container'>
        {coinData.map((coin)=>{
           return (<div className='single__container'>
                <img src={coin.download_url} />
                <span>{coin.author}</span>
            </div>)
        })}
        {loading && <img className='loading' alt='load' src={load} />}
    </div>
  )
}

export default InfiniteScroll