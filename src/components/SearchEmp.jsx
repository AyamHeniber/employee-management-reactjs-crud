import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SearchEmp = () => {
  const navigate = useNavigate();
  const userName = useLocation().state;
  console.log(userName);
  const [userData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/employees`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
        const foundUser = response.data.find(
          (user) =>
          user.id.toUpperCase()===userName.toUpperCase()||
            user.Empname.toUpperCase() === userName.toUpperCase() ||
            user.Empsalary.toString() === userName.toString() ||
            user.Empcompany.toUpperCase() === userName.toUpperCase()
        );
        setNotFound(!foundUser);
      })
      .catch((error) => {
        console.error("Error Fetch Data", error);
        setLoading(false);
      });
  }, [userName]);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:5000/employees/${id}`)
      .then(() => {
        console.log("Delete Data Successfully");
        setNotFound(true);
      })
      .catch((error) => {
        console.error("Error Deleting Data", error);
      });
  };

  const usersall = userData.map((ele) => {
    if (
        ele.id.toUpperCase()===userName.toUpperCase()||
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
            <button onClick={() => deleteHandler(ele.id)}>Delete</button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <div id={style.users}>
      {!loading && !notFound && usersall}
      {!loading && notFound && <h1>User not found...</h1>}
    </div>
  );
};

export default SearchEmp;
