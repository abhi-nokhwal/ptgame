import React, { useRef, useState } from 'react'
import Result from './Result';

function Play(props) {
  
  
  // defined state for setter values
    let [Score, setScore] = useState(0);
   const InputValue = useRef();
  
  //props from App 
     const Name = props.name;
        console.log(Name)
  

  //String Array   
    const StrArray = [
      'hey', 'this', 'revise', 'lazy', 'nice', 'good', 'man',
      'love', 'search', 'dream', 'writer', 'poetry', 'variable',
      'brave', 'education', 'treatment', 'strong', 'street', 'way', 'over',
      'give','never','large','small','line','state','between','program'
       
  ];
  
  
  let [NewValue, setNewValue] = useState(StrArray[2]);   //state for New sentence value
  let [stateVariable, setStateVariable] = useState('');
  // let [show, setshow] = useState(false);

  const synth = window.speechSynthesis; // window mthod for speaker features
  
  
  const StringGenrator = () => {
    
    // console.log("compnent is mounted");
  
    //Randgom string logic
    NewValue = (StrArray[Math.floor(Math.random() * StrArray.length)])
              setNewValue(NewValue);
                  console.log(NewValue);

    //Random value speaking logic 
    const utteranc = new SpeechSynthesisUtterance(NewValue);
                    utteranc.voice = synth.getVoices()[6]; // Select the first available voice
                      synth.speak(utteranc);

                    }
                    
                    
     const handlclick = (event) => {
                      
        // setStateVariable=stateVariable = "";

      //Getting input value from intut
    let CompareValue = InputValue.current.value.toLowerCase();
                          console.log(CompareValue);

      if (NewValue == CompareValue) {
               setScore(s=> s+1)
                   console.log("you won ", Score);
               // return Repeat;
          
                //speaking True statement 
                let Output = new SpeechSynthesisUtterance(`Good your answer is correct press next`);
                             Output.voice = synth.getVoices()[6]; // Select the first available voice
                                synth.speak(Output);
        
        }
        else {
             setScore(s => s - 1)
                console.log("you failed", Score);
        
                      //speaking false statement
                     let Output = new SpeechSynthesisUtterance("oops retry");
                         Output.voice = synth.getVoices()[6]; // Select the first available voice
                           synth.speak(Output);
           
      }
    // returning to blank the input for next entery
          return  InputValue.current.value = "";
            
  }
  const Repeat = () => {
        const utteranc = new SpeechSynthesisUtterance(NewValue);
          utteranc.voice = synth.getVoices()[6]; // Select the first available voice
             synth.speak(utteranc);
    

  }
  //console.log("outside score",Score);
  
//  const Show = () => {
//    setStateVariable(stateVariable = NewValue);
//             console.log(stateVariable);
    
//   }
  
  return( <>
    <div className=' bg-black text-center max-w-screen-md mx-auto min-h-screen font-extrabold'>
            <h1 className='text-6xl pt-20 text-green-700'>PtGame</h1>
                {/* <p className='text-xl text-white mt-5'> This is Your Score : {Score}</p>  */}
     
       
        <input className='mt-4 p-2 rounded text-green-900 font-bold focus:outline-none max-w-full' type='text' placeholder='Enter The Spoked value' ref={InputValue}></input><br></br>
      
          <button className="text-xl  p-2 bg-green-700 rounded text-white" onClick={Repeat}>Repeat</button>
      {/* <button className="text-xl  p-2 bg-green-700 rounded text-white" onClick={Show}>Show</button>  */}
                   <button  className=" ml-2 text-xl  p-2 bg-green-700 rounded-md text-white" onClick={handlclick}>Submit</button>
             <button className='text-xl  p-2 bg-green-700 rounded-md text-white mt-5 ml-2' onClick={StringGenrator}>Next</button> 
      
      
          <p className='text-sm text-white mt-5'>Note : Press next to get spelling for test </p>
            <p className='text-sm  text-white mt-2'>then submit and cheak your score</p>
                
      {/* {handlclick ? <h1 className='text-sm  text-white mt-2'>{Show ? stateVariable : null}</h1> : null} */}

      {
        Score ==3|| Score==10 || Score==15 || Score==20 ?  <Result name={Name} Score={Score} /> :null
      }
    </div>
    </>

  )
}

export default Play
