
import './App.css';
import Navbar from './components/Navbar';
import Formtext from './components/Formtext';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App(props) {
const[mode, changeMode]=useState('light');
const[alert, changeAlert]=useState(null);
const alertData=(massage,type)=>
{
  changeAlert({
         msg:massage,
         types:type
  })
  setTimeout(()=>{
    changeAlert(null);
  },1500);
}
const togalDode=()=>
{
  if(mode==='light')
  {
    changeMode('dark');
    document.body.style.backgroundColor= '#042743';
    alertData("dark mode has been enabled", "dark")
    // document.title="TEXT COUNTER-DARK MODE" 
  }
  else
  {
    changeMode('light');
    document.body.style.backgroundColor= 'white';
    alertData("light mode has been enabled", "dark")
    // document.title="TEXT COUNTER-LIGHT MODE"
  }
} 
const redDode=()=>
{
  if(mode==='light')
  {
    changeMode('red');
    document.body.style.backgroundColor= '#436624';
    alertData("red mode has been enabled", "success") 
  }
  else
  {
    changeMode('light');
    document.body.style.backgroundColor= 'white';
    alertData("light mode has been enabled", "success")
  }
} 
const pinkDode=()=>
{
  if(mode==='light')
  {
    changeMode('pink');
    document.body.style.backgroundColor= 'pink';
    alertData("pink mode has been enabled", "success") 
  }
  else
  {
    changeMode('light');
    document.body.style.backgroundColor= 'white';
    alertData("light mode has been enabled", "success")
  }
} 
  return(
    <>      
        <Router>
        <Navbar title="TEXT_COUNTER" Formtext="Form"  mode={mode} togalMode={togalDode} redMode={redDode} pinkMode={pinkDode} />
        <Alert alert={alert}/>
        <div className="container">
        <Routes>

          <Route  path="/Form" element={<Formtext heading="ENTER TEXT AND CHANGE TEXT INTO UPERCASE" mode={mode} alertData={alertData}/>}/>
         
             
         
        </Routes>  
       </div>
       </Router>
    </>

  );
}

export default App;
