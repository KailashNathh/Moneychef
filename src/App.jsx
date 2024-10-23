 import React from "react";
  import logo from './arrow.png';
  import RegistrationForm from './reg'
   const Appl=()=>{
     
    return(<>
    <div className="main">
    <div className="sign">
        <img src={logo}></img> 
        <h1><strong> sign in</strong></h1>
    </div>
    <div className="cont">
        <h2>welcome Back</h2>
        <p>Hello there, sign in to continue</p>
        <table> 
        <tr> <td> <label htmlFor="uname">username or email</label></td> </tr>
        <tr> <td><input type="text" name="name" placeholder="Enter your user name or email" /></td></tr>
        <tr>  <td><label htmlFor="pass">Password</label></td></tr>
        <tr> <td> <input type="password" name="pass" placeholder="Enter your password" /></td></tr>
        <tr><td className="froget">Forget Password</td></tr>
        <tr><td><button ><strong>sign in</strong></button></td></tr>
         </table>
        <div className="last">Don't have an accoutn? <a href='/reg'>sinup</a>
        </div>
     </div>
   </div>
    </>)
 }
 export default Appl;