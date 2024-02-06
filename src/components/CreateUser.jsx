import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import userData from "./userData.json"
const CreateUser = () => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [company, setCompany] = useState("");
  const [id, setId] = useState(0);
  // const [userData1, setUserData] = useState(userData);

  const navigate=useNavigate()

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
      function generateRandomId(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let id = '';
        for (let i = 0; i < length; i++) {
            id += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return id;
    }
    
    // Generate a random ID with length 4
    const randomId = generateRandomId(4);
    
      let payload = {
        id:randomId,
        Empname: name,
        Empsalary: salary,
        Empcompany: company,
      };
      // axios
        // .post("http://localhost:5000/employees", payload)
        // .then(() => {
          // console.log("Data has been stored");
        // })
        // .catch(() => {
          // console.log("error");
        // })

        userData.unshift(payload);

      setName("");
      setSalary("");
      setCompany("");

      navigate("/users")

    }
    
  };

  return (
    <div id={style.createuser}>
      <div className={style.image}>
        <img src="employee.png" alt="" />
      </div>

      <form action="" className={style.form}>
        <h1>Create User</h1>
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
        <button onClick={formHandler}>SUBMIT</button>
      </form>
    </div>
  );
};

export default CreateUser;
