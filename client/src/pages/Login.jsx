// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useContext, useRef} from "react";
// import { Context } from "../context/Context";
// import axios from "axios";
// import Footer from "../components/footer";

// function Login() {
//   const userRef = useRef(null);
//   const passwordRef = useRef(null);
//   const emailrRef =useRef(null);
//   const { dispatch, isFetching } = useContext(Context);
//  // const [inputs, setInputs] = useState({
//   //   userName: "",
//   //   email: "",
//   //   password: "",
//   // });

//   const [showPassword, setShowPassword] = useState(false);
//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   // function handleChange(event) {
//   //   setInputs((prevInput) => {
//   //     const { value, name } = event.target;
//   //     return {
//   //       ...prevInput,
//   //       [name]: value,
//   //     };
//   //   });
//   // }

//   const [isFocused, setIsFocused] = useState(false);

//   function handleFocus() {
//     setIsFocused(true);
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });
//     try {
//       const res = await axios.post("http://localhost:3000/api/login", {
//         //username: userRef.current.value,
//         password: passwordRef.current.value,
//         email: emailrRef.current.value,
//       });
//        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//        res.data && window.location.replace('/');
//        emailrRef.current.value = '';
//        passwordRef.current.value = '';
//     } catch (error) {
//       dispatch({ type: "LOGIN_FAILURE" });
//     }
//   };

//   return (
//     <>
//     <div className="login">
//       <form className="inputs" onSubmit={handleSubmit}>
//         <h1 className="title">Welcome To TechIno</h1>
//         {/* <input
//           type="text"
//           placeholder="Username"
//           className="input"
//           name="userName"
//           ref={userRef}
//           // value={inputs.userName}
//           // onChange={handleChange}
//           // required
//         /> */}

//         <input
//           type="email"
//           placeholder="Email"
//           className="input"
//           value={inputs.email}
//           name="email"
//           onChange={handleChange}
//           required
//           ref={emailrRef}
//         />

//         <div className="pass">
//           <input
//             className="input"
//             type="password"
//             id="password"
//             placeholder="Enter your password..."
//             ref={passwordRef}
//             value={password}
//           />
//           {isFocused && (
//             <span className="eye" onClick={handleTogglePassword}>
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           )}
//         </div>
//         <button className="signIn" type="submit" disabled={isFetching}>Sign in</button>
//         <p>
//           Don't have an account <Link to="/signup">SignUp</Link>
//         </p>
//       </form>
//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default Login;






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

  function handleFocus() {
    setIsFocused(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace('/');
      setEmail('');
      setPassword('');
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <>
      <div className="login">
        <form className="inputs" onSubmit={handleSubmit}>
          <h1 className="title">Welcome To TechIno</h1>

          <input
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
          <button className="signIn" type="submit">
            Sign in
          </button>
          <p>
            Don't have an account <Link to="/signup">SignUp</Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;

