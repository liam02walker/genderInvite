import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import axios from "axios";
import Details from "./Pages/Details";

export default function App() {
  const [myClick, setMyClick] = useState(false);
  const [complete, setComplete] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const API = `http://localhost:8080/users`;
    const res = await axios.get(API);
    setUsers(res.data);
  }

  if (complete) {
    return (
      <div>
        <h1>THANK YOU</h1>
      </div>
    );
  }

  return <>{myClick ? <Home setComplete={setComplete} users={users} setUsers={setUsers} /> : <Details setMyClick={setMyClick} myClick={myClick} />}</>;
}
