import { useState } from "react"
import './styles.css'

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    console.log({username})
    console.log({password})
  }

  return (
    <>
      {/* Whole container */}
      <form className= "login_Screen">

        {/* user name & pass container */}
        <div className="login_Container">

          {/* username container */}
          <div className="username_Container">
            <label className="username_label">Username:</label>
            <input type="text" className="username_Input" value={username} onChange={e => setUsername(e.target.value)}/>
          </div>

          {/* password container */}
          <div className="password_Container">
            <label className="password_label">Password:</label>
            <input type="password" className="password_Input" value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
        </div>

        {/* submit button in login container */}
        <button className="submit" type="submit" onClick={handleSubmit} >Submit</button>
      </form>
      
    </>
  )
}

export default App
