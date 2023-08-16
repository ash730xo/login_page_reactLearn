import React from "react"

function App() {

  return (
    <>
      <form className= "login_Screen">
        <div className="login_Container">
          <div className="username_Container">
            <label className="username_label">Username:</label>
            <input type="text" className="username_Input"/>
          </div>
          <div className="password_Container">
            <label className="password_label">Password:</label>
            <input type="text" className="password_Input"/>
          </div>
          <button className="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default App
