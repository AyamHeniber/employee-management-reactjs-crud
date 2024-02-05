import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UpdateUser from "./UpdateUser";

const Users = () => {
  const navigate = useNavigate();
  const [userData, setData] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/employees`)
      .then((response) => {
        const reversedArray = [];
        for (let i = response.data.length - 1; i >= 0; i--) {
          reversedArray.push(response.data[i]);
        }
        setData(reversedArray);
        console.log(response.data);
      })
      .catch(() => {
        console.log("Errorr Fetch Data");
      });
  }, []);

  const usersall = userData.map((ele, index) => {

    const deleteHandler = (e) => {
      const divli = document.getElementById(`id-${ele.id}`);
      divli.remove();
      axios
        .delete(`http://localhost:5000/employees/${ele.id}`)
        .then(() => {
          console.log("Delete Data Successfully");
        })
        .catch(() => {
          console.log("Errorr Delete Data");
        });
      setData(userData);
    };
    return (
      <div className={style.userdetails} key={ele.id} id={`id-${ele.id}`}>
        <p>Name: {ele.Empname}</p>
        <p>Salary: {ele.Empsalary}</p>
        <p>Company: {ele.Empcompany}</p>
        <div className={style.btn}>
          {/* <button onClick={editHandler}>Edit</button> */}
          <button ><Link className={style.link} to={`/update/${ele.id}`}>Edit</Link></button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    );
  });

  return <div id={style.users}>{usersall}</div>;
};

export default Users;
