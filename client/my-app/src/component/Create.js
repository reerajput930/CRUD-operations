import React, { useState } from "react";
import "./Create.css";

// for creating a user info card
export default function Create() {
  const [formUser, setFormUser] = useState({
    name: "",
    position: "",
  });
  

  // post request on submitting the form
  // using fetch 
  async function submitted(e) {
    e.preventDefault();

    console.log(formUser);
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formUser),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    
    // after adding the user info,empty the form and start writing again
    setFormUser({ name: "", position: "" });
  }



  return (
    <div className="container--create">
      <form>
        <input
          name="name"
          type="text"
          className="insert--name"
          value={formUser.name}
          onChange={(e) => setFormUser({ ...formUser, name: e.target.value })}
          placeholder="e.g - riya"
        />
        <input
          name="position"
          type="text"
          className="insert--position"
          value={formUser.position}
          onChange={(e) =>
            setFormUser({ ...formUser, position: e.target.value })
          }
          placeholder="e.g - css student"
        />
        <button onClick={submitted}>SUBMIT</button>
      </form>
    </div>
  );
}
