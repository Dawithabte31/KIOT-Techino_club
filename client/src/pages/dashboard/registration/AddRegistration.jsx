
import React, { useState } from 'react';
import axios from 'axios';
function AddRegistration() {
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [departement, setDepartement] = useState("");
  const [skill, setSkill] = useState("");
  const [why, setWhy] = useState("");
  
    const handleAdd = async () => {
      try{
        await axios.post("http://localhost:3000/api/registers/create", {   
          fullname: fullname,
          age: age,
          sex: sex,
          email:email,
          depatrtement:departement,
          skill:skill,
          why:why,
        });
        window.location.href = '/admin';
        console.log("done!")
      } catch (error) {
        console.log(error);
      }
    };
     
  return (
    <div className='add-event'>
    <div style={{ maxWidth: '30%', margin: '0 auto', padding: '20px', border: 'none', borderRadius: '8px', position: 'relative' }}>
    <input style={{ width: '100%',backgroundColor:"" ,fontSize: '1.5em',border: 'none', padding: '8px', marginBottom: '15px' }} placeholder={"Fullname.."}  type="text" onChange={(e) => setFullname(e.target.value)} />
    <input style={{ width: '100%',backgroundColor:"" ,fontSize: '1.5em',border: 'none', padding: '8px', marginBottom: '15px' }} placeholder={"Age.."}  type="text" onChange={(e) => setAge(e.target.value)} />
    <input style={{ width: '100%',backgroundColor:"" ,fontSize: '1.5em',border: 'none', padding: '8px', marginBottom: '15px' }} placeholder={"Sex.."}  type="text" onChange={(e) => setSex(e.target.value)} />
    <input style={{ width: '100%',backgroundColor:"" ,fontSize: '1.5em',border: 'none', padding: '8px', marginBottom: '15px' }} placeholder={"Email"}  type="text" onChange={(e) => setEmail(e.target.value)} />
    <input style={{ width: '100%',backgroundColor:"" ,fontSize: '1.5em',border: 'none', padding: '8px', marginBottom: '15px' }} placeholder={"Departement"}  type="text" onChange={(e) => setDepartement(e.target.value)} />
    <input style={{ width: '100%',backgroundColor:"" ,fontSize: '1.5em',border: 'none', padding: '8px', marginBottom: '15px' }} placeholder={"You skill.."}  type="textarea" onChange={(e) => setSkill(e.target.value)} />
    <textarea style={{ width: '100%',border: 'none', padding: '8px', marginBottom: '15px' }} placeholder={"why?"} type="textarea" onChange={(e) => setWhy(e.target.value)}></textarea>
    <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '80%' }} onClick={handleAdd}>Submit</button>
    </div>
    </div>
  )
}

export default AddRegistration
