import React, { useState, useEffect } from "react";
import axios from "axios";
const RegistrationEdit = ({ registerId, onClose }) => {
  const [register, setRegisters] = useState({
    fullname: "",
    age: "",
    sex: "",
    email: "",
    departement: "",
    skills: "",
    why: "",
  });

  const [fullname, setFullname] = useState(register.fullname);
  const [age, setAge] = useState(register.age);
  const [sex, setSex] = useState(register.sex);
  const [email, setEmail] = useState(register.email);
  const [departement, setDepartement] = useState(register.departement);
  const [skill, setSkill] = useState(register.skill);
  const [why, setWhy] = useState(register.why);
  const [status, setStatus] = useState(register.status);
  useEffect(() => {
    const getRegisterDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/registers/get/${registerId}`
        );
        setRegisters(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRegisterDetails();
  }, [registerId]);

  const handleUpdate = async (registerId) => {
    try {
      await axios.put(
        `http://localhost:3000/api/registers/update/${registerId}`,
        {
          fullname: fullname,
          age: age,
          sex: sex,
          email: email,
          depatrtement: departement,
          skill: skill,
          why: why,
          status: status,
        }
      );

      window.location.href = "/user";
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        position: "relative",
      }}
    >
      <h2 style={{ fontSize: "1.5em", marginBottom: "15px" }}>Edit Event</h2>
      <label style={{ display: "block", marginBottom: "5px" }}>Fullname:</label>
      <input
        style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        placeholder={"FullName"}
        defaultValue={register.fullname}
        autoFocus={true}
        type="text"
        onChange={(e) => setFullname(e.target.value)}
      />
      <label style={{ display: "block", marginBottom: "5px" }}>Age:</label>
      <input
        style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        placeholder={"sex"}
        type="textarea"
        defaultValue={register.age}
        autoFocus={true}
        onChange={(e) => setAge(e.target.value)}
      ></input>
      <label style={{ display: "block", marginBottom: "5px" }}>Sex:</label>
      <input
        style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        placeholder={"sex"}
        type="textarea"
        defaultValue={register.sex}
        autoFocus={true}
        onChange={(e) => setSex(e.target.value)}
      ></input>
      <label style={{ display: "block", marginBottom: "5px" }}>Email:</label>
      <input
        style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        placeholder={"Email"}
        defaultValue={register.email}
        autoFocus={true}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label style={{ display: "block", marginBottom: "5px" }}>
        Departement:
      </label>
      <input
        style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        placeholder={"departement"}
        defaultValue={register.departement}
        autoFocus={true}
        type="text"
        onChange={(e) => setDepartement(e.target.value)}
      />
      <label style={{ display: "block", marginBottom: "5px" }}>Skill:</label>
      <input
        style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        placeholder={"skill"}
        defaultValue={register.skill}
        autoFocus={true}
        type="text"
        onChange={(e) => setSkill(e.target.value)}
      />
      <label style={{ display: "block", marginBottom: "5px" }}>
        Why do you want to join TechIno club?
      </label>
      <input
        style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        placeholder={"reason.."}
        defaultValue={register.why}
        autoFocus={true}
        type="text"
        onChange={(e) => setWhy(e.target.value)}
      />
      <button
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginRight: "10px",
        }}
        onClick={handleUpdate}
      >
        Update
      </button>
      <button
        style={{
          backgroundColor: "#ccc",
          padding: "10px 15px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        Cancel
      </button>
    </div>
  );
};

export default RegistrationEdit;
