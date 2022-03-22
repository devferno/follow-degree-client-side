import React, { useState } from "react";
import FormSignin from "../components/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminSignIn = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const signin = (e) => {
    e.preventDefault();
    axios
      .post("/admin/signin", user)
      .then((res) => {
        localStorage.setItem("access-admin", res.data.access);
        navigate("/admin/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  return <FormSignin handleChange={handleChange} signin={signin} user={user} />;
};

export default AdminSignIn;
