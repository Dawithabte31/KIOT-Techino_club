import React, { useState } from "react";
import axios from "axios";
import { Context } from "../../../context/Context";
import { useContext } from "react";
import { Button } from "primereact/button";

function AddRegistration() {
  const { user } = useContext(Context);
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [departement, setDepartement] = useState("");
  const [skill, setSkill] = useState("");
  const [why, setWhy] = useState("");
  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleAdd = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}api/registers/create`, {
        username: user.user.username,
        fullname: fullname,
        age: age,
        sex: sex,
        email: email,
        departement: departement,
        skill: skill,
        why: why,
      });

      if (user.user.role === 0) {
        window.location.href = "/user";
      } else {
        window.location.href = "/admin";
      }
      console.log("done!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = () => {
    load(); // Call the load function
    handleAdd(); // Call the handleAdd function
  };

  return (
    <div className="add-event">
      <div className="max-w-md mx-auto p-4 border rounded-lg">
        <input
          className="w-full border-b-2 mb-4 py-2"
          placeholder="* Fullname"
          required
          type="text"
          onChange={(e) => setFullname(e.target.value)}
        />
        <input
          className="w-full border-b-2 mb-4 py-2"
          placeholder="* Age"
          type="text"
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          className="w-full border-b-2 mb-4 py-2"
          placeholder="* Sex"
          type="text"
          onChange={(e) => setSex(e.target.value)}
          required
        />
        <input
          className="w-full border-b-2 mb-4 py-2"
          placeholder="* Email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full border-b-2 mb-4 py-2"
          placeholder="* Department"
          type="text"
          onChange={(e) => setDepartement(e.target.value)}
          required
        />
        <input
          className="w-full border-b-2 mb-4 py-2"
          placeholder="* Your skill"
          type="text"
          onChange={(e) => setSkill(e.target.value)}
          required
        />
        <textarea
          required
          className="w-full border-b-2 mb-4 py-2"
          placeholder="* Why"
          onChange={(e) => setWhy(e.target.value)}
        ></textarea>
        <div className="flex justify-center">
          <Button
            className="bg-gray-500 text-white px-4 py-2"
            label="Submit"
            icon="pi pi-check"
            loading={loading}
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
}

export default AddRegistration;
