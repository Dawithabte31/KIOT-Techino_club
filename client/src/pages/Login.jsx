import React, { useState, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer";
import { useContext} from "react";
import { Context } from "../context/Context";

function Login() {
  const { dispatch, isFetching } = useContext(Context);
  const userRef = useRef(null);
  const passwordRef = useRef(null);
  const emailrRef = useRef(null);

  // Initialize state for input field values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [isFocused, setIsFocused] = useState(false);
const [error,setError]=useState(false);
  function handleFocus() {
    setIsFocused(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}api/login`, {
        email,
        password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace('/');
      setEmail('');
      setPassword('');
    } catch (error) {
      setError(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <>
      <div className="login">
        <form className="inputs" onSubmit={handleSubmit}>
          <h1 className="title">Welcome To TechIno</h1>

          <input
            required
            type="email"
            placeholder="email"
            className="input"
            name="email"
            ref={emailrRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="pass">
            <input
              required
              className="input"
              type="password"
              id="password"
              placeholder="Enter your password..."
              ref={passwordRef}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isFocused && (
              <span className="eye" onClick={handleTogglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            )}
          </div>
          <p className={`${error? "":"hidden"} text-red-500`}>
           Wrong email or password
          </p>
          <button className="signIn" type="submit">
            Sign in
          </button>
          <p>
            Don't have an account <Link to="/signup" className="text-blue-800">SignUp</Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;

