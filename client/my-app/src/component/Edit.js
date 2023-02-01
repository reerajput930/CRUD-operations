import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Navigationbar.css";

export default function Edit() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [done,setdone] = useState()
  const params = useParams();
  console.log(params.id.toString());
 

  // feching the selected user with get method
  useEffect(() => {
    async function fetchData(url) {
      setLoading(false);
      const response = await fetch(url);
      const userInfo = await response.json();
      console.log(userInfo);
      setUser(userInfo);
      setLoading(true);
    }
    fetchData(`http://localhost:5000/users/${params.id}`);
  }, []);

  
  // update the user info in input element
  function update(value) {
     setdone(false)
    // don't know about this code working
    return setUser((prev) => {
      return { ...prev, ...value };
    });
  }

  //put method is used for updation
  async function submitted(e) {
     e.preventDefault()
    console.log(user);
    await fetch(`http://localhost:5000/users/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    setdone(true)
  }

  return (
    <div className="container--edit">
      <form>
        <label htmlFor="">NAME</label>
        <input
          type="text"
          id="name"
          value={user.name}
          onChange={(e) => update({ name: e.target.value })}
        />
        <label htmlFor="">STATUS</label>
        <input
          type="text"
          id="position"
          value={user.position}
          onChange={(e) => update({ position: e.target.value })}
        />
        <button onClick={submitted}>{
          done?"EDITED":"EDIT"

        }</button>
        <Link to={`/allusers`}>
          <button>BACK</button>
        </Link>
      </form>
    </div>
  );
}
