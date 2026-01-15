import { useState } from 'react'

import './App.css'

function App() {

  // function handleSubmit(e){
  //   e.preventDefault();

  //   //NORMALLY 
  //   console.log("Name:", e.target.name.value);
  //   console.log("Password:", e.target.password.value);

  //   //WITH FORMDATA
  //   // const formData = new FormData(e.target);

  //   // console.log("Name:", formData.get("name"));
  //   // console.log("Password:", formData.get("password"));
  // }

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    console.log("Name: ", name );
    console.log("Password: ", password);
  }

  return (
    <>
      {/* ---------------CREATED USING FORMDATA--------------- */}
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"/>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <br />

        <input type="submit" value= "Submit"/>
      </form> */}

      {/* ---------------CREATED USING CONTROLLED INPUTS--------------- */}
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          onChange={e => setName(e.target.value)} placeholder='Name'/>
          <br />
          <input type="password" name="" id="" onChange={e => setPassword(e.target.value)} placeholder='Password'/>
          <br />
          <input type="submit" value= "Submit"/>
        </form>
    </>
  )
}

export default App
