import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import userData from "./userData.json"

const UpdateUser = () => {
  const navigate = useNavigate();
  
  const userId = useParams();

  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [company, setCompany] = useState("");
// 
  // useEffect(() => {
    // axios
      // .get(`http://localhost:5000/employees/${userId.abc}`)
      // .then((res) => {
        // setName(res.data.Empname);
        // setSalary(res.data.Empsalary);
        // setCompany(res.data.Empcompany);
      // })
      // .catch(() => {
        // console.log("errrorr");
      // });
  // }, []);
  useEffect(()=>{
    userData.map((ele)=>{
      if(ele.id===userId.abc)
      {
        setName(ele.Empname);
        setSalary(ele.Empsalary);
        setCompany(ele.Empcompany);
      }
    })
  },[])

  const getName = (e) => {
    setName(e.target.value);
  };
  const getSalary = (e) => {
    setSalary(e.target.value);
  };
  const getCompany = (e) => {
    setCompany(e.target.value);
  };
  const formHandler = (e) => {
    e.preventDefault();
    if (name === "" || name.length < 5) {
      alert("Name must be at least minimum 5 length");
    } else if (!Number(salary)) {
      alert("Invalid Number");
    } else if (company === "") {
      alert("Please Type the Company Name");
    } else {
      // let payload = {
        // Empname: name,
        // Empsalary: salary,
        // Empcompany: company,
      // };
      // axios
        // .put(`http://localhost:5000/employees/${userId.abc}`, payload)
        // .then(() => {
          // console.log("Data has been stored");
        // })
        // .catch(() => {
          // console.log("error");
        // });
          userData.map((ele)=>{
            if(ele.id===userId.abc)
            {
                ele.Empname= name
                ele.Empsalary= salary
                ele.Empcompany= company
            }
          })
        
      setName("");
      setSalary("");
      setCompany("");
      navigate("/users");
    }
  };



  return (
    <div id={style.createuser}>
      <div className={style.image}>
        <img src="/employee.png" alt="" />
      </div>
      <form action="" className={style.form}>
        <h1>Update User</h1>
        <table>
          <tr>
            <td className={style.td}>
              <label htmlFor="">Name</label>
            </td>
            <td>
              {/* <label htmlFor="">:</label> */}
              <input
                type="text"
                value={name}
                onChange={getName}
                placeholder="Type Name....."
              />
            </td>
          </tr>
          <tr>
            <td className={style.td}>
              <label htmlFor="">Salary</label>
            </td>
            <td>
              {/* <label htmlFor="">:</label> */}
              <input
                className={style.input}
                type="number"
                value={salary}
                onChange={getSalary}
                placeholder="Type Salary......"
              />
            </td>
          </tr>
          <tr>
            <td className={style.td}>
              <label htmlFor="">Company</label>
            </td>
            <td>
              {/* <label htmlFor="">:</label> */}
              <input
                type="text"
                value={company}
                onChange={getCompany}
                placeholder="Type Company......"
              />
            </td>
          </tr>
        </table>
        <br />
        <button onClick={formHandler}>UPDATE</button>
      </form>
    </div>
  );
};

export default UpdateUser;
