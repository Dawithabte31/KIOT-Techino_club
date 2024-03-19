import React, { useEffect, useState } from "react";
import EditMember from "./MemberEdit"; 
import axios from "axios";
import { NavLink } from "react-router-dom";
const MembersTable = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [members, setMembers] = useState([]);
  const getMembers = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/members/allmembers`
      );
      setMembers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMembers();
  },[]); 

  
  const openEditModal = (memberId) => {
    setSelectedMemberId(memberId);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedMemberId(null);
    setEditModalOpen(false);
  };

  const handleUpdate = async () => {
    try {
      // Send a PUT request to update the member
      await axios.put(`http://localhost:3000/api/members/${member._id}`, {
        fullname: fullName,
        desc: description,
        photo: photo,
      });

      onUpdate();
      onClose();
      
    } catch (error) {
      console.error('Error updating member:', error);
    }
  };
  // const handleDelete = async () => {
  //   console.log(member?.fullname);
  //   try {
  //     await axios.delete("http://localhost:5000/api/members/delete/" + member._id, {
  //       data: { member: member?.fullname}
  //     });
  //     console.log("member deleted successfully");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleDelete = async (memberId) => {
    try {
      const memberToDelete = members.find((member) => member._id === memberId);
  
      if (!memberToDelete) {
        console.error("Member not found");
        return;
      }
  
      await axios.delete(`http://localhost:3000/api/members/delete/${memberToDelete._id}`, {
        data: { member: memberToDelete.fullname }
      });
  
      console.log("Member deleted successfully");
      // Update the members after deletion
      getMembers();
    } catch (err) {
      console.error("Error deleting member:", err);
    }
  };
  
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <div className="addevent">
      <NavLink to="/addmember"><button>Add New Member</button></NavLink>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Full Name</th>
            <th style={tableHeaderStyle}>Description</th>
            <th style={tableHeaderStyle}>Photo</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member._id}>
              <td style={tableCellStyle}>{member._id}</td>
              <td style={tableCellStyle}>{member.fullname}</td>
              <td style={tableCellStyle}>{member.desc}</td>
              <td style={tableCellStyle}>
                <img src={member.photo} alt={member.fullName} style={photoStyle} />
              </td>
              <td style={tableCellStyle}>
                <button  onClick={() => openEditModal(member._id)} style={actionButtonStyle}>Edit</button>
                <button style={{ ...actionButtonStyle, marginLeft: "0.5rem" }} onClick={()=>handleDelete(member._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditModalOpen && (
        <EditMember memberId={selectedMemberId} onClose={closeEditModal} onUpdate={handleUpdate} />
      )}
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

const photoStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  objectFit: "cover",
};

const actionButtonStyle = {
  cursor: "pointer",
  padding: "0.25rem 0.75rem",
  border: "none",
  borderRadius: "0.25rem",
  transition: "background-color 0.3s ease",
};

export default MembersTable;

