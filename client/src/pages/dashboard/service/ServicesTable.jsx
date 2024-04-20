import React, { useEffect, useState } from "react";
import EditService from "./ServiceEdit";
import axios from "axios";
import { NavLink } from "react-router-dom";

const ServicesTable = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [services, setServices] = useState([]);

  const getServices = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}api/services/allservices`
      );
      setServices(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  const openEditModal = (serviceId) => {
    setSelectedServiceId(serviceId);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedServiceId(null);
    setEditModalOpen(false);
  };

  const handleUpdate = async () => {
    try {
      // Send a PUT request to update the member
      await axios.put(`${import.meta.env.VITE_BASE_URL}api/services/${service._id}`, {
        title: fullName,
        desc: description,
        photo: photo,
      });
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating member:", error);
    }
  };
  const handleDelete = async (serviceId) => {
    try {
      const serviceToDelete = services.find(
        (service) => service._id === serviceId
      );

      if (!serviceToDelete) {
        console.error("Member not found");
        return;
      }

      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}api/services/delete/${serviceToDelete._id}`,
        {
          data: { service: serviceToDelete.fullname },
        }
      );
      console.log("Member deleted successfully");
      // Update the members after deletion
      getServices();
    } catch (err) {
      console.error("Error deleting member:", err);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Services
          </h3>
          <p className="text-gray-600 mt-2">Techino club services</p>
        </div>
        <div className="mt-3 md:mt-0">
          <NavLink
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
            to="/addservice"
          >
            <button>Add Service</button>
          </NavLink>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Title</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6">Photo</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {services.map((service) => (
              <tr key={service._id}>
                <td className="px-6 py-4 whitespace-nowrap">{service.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{service.desc}</td>
                <td>
                  <img src={service.photo} alt={service.title} />
                </td>{" "}
                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    onClick={() => openEditModal(service._id)}
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isEditModalOpen && (
          <EditService
            serviceId={selectedServiceId}
            onClose={closeEditModal}
            onUpdate={handleUpdate}
          />
        )}
      </div>
    </div>
  );
};
export default ServicesTable;
