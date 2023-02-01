import React from "react";
import { useEffect, useState } from "react";
import "./RecordList.css";
import "./style.css"
// using <Link/> to propagate to next page,instead of  <a/>
import { Link } from "react-router-dom";

export default function RecordList() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // to get all the users info
  useEffect(() => {
    async function getApi(url) {
      setLoading(false);
      const response = await fetch(url);
      let data = await response.json();

      setAllUsers(data);
      setLoading(true);
    }
    getApi("http://localhost:5000/users");
  }, []);

  let userArray = [];
  if (loading) {
    userArray = allUsers.users.map((object) => {
      return (
        <div className="card">
          <div className="upper-part">
            <p>
              <b>Name : </b> {object.name}{" "}
            </p>
            <p>
              <b>Status :</b>
              {object.position}
            </p>
          </div>
          <div className="lower-part">
            {/* this link directing toword the edit page */}
            <Link to={`/allusers/edit/${object._id}`}>
              <button>EDIT</button>
            </Link>
            <button
              // del method here
              onClick={async () => {
                await fetch(`http://localhost:5000/users/${object._id}`, {
                  method: "DELETE",
                }).then(() => console.log("done"));
                console.log(object._id);
                window.location.reload();
              }}
            >
              DELETE
            </button>
          </div>
        </div>
      );
    });
  }

  return <div className="container--allUsers">{userArray}</div>;
}
