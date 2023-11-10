import { useState } from "react";
import axios from "axios";
import ".././App.css";

export default function Home({ users, setUsers, setComplete }) {
  const [formData, setFormData] = useState({
    Name: "",
    Attending: false,
    Vote: "",
  });

  const docBody = document.body;

  function handleFormData(e) {
    if (e.target.name === "Attending") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else if (e.target.name === "Vote") {
      if (e.target.value === "Boy") {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        docBody.style.backgroundColor = "var(--boy)";
      } else if (e.target.value === "Girl") {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        docBody.style.backgroundColor = "var(--girl)";
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  }

  async function addUser(event) {
    event.preventDefault();
    const API = "http://localhost:8080/users";
    const res = await axios.post(API, formData);
    setUsers([...users, res.data]);
    console.log("This works");
    setComplete(true);
  }

  function myTester() {
    docBody.style.backgroundColor = "black";
  }

  return (
    <>
      <form className="formContainer" onSubmit={addUser}>
        <div className="inputName">
          <h2>What is your name?</h2>
          <input value={formData.Name} required name="Name" placeholder="Full Name" onChange={handleFormData} />
        </div>
        <div className="coming">
          <h2>Are You Coming?</h2>
          <input type="checkbox" name="Attending" onChange={handleFormData} />
        </div>
        <div className="gender">
          <h2>Guess The Gender</h2>
          <div className="genderButton">
            <input className="boyButton" type="button" name="Vote" value="Boy" onClick={handleFormData} />
            <div className="emptyDiv"></div>
            <input className="girlButton" type="button" name="Vote" value="Girl" onClick={handleFormData} />
          </div>
        </div>
        <button onTouchEnd={myTester} className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
