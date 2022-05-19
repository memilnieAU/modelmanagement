import { useState } from "react";
import axios from 'axios';

export function Model_Create() {
    const modelInfo = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        addresLine1: "",
        addresLine2: "",
        zip: "",
        city: "",
        country: "",
        birthDate: "",
        nationality: "",
        height: 0,
        shoeSize: 0,
        hairColor: "",
        eyeColor: "",
        comments: "",
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
        //debugger
        //Omsæt relevante data
        state.shoeSize = parseInt(state.shoeSize);
        state.height = parseInt(state.height);
        state.birthDate = state.birthDate+"T00:00:00";


        var url = "https://localhost:7181/api/Models";
        //alert(localStorage.getItem("token"))
        axios.post(url,state,{
          headers:{
          'Authorization': 'Bearer ' +  localStorage.getItem("token"),
          //'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJib3NzQG0uZGsiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNYW5hZ2VyIiwiTW9kZWxJZCI6Ii0xIiwibmJmIjoiMTY1Mjc3MTE1NSIsImV4cCI6IjE2NTI4NTc1NTUifQ.zmmFcKt6gpHAP0WDzChdFvW9fG_fP9RA68H9GkGqwlc'
          'Content-Type': 'application/json'
        }})
         .then((Response) =>{
           const responseJson = Response.data;
           alert("Model created")
           //console.log(responseJson);
         } )
         .catch((error) => {alert('Something bad happened: ' + error)});

         
        event.preventDefault(); //Reloader derved ikke siden ved tryk på submit
     };

    return (
        

        <form onSubmit={handleSubmit}>
          <label>
            First name:
             
            <input
              name="firstName"
              type="text"
              value={state.firstName}
              onChange={handleInputChange}/>
          </label>
          <br />
          <label>
            Last name:
            <input
              name="lastName"
              type="text"
              value={state.lastName}
              onChange={handleInputChange}/>
          </label>
          <br />
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={state.email}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              name="phoneNo"
              type="text"
              value={state.phoneNo}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Address line 1:
            <input
              name="addresLine1"
              type="text"
              value={state.addressLine1}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Address line 2:
            <input
              name="addresLine2"
              type="text"
              value={state.addressLine2}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Zip:
            <input
              name="zip"
              type="text"
              value={state.zip}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            City:
            <input
              name="city"
              type="text"
              value={state.city}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
              Country
            <input
              name="country"
              type="text"
              value={state.country}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Birthdate:
            <input
              name="birthDate"
              type="date"
              value={state.birthDate}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Nationality:
            <input
              name="nationality"
              type="text"
              value={state.nationality}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Height:
            <input
              name="height"
              type="text"
              value={state.height}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Shoesize:
            <input
              name="shoeSize"
              type="text"
              value={state.shoeSize}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Hair color:
            <input
              name="hairColor"
              type="text"
              value={state.hairColor}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Eye color:
            <input
              name="eyeColor"
              type="text"
              value={state.eyeColor}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Comments:
            <input
              name="comments"
              type="text"
              value={state.comments}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={state.password}
              onChange={handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
    )
}