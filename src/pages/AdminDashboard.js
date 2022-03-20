import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const [value, setValue] = useState();
  useEffect(() => {
    const config = {
      headers: { authorization: `Bearer ${localStorage.getItem("access")}` },
    };
    axios
      .get("/admin/users/", config)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  const update = (id) => navigate(`/admin/update/${id}`);
  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  const search = (e) => {
    e.preventDefault();
    const filteredUsers = users.filter((user) => user.cne.includes(value));
    setUsers(filteredUsers);
  };
  return (
    <div className="container">
      <form onSubmit={search} style={{ margin: "20px auto", width: "400px" }}>
        <input
          type="search"
          placeholder="search by cne"
          value={value}
          onChange={handleChange}
        />
        <input type="submit" value="search" />
      </form>
      <table>
        <thead>
          <th>Cne</th>
          <th>Name</th>
          <th>status diplome</th>
          <th>raison</th>
          <th></th>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <td>{user.cne}</td>
              <td>{user.fullname}</td>
              <td id="status-diplome">
                <div
                  className={`chip ${
                    user.stateOfDegree === "pret" ? "green" : "red"
                  }`}
                >
                  {user.stateOfDegree}
                </div>
              </td>
              <td>{user.reasonOfDegree?.substr(0, 50) + "..."}</td>
              <td>
                <button onClick={(e) => update(user.cne)}>Modifier</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
