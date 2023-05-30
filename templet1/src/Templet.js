import './templet.css';
import React from 'react';

function Templet() {
  return (
    <>
    <div className="background">
      <div className="for-whole for-data">
        <ul>
            <li>Hey👋 !</li> 

            <li>👉 My Name is <span className='for-hightlighting-fetcheddata'> Beach Tree </span></li>

            <li>👉 I will also be called as <span className='for-hightlighting-fetcheddata'>Pongame Oil</span> scientifically </li>
                
            <li>👉 My Height is <span className='for-hightlighting-fetcheddata'>22 meters</span> Approximate age of mine is 15 years  </li>

            <li>👉 I am located at GPS location of <span className='for-hightlighting-fetcheddata'>13.626625(Lattitude)</span> and <span className='for-hightlighting-fetcheddata'>79.395722(Longitude) </span></li>

            <li>👉 I have absorbed <span className='for-hightlighting-fetcheddata'>6.48 </span>tons of carbon till today
                will absorb <span className='for-hightlighting-fetcheddata'>0.43</span> tons of average carbon every year  </li>
                
            <li>👉 My carbon absorption capacity will increase as I grow! </li>
        </ul>
      </div>
    </div> 
    <div for-bottom>
        <h2></h2>
    </div>
    
    </>
  );
}


export default Templet;
