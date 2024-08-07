import React from 'react'

function Result(props) {


    console.log("massase",props.name)
  return (
      <div className='bg-white max-w-screen-sm m-auto' >
          
          <p className='mt-5 '>Congratulation {props.name} <br></br> Your Level Inhanced {props.Score}x</p>
          <p>Press next to level up</p>
          {/* <p>Username : {props.name}</p> */}
          {/* <p>Score { props.Score}</p> */}

          
      
    </div>
  )
}

export default Result
