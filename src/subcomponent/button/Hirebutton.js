// import React from 'react'
// import './Hirebutton.css'



// const Hirebutton = (prop) => {
 



//   return (
//     <div><button id='btn' className='btn'>{prop.text}</button></div>
    
//   );
  
// }


// export default Hirebutton;

// Hirebutton.js
import React from 'react';
import './Hirebutton.css';

const Hirebutton = ({ text, onClick }) => {
  return (
    <div>
      <button id='btn' className='btn' onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Hirebutton;
