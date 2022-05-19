import { useState } from "react";
import ReactDOM from 'react-dom';
import App from '../App';
import axios from 'axios';
import '../App.css';

export function Login(){

     
    const modelInfo = {
        email: "",
        password: ""
    };
    
    const [state, setState] = useState(modelInfo);

    function handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        setState(state => {
          return {
            ...state,
            [name]: value
          };
        });
      };

     
    function handleSubmit(event) {
        event.preventDefault(); //Reloader derved ikke siden ved tryk på submit
   

    let url = "https://localhost:7181/api/Account/login";
    axios.post(url,state,{
        headers:{
        "Content-Type": "application/json"
        }
    })
    .then((Response) =>{
      //alert("Mit svar: " + Response.status);
      
      if(Response.status ===200){
      let token = Response.data;
      localStorage.setItem("token", token.jwt);
      }
      const root = document.getElementById('root')
      ReactDOM.render(<App /> , root)
   
    } )
    .catch((error) => {alert('Something bad happened: ' + error)});    

    };
    return (
        <div className="center">
        <h1>Login</h1>
        <p>En medarbejder kan loge ind. Der er to typer af medarbejdere: managere og modeller.
Login er det eneste api-kald som kan tilgås uden jwt-acces token. Ved succesfuld login
returneres et jwt-token, som skal sendes med til alle andre api-kald.</p>

<h5 >Boss: </h5>
<p> {"boss@m.dk => asdfQWER"} </p>
       
        
        <form onSubmit={handleSubmit}>
          
          <label className="label-w" >
            Email:
          </label>
          <input
              placeholder={"Your@mail.com"}
              name="email"
              type="text"
              value={state.email}
              onChange={handleInputChange}/>
           
          <br></br>

          <label className="label-w" >
            Password:
            </label>
            <input
            placeholder={"PassWord"}
            name="password"
              type="password"
              value={state.password}
              onChange={handleInputChange} />
          <input type="submit" value="Submit" />
        </form>
              </div>
     
    )
}