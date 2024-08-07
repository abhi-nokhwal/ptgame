import React, { useState,useRef } from 'react';
import Play from './Play.jsx';

function App() {
  const [show, setshow] = useState(false);
   let [Username,setUsername]= useState()
     const InputValue = useRef();
                 
  
  
  
  const handleStart = () => {
    setUsername(Username=InputValue.current.value)
      setshow(true)
        console.log(Username);
    
  }
  


  return (
    <div className='bg-black text-center h-screen'>

      {show ? null : <input className='mt-48 m-auto p-2 rounded text-green-900 font-bold focus:outline-none w-1/2' type='text' placeholder='Username ? ?' ref={InputValue}></input> }  <br></br> 
      {show ? null : <button className=' mt-5 bg-green-900 text-white p-3 rounded-md text-2xl text-center align-middle flex-reverse ' onClick={handleStart}>start Game</button>}

          {show ? <Play name={Username} /> :null } 
      
    </div>
  )
}

export default App
