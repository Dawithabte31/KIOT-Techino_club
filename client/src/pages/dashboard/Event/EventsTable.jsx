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
        `${import.meta.env.VITE_BASE_URL}api/events/allevents`
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
      await axios.put(`${import.meta.env.VITE_BASE_URL}api/events/update/${event._id}`, {
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
  
      await axios.delete(`${import.meta.env.VITE_BASE_URL}api/events/delete/${eventToDelete._id}`, {
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
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="items-start justify-between md:flex">
              <div className="max-w-lg">
                  <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                      Events
                  </h3>
                  <p className="text-gray-600 mt-2">
                  Dynamic events curated by Techino Club                   </p>
              </div>
              <div className="mt-3 md:mt-0">
                  <NavLink className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm" to="/addevent"><button>Add New Event</button></NavLink>
              </div>
          </div>
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
              <table className="w-full table-auto text-sm text-left">
                  <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                      <tr>
                          <th className="py-3 px-6">Event Title</th>
                          <th className="py-3 px-6">Description</th>
                          <th className="py-3 px-6"></th>
                      </tr>
                  </thead>
                  <tbody className="text-gray-600 divide-y">
                      {
                          events.map((event) => (
                              <tr key={event._id}>
                                  <td className="px-6 py-4 whitespace-nowrap">{event.title}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{event.desc}</td>
                                  <td className="text-right px-6 whitespace-nowrap">
                                  
                                      <button  onClick={() => openEditModal(event._id)} className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                          Edit
                                      </button>
                                      <button onClick={()=>handleDelete(event._id)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                          Delete
                                      </button>
                                  </td>
                              </tr>
                          ))
                      }
                  </tbody>
              </table>
              {isEditModalOpen && (
        <EditEvent eventId={selectedEventId} onClose={closeEditModal} onUpdate={handleUpdate} />
      )}
          </div>
      </div>
  )
};
export default EventsTable;
