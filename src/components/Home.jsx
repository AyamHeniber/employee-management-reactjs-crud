import React, { useState } from 'react'
import style from "./home.module.css"
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate= useNavigate()
  const [sname,setSname] = useState("")
  const getSname=(e)=>{
    setSname(e.target.value);
  }
  const searchHandler=()=>{
    if (!sname) {
      alert("Search text is empty. Please provide a search text.");
    }
    else{
    navigate("/search",{state:sname})
    setSname("")}
  }
  return (
    
    <div id={style.nav}>
        <Link to="/" className={style.link1}>CREATE-USER</Link>
        <Link to="/users" className={style.link1}>USERS</Link>
        <div className={style.search}>
        <input value={sname} onChange={getSname} type="text" placeholder='Type ID || Name || Company || Salary.....'/>
        <button onClick={searchHandler}>Search</button>
        </div>
        
    </div>
  )
}

export default Home
