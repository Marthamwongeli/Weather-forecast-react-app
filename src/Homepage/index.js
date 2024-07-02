import './index.css';

import dribbles from "../images/dribbles.jpg";


const homepage= ()=>{
    
    return(
        <div className='weatherApp'>
            <div className='navbar'>
                <h1>Rayn</h1>
                <input id='button' type='text' placeholder='Enter city name...' onChange={(event) => (event.target.value)} />
                <button>Search</button>
               
             </div>
             <div className='Weatherimages'>
                
                <img src={dribbles} alt="forecast" id='image'></img>
             </div>
             
        </div>
    );
};

export default homepage;



