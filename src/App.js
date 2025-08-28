
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// let name = "Harry";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
}from "react-router-dom";
function App() {
  const [alert,setAlert] =useState(null);
  const [mode,setMode] =useState('light');//whether dark mode is unable or not
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
     setTimeout(()=>{
        setAlert(null);
      },1500)
  }
  // ---------------------toggle buttons---------------------------
//   const removeBodyClasses=()=>{
//     document.body.classList.remove('bg-light')
//     document.body.classList.remove('bg-dark')
//     document.body.classList.remove('bg-primary')
//     document.body.classList.remove('bg-success')
//     document.body.classList.remove('bg-warning')
//     document.body.classList.remove('bg-danger')

//   }
//  const toggleMode = (cls) => {
//   // console.log(cls);
//   removeBodyClasses();
//   document.body.classList.add('bg-'+cls)
//   if (mode === 'light') {
//     setMode('dark');
//     document.body.style.backgroundColor = "#012135ff "; 
//     document.body.style.color = "white";
//     document.getElementById('myBox').style.backgroundColor="#13466e";
//      document.getElementById('myBox').style.color="white";
//      showAlert("Dark Mode has been enabled","success")
//      document.title='TextUtils-Dark Mode';
//      setInterval(()=>{
//       document.title='TextUtils is a Amazing Mode';
//      },2000)
//      setInterval(()=>{
//       document.title='TextUtils install now';
//      },1500)
//   } else {
//     setMode('light');
//     document.body.style.backgroundColor = "white"; 
//     document.body.style.color = "black";
//     document.getElementById('myBox').style.backgroundColor="white";
//      document.getElementById('myBox').style.color="black";
//       showAlert("Light Mode has been enabled","success")
//       document.title='TextUtils-Light Mode';
//   }
// };
 const toggleMode = () => {
  // console.log(cls);
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = "#012135ff "; 
    document.body.style.color = "white";
    document.getElementById('myBox').style.backgroundColor="#13466e";
     document.getElementById('myBox').style.color="white";
     showAlert("Dark Mode has been enabled","success")
     document.title='TextUtils-Dark Mode';
     setInterval(()=>{
      document.title='TextUtils is a Amazing Mode';
     },2000)
     setInterval(()=>{
      document.title='TextUtils install now';
     },1500)
  } else {
    setMode('light');
    document.body.style.backgroundColor = "white"; 
    document.body.style.color = "black";
    document.getElementById('myBox').style.backgroundColor="white";
     document.getElementById('myBox').style.color="black";
      showAlert("Light Mode has been enabled","success")
      document.title='TextUtils-Light Mode';
  }
};


  return (
    // <>
    //   <nav>
    //     <li>Name</li>
    //     <li>About</li>
    //     <li>Contact</li>
    //   </nav>
    //   <img src="" alt="" />
    //   <div className="container">
    //     <h1>Hello {name}</h1>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus
    //       unde quibusdam impedit eos beatae laudantium earum quia temporibus id.
    //     </p>
    //   </div>
    // </>
    <>
    <Router>
<Navbar title="TextUtils" aboutText="About " mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
  <Routes>
    {/* /users-->component1
    /users/home--->component2
    in second may be reach to users site so exact path use */}
    <Route exact path="/about"  element={<About mode={mode} />}/>
    <Route exact path="/"  element={<TextForm showAlert={showAlert} heading="Try TextUtils- Word Counter,Character Counter,Remove Extra Spaces" mode={mode} />}>
    </Route>
  </Routes>
  {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below"/> */}
  {/* <About/> */}
</div>
</Router>
</>
  );
}

export default App;
