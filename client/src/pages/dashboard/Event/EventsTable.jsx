import React, { useEffect, useState } from "react";
import EditEvent from "./EventEdit"; 
import axios from "axios";
import { NavLink } from "react-router-dom";
const EventsTable = () => {

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/events/allevents`
      );
      setEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  },[]); 

  
  const openEditModal = (eventId) => {
    setSelectedEventId(eventId);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedEventId(null);
    setEditModalOpen(false);
  };

  const handleUpdate = async () => {
    try {
      // Send a PUT request to update the member
      await axios.put(`http://localhost:3000/api/events/update/${event._id}`, {
        title:  fullName,
        desc:  description,
        photo: photo,
      });

      onUpdate();
      onClose();
      
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };
  const handleDelete = async (eventId) => {
    try {
      const eventToDelete = events.find((event) => event._id === eventId);
  
      if (!eventToDelete) {
        console.error("Member not found");
        return;
      }
  
      await axios.delete(`http://localhost:3000/api/events/delete/${eventToDelete._id}`, {
        data: { event: eventToDelete.title }
      });
      console.log("event deleted successfully");
      // Update the members after deletion
      getEvents();
    } catch (err) {
      console.error("Error deleting member:", err);

    }
  };
  

  return (
    <div className="event-div">
    <div className="event-div2" style={{ maxWidth: "100%", margin: "0 auto" }}>
         <div className="addevent">
            <NavLink to="/addevent"><button>Add New Event</button></NavLink>
         </div>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Title</th>
            <th style={tableHeaderStyle}>Description</th>
            <th style={tableHeaderStyle}>Photo</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td style={tableCellStyle}>{event._id}</td>
              <td style={tableCellStyle}>{event.title}</td>
              <td style={tableCellStyle}>{event.desc}</td>
              <td style={tableCellStyle}>
                <img src={event.photo} alt={event.title} style={photoStyle} />
              </td>
              <td style={tableCellStyle}>
                <button  onClick={() => openEditModal(event._id)} style={actionButtonStyle}>Edit</button>
                <button style={{ ...actionButtonStyle, marginLeft: "0.5rem" }} onClick={()=>handleDelete(event._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
      {isEditModalOpen && (
        <EditEvent eventId={selectedEventId} onClose={closeEditModal} onUpdate={handleUpdate} />
      )}
    </div>
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

export default EventsTable;

