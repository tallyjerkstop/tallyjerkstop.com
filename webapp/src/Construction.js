import './App.css';
import logo from './media/logo.jpg'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import React, { useEffect, useState } from 'react';


/*this is a different way of creating a react class! It is meant for situations in which you are constantly
updating the state variables, the code for it is minimal, it uses a 'React Hook'*/
function Construction() {

  const [time, setValue] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    }
}, []);

  
  return (
    <div className="contentWrapper">
      <div className="construction">
        <div className="constructionBaby">
          <center>
            <img src={logo} className="logo" alt='logo'></img>
            <br></br>
            {/*IMPORTED clock from npm*/}
            <Clock value={time}></Clock>
            <h2>
              {/*manipulates time date object to extract time*/}
              {String(time.getMonth() + 1).padStart(2, '0') + '/' + String(time.getDate()).padStart(2, '0') + '/' + + String(time.getFullYear())}
              <br></br>
              {String(time.getHours()).padStart(2, '0') + ':' + String(time.getMinutes()).padStart(2, '0')}</h2>
            <h2>COMING SOON</h2>
          </center> 
        </div>
      </div>
    </div>
  );
  
}
export default Construction;