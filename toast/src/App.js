import './App.css';
import useNotification from './hooks/useNotification';

function App() {
  const {triggerNotification,NotificationComponent}=useNotification('top-right')
  return (
    <div className="App">
      <div className='buttons'>
      <button onClick={()=>triggerNotification({
        type:'success',message:'File sent successfully',duration:"3000"
      })
      
      }>Trigger Success</button>
       <button onClick={()=>triggerNotification({
        type:'error',message:'Failed to send file',duration:"3000"
      })
      }>Trigger Error</button>
             <button onClick={()=>triggerNotification({
        type:'warning',message:'Warning message',duration:"3000"
      })
      }>Trigger Warning</button>
                   <button onClick={()=>triggerNotification({
        type:'info',message:'File has been sent',duration:"3000"
      })
      }>Trigger Info</button>
      </div>
      {NotificationComponent}
    </div>
  );
}

export default App;
