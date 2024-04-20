import React, { useState } from "react";

import axios from 'axios';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword,setConfPassword]=useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  // const [inputs, setInputs] = useState({
  //   userName: "",
  //   email: "",
  //   password: "",
  //   confPassword: "",
  // });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confPassword: false,
  });

  function handleTogglePassword() {
    setShowPassword((prevState) => {
      return {
        ...prevState,
        password: !prevState.password,
      };
    });
  }
  function handleToggleconfPassword() {
    setShowPassword((prevState) => {
      return {
        ...prevState,
        confPassword: !prevState.confPassword,
      };
    });
  }

  // function handleChange(event) {
  //   setInputs((prevInput) => {
  //     const { value, name, type } = event.target;
  //     return {
  //       ...prevInput,
  //       [name]: value,
  //     };
  //   });
  // }

  const [focused, setFocused] = useState({
    password: false,
    confirmPassword: false,
  });

  function handleFocusPassword() {
    setFocused((prevState) => {
      return {
        ...prevState,
        password: true,
      };
    });
  }

  function handleFocusconfPassword() {
    setFocused((prevState) => {
      return {
        ...prevState,
        confirmPassword: true,
      };
    });
  }

  // function handleSubmit(event) {
  //   if (inputs.password !== inputs.confPassword) {
  //     event.preventDefault();
  //     alert("Password doesn't match");
  //   }
  //   if (inputs.password.length < 8) {
  //     event.preventDefault();
  //     alert("Password must be greater than 8 characters");
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post('http://localhost:3000/api/register', {
        confPassword:confPassword,
        password: password,
        email: email,
        username: username
      });
      res.data && window.location.replace('/login');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
    <div className="login">
      <form className="inputs" onSubmit={handleSubmit}>
        <h1 className="title">Welcome To TechIno</h1>
        <input
          type="text"
          placeholder="Username"
          className="input"
          name="userName"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="input"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="pass">
          <input
            type={showPassword.password ? "text" : "password"}
            placeholder="password"
            className="input"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handleFocusPassword}
            required
          />
          {focused.password && (
            <span className="eye" onClick={handleTogglePassword}>
              {showPassword.password ? <FaEyeSlash /> : <FaEye />}
            </span>
          )}
        </div>
        <div className="pass">
          <input
            type={showPassword.confPassword ? "text" : "password"}
            placeholder="confirm Password"
            className="input"
            name="confirmPassword"
            onChange={(e) => setConfPassword(e.target.value)}
            onFocus={handleFocusconfPassword}
            required
          />
          {focused.confPassword && (
            <span className="eye" onClick={handleToggleconfPassword}>
              {showPassword.confPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          )}
        </div>
        <button className="signIn" type="submit">Sign up</button>
        <p>
          Already have an account <Link to="/login" className="text-blue-800">Sign In</Link>
        </p>
      </form>
    </div>
    <Footer/>
    </>
  );
}
