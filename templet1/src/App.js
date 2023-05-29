import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
    <div className="for-whole">
      <div className="for-data">
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
        <h2 className="for-heading">I also deliver below given benefits to everyone!!</h2>
        {/* <spam></spam>  Below is an example */}  
        <ol>
            <li>
                <span className="for-highlighting">Skin Conditions:</span> Pongamia oil is traditionally used topically to treat various skin
                    
                conditions. It has antimicrobial and anti-inflammatory properties that may help
                    
                soothe and heal skin allments such as eczema, psoriasis, dermatitis, and fungal
                    
                infections. It is also believed to promote wound healing and prevent the growth of bacteria on the skin.
            </li>
            <li><span className="for-highlighting">Joint Pain and Inflammation:</span>Pongamia oil is sometimes used in traditional

                Ayurvedic medicine for relieving joint pain and inflammation associated with
                    
                conditions like arthritis. It is believed to have anti-inflammatory properties that may
                    
                help reduce pain and swelling.
            </li>                
                
            <li> Hair Care Pongamia oil is often used in hair care products due to its nourishing

                 properties. It is believed to strengthen hair follicles, promote hair growth, and
                    
            </li>
          </ol>
    </div> 
  </div>
    </>
  );
}


export default App;
