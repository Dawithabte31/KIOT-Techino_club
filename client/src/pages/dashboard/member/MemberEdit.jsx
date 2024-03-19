import React, { useState, useEffect } from "react";
import axios from "axios";

const MemberEdit = ({ memberId, onClose}) => {
  const [member, setMember] = useState({
     fullname: "",
     desc: "",
     photo: "",
  });
  
  const [fullName, setFullName] = useState(member.fullname);
  const [description, setDescription] = useState(member.desc);
  const [photo, setPhoto] = useState(member.photo);
  useEffect(() => {
    const getMemberDetails = async () => {
      try {
       const res = await axios.get(`http://localhost:3000/api/members/get/${memberId}`);
        setMember(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMemberDetails();
  }, [memberId]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/api/members/update/${memberId}`, {   
      fullname: fullName,
      desc: description,
      photo: photo,
    });
   
   
      window.location.href = '/admin';
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', position: 'relative' }}>
    <h2 style={{ fontSize: '1.5em', marginBottom: '15px' }}>Edit Member</h2>

    <label style={{ display: 'block', marginBottom: '5px' }}>Full Name:</label>
    <input style={{ width: '100%', padding: '8px', marginBottom: '15px' }} placeholder={"FullName.."} defaultValue={member.fullname} type="text" onChange={(e) => setFullName(e.target.value)} />

    <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
    <textarea style={{ width: '100%', padding: '8px', marginBottom: '15px' }} placeholder={"Description.."} type="textarea" defaultValue={member.desc}  onChange={(e) => setDescription(e.target.value)}></textarea>
    <label style={{ display: 'block', marginBottom: '5px' }}>Photo URL:</label>
    <input style={{ width: '100%', padding: '8px', marginBottom: '15px' }} type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />

    <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }} onClick={handleUpdate}>Update</button>

    <button style={{ backgroundColor: '#ccc', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={onClose}>Cancel</button>
</div>


  );
};


export default MemberEdit;