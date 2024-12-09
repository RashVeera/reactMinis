import { useRef, useState } from "react"
import Notification from "../components/Notification"

const useNotification = (position='top-right') =>{
    const [notification,setnotification]=useState([])
    const refId=useRef(0)
    const triggerNotification=(notificationprops)=>{
        const id= ++refId.current
        const newnotification={...notificationprops,id}
        setnotification((prev)=>[...prev,newnotification])
        setTimeout(() => {
            setnotification((prev) => prev.filter((n) => n.id !== id));
          }, notificationprops.duration);
      
    }

    const removeNotification = (id) => {
        setnotification((prev) => prev.filter((n) => n.id !== id));
      };
    
    const NotificationComponent = notification.length>0?
      (   <div className={position}>
      {  notification.map((currentnotification)=> (<Notification 
            key={currentnotification.id}
      {...currentnotification}
      onClose={() => removeNotification(currentnotification.id)}
      />
      ))}
        </div>
      ): null;
    return  {triggerNotification,NotificationComponent} ;
    
}


export default useNotification;
