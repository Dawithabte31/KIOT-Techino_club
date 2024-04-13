// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";
// import { Context } from "../../../context/Context";

// const RegiterTable = () => {
//   const { user } = useContext(Context);
//   const [register, setRegister] = useState([]);

//   const getRegisters = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:3000/api/registers/allregisters`
//       );
//       setRegister(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getRegisters();
//   }, []);

//   return (
//     <div style={{ maxWidth: "100%", margin: "0 auto" }}>
//       <div className="addevent">
//         <NavLink to="/addregister">
//           <button>Register</button>
//         </NavLink>
//       </div>
//       <table
//         style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}
//       >
//         <thead>
//           <tr>
//             <th style={tableHeaderStyle}>Fullname</th>
//             <th style={tableHeaderStyle}>age</th>
//             <th style={tableHeaderStyle}>sex</th>
//             <th style={tableHeaderStyle}>Email</th>
//             <th style={tableHeaderStyle}>Departement</th>
//             <th style={tableHeaderStyle}>Skill</th>
//           </tr>
//         </thead>
//         <tbody>
//           {register.map((register) => (

//               <tr key={register._id}>
//               {user.user.role === 1 ||
//               user.user.username === register.username ? (
//                 <>
//                   <td style={tableCellStyle}>{register.fullname}</td>
//                   <td style={tableCellStyle}>{register.age}</td>
//                   <td style={tableCellStyle}>{register.sex}</td>
//                   <td style={tableCellStyle}>{register.email}</td>
//                   <td style={tableCellStyle}>{register.departement}</td>
//                   <td style={tableCellStyle}>{register.skill}</td>
                  
//                 </>
//               ) : null}
//             </tr>
//           ))}
//         </tbody>
//       </table>
    
//     </div>
//   );
// };

// const tableHeaderStyle = {
//   background: "#f2f2f2",
//   padding: "0.5rem",
//   textAlign: "left",
//   borderBottom: "1px solid #ddd",
// };

// const tableCellStyle = {
//   padding: "0.5rem",
//   borderBottom: "1px solid #ddd",
// };

// const photoStyle = {
//   width: "40px",
//   height: "40px",
//   borderRadius: "50%",
//   objectFit: "cover",
// };

// const actionButtonStyle = {
//   cursor: "pointer",
//   padding: "0.25rem 0.75rem",
//   border: "none",
//   borderRadius: "0.25rem",
//   transition: "background-color 0.3s ease",
// };

// export default RegiterTable;
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Context } from "../../../context/Context";

const Registered = () => {
  const { user } = useContext(Context);
  const [register, setRegister] = useState([]);

  const getRegisters = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/registers/allregisters`
      );
      setRegister(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRegisters();
  }, []);

  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <div className="addevent">
        <NavLink to="/addregister">
          <button>Register</button>
        </NavLink>
      </div>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}
      >
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Fullname</th>
            <th style={tableHeaderStyle}>age</th>
            <th style={tableHeaderStyle}>sex</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Departement</th>
            <th style={tableHeaderStyle}>Skill</th>
          </tr>
        </thead>
        <tbody>
          {register.map((register) => (
            // Check if the register status is "registered"
            register.status === "registered" && (
              <tr key={register._id}>
                
                  <>
                    <td style={tableCellStyle}>{register.fullname}</td>
                    <td style={tableCellStyle}>{register.age}</td>
                    <td style={tableCellStyle}>{register.sex}</td>
                    <td style={tableCellStyle}>{register.email}</td>
                    <td style={tableCellStyle}>{register.departement}</td>
                    <td style={tableCellStyle}>{register.skill}</td>
                  </>
                
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  background: "#f2f2f2",
  padding: "0.5rem",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

const tableCellStyle = {
  padding: "0.5rem",
  borderBottom: "1px solid #ddd",
};

export default Registered;
