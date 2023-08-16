import { useState } from "react"
import './styles.css'

function App() {

  function handleChange(e) {
    console.log(event.target.value)
  }

  return (
    <>
      <form className= "login_Screen">
        <div className="login_Container">
          <div className="username_Container">
            <label className="username_label">Username:</label>
            <input type="text" className="username_Input" onChange={handleChange}/>
          </div>
          <div className="password_Container">
            <label className="password_label">Password:</label>
            <input type="password" className="password_Input" onChange={handleChange}/>
          </div>
          <button className="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default App
