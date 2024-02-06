import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import userData from "./userData.json";

const SearchEmp = () => {
  const navigate = useNavigate();
  const userName = useLocation().state;
  console.log(userName);
  // const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const foundUser = userData.find(
      (user) =>
        user.id.toUpperCase() === userName.toUpperCase() ||
        user.Empname.toUpperCase() === userName.toUpperCase() ||
        user.Empsalary.toString() === userName.toString() ||
        user.Empcompany.toUpperCase() === userName.toUpperCase()
    );
    setNotFound(!foundUser);
    console.log(foundUser);
  }, [userName]);

  // useEffect(() => {
  // axios
  // .get(`http://localhost:5000/employees`)
  // .then((response) => {
  // setData(response.data);
  // setLoading(false);
  // const foundUser = response.data.find(
  // (user) =>
  // user.id.toUpperCase()===userName.toUpperCase()||
  // user.Empname.toUpperCase() === userName.toUpperCase() ||
  // user.Empsalary.toString() === userName.toString() ||
  // user.Empcompany.toUpperCase() === userName.toUpperCase()
  // );
  // setNotFound(!foundUser);
  // })
  // .catch((error) => {
  // console.error("Error Fetch Data", error);
  // setLoading(false);
  // });
  // }, [userName]);

  // const deleteHandler = (id) => {
  // axios
  // .delete(`http://localhost:5000/employees/${id}`)
  // .then(() => {
  // console.log("Delete Data Successfully");
  // setNotFound(true);
  // })
  // .catch((error) => {
  // console.error("Error Deleting Data", error);
  // });
  // };
  //  console.log(notFound);

  const usersall=userData.map((ele) => {
    const deleteHandler = (e) => {
      const divli = document.getElementById(`id-${ele.id}`);
      divli.remove();
      // axios
      // .delete(`http://localhost:5000/employees/${ele.id}`)
      // .then(() => {
      // console.log("Delete Data Successfully");
      // })
      // .catch(() => {
      // console.log("Errorr Delete Data");
      // });
      // setData(userData);
      let objectToRemove = {
        Empname: `${ele.Empname}`,
        Empsalary: `${ele.Empsalary}`,
        Empcompany: `${ele.Empcompany}`,
        id: `${ele.id}`,
      };
      // Using filter to remove the object from the array
      userData = userData.filter(
        (item) => JSON.stringify(item) !== JSON.stringify(objectToRemove)
      );
      //  setNotFound(true);
    };
    if (
      ele.id.toUpperCase() === userName.toUpperCase() ||
      ele.Empname.toUpperCase() === userName.toUpperCase() ||
      ele.Empsalary.toString() === userName.toString() ||
      ele.Empcompany.toUpperCase() === userName.toUpperCase()
    ) {
      return (
        <div className={style.userdetails} key={ele.id} id={`id-${ele.id}`}>
          <p>Name: {ele.Empname}</p>
          <p>Salary: {ele.Empsalary}</p>
          <p>Company: {ele.Empcompany}</p>
          <div className={style.btn}>
            <button>
              <Link className={style.link} to={`/update/${ele.id}`}>
                Edit
              </Link>
            </button>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </div>
      );
    }
  })
  return (
    <div id={style.users}>
      {!notFound && usersall}
      {notFound && <h1>User not found...</h1>}
    </div>
  );
};

export default SearchEmp;
