import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const [state, setState] = useState({});
  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("access-admin")}`,
    },
  };
  useEffect(() => {
    axios.get(`/admin/users/${params.id}`, config).then((res) => {
      setUser(res.data);
      setState({
        state: res.data.stateOfDegree,
        reason: res.data.reasonOfDegree,
      });
    });
  }, []);
  const navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();
    axios.post(`admin/users/${params.id}/`, state, config).then((res) => {
      console.log(res.data);
      navigate("/admin/dashboard");
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={update} className="updateUser">
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
        value={state.state}
        placeholder="l'etat du diplome"
        name="state"
        onChange={handleChange}
        required
      />
      <div>
        <label>la raison</label>
      </div>
      <textarea
        name="reason"
        value={state.reason}
        onChange={handleChange}
        cols="40"
        rows="5"
      ></textarea>
      <div>
        <input type="submit" value="save" />
      </div>
    </form>
  );
};

export default UpdateUser;
