import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const UserFeed = () => {
  const [user, setUser] = useState({});

  const config = {
    headers: { authorization: `Bearer ${localStorage.getItem("access")}` },
  };
  useEffect(() => {
    axios.get("/users/current", config).then((res) => setUser(res.data));
  }, []);
  return (
    <form className="updateUser">
      <h1>Les Infos d'etudiant</h1>
      <div>
        <label>fullname</label>
      </div>
      <input type="text" value={user.fullname} disabled />
      <div>
        <label>CNE</label>
      </div>
      <input type="text" value={user.cne} disabled />
      <div>
        <label>L'etat du diplome</label>
      </div>
      <input
        type="text"
        value={user.stateOfDegree}
        placeholder="l'etat du diplome"
        name="state"
        disabled
        required
      />
      <div>
        <label>la raison</label>
      </div>
      <textarea
        name="reason"
        value={user.reasonOfDegree}
        disabled
        cols="40"
        rows="8"
      ></textarea>
    </form>
  );
};

export default UserFeed;
