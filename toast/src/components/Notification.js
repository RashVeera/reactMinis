import React from 'react'
import { AiOutlineCheckCircle,AiOutlineCloseCircle,AiOutlineExclamationCircle,AiFillInfoCircle,AiTwotoneCloseCircle } from "react-icons/ai";


const Notification = ({type='warning',message='File sent successfully',onClose=()=>{}}) => {
    const icons={
        'success':<AiOutlineCheckCircle/>,
        'error':<AiOutlineCloseCircle/>,
        'warning':<AiOutlineExclamationCircle/>,
        'info':<AiFillInfoCircle/>
    }
  return (
    <div className={`message ${type}`}>
        {icons[type]}
        {message}
        <AiTwotoneCloseCircle onClick={()=>{onClose()}}/>
    </div>
  )
}

export default Notification