import React, { useEffect, useState } from "react";
import axios from "axios";
const MessagesTable = () => {
  const [messages, setMessages] = useState([]);

  const getmessages = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/messages/allmessages`
      );
      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getmessages();
  },[]); 
 


    const handleDelete = async (messageId) => {
    try {
        
      const messageToDelete = messages.find((message) => message._id === messageId);
      if (!messageToDelete) {
        console.error("project not found");
        return;
      }
  
      await axios.delete(`http://localhost:3000/api/messages/delete/${messageToDelete._id}`, {
        data: { event: messageToDelete.email }
      });
      console.log("project deleted successfully");
      // Update the members after deletion
      getmessages();
      } catch (err) {
      console.error("Error deleting project:", err);
      }
      };
  
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
         
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Message</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
              <tr key={message._id}>
              <td style={tableCellStyle}>{message.name}</td>
              <td style={tableCellStyle}>{message.email}</td>
              <td style={tableCellStyle}>{message.message}</td>
              <td style={tableCellStyle}>
                <button style={{ ...actionButtonStyle, marginLeft: "0.5rem" }} onClick={()=>handleDelete(message._id)}>Delete</button>
              </td>
              </tr>
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
const actionButtonStyle = {
  cursor: "pointer",
  padding: "0.25rem 0.75rem",
  border: "none",
  borderRadius: "0.25rem",
  transition: "background-color 0.3s ease",
};

export default MessagesTable;





