import React, { useContext, useEffect, useState } from "react";
import EditRegister from "./RegistrationEdit";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Context } from "../../../context/Context";

const RegistrationTable = () => {
  const { user } = useContext(Context);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedRegisterId, setSelectedRegisterId] = useState(null);
  const [register, setRegister] = useState([]);
  const getRegisters = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}api/registers/allregisters`
      );
      setRegister(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRegisters();
  }, []);

  const openEditModal = (registerId) => {
    setSelectedRegisterId(registerId);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedRegisterId(null);
    setEditModalOpen(false);
  };

  const handleUpdate = async () => {
    try {
      // Send a PUT request to update the member
      await axios.put(`${import.meta.env.VITE_BASE_URL}api/registers/${register._id}`, {
        fullname: fullname,
        age: age,
        sex: sex,
        email: email,
        departement: departement,
        skills: skills,
        why: why,
      });
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating member:", error);
    }
  };
  const handleUpdatestatus = async (registerId) => {
    try {
      if (user.user.role !== 1) {
        console.error("Only admin users can update the status.");
        return;
      }
      // Send a PUT request to update the register status to "registered"
      await axios.put(
        `${import.meta.env.VITE_BASE_URL}api/registers/update/${registerId}`,
        {
          status: "registered",
        }
      );
      console.log("Updated status to 'registered' successfully");

      // Update the register status in the local state
      setRegister(
        register.map((reg) =>
          reg._id === registerId ? { ...reg, status: "registered" } : reg
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleDelete = async (registerId) => {
    try {
      const registerToDelete = register.find(
        (register) => register._id === registerId
      );

      if (!registerToDelete) {
        console.error("request not found");
        return;
      }
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}api/registers/delete/${registerToDelete._id}`,
        {
          data: { register: registerToDelete.fullname },
        }
      );

      console.log("request deleted successfully");
      // Update the members after deletion
      getRegisters();
    } catch (err) {
      console.error("Error deleting request:", err);
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Registration 
          </h3>
          {!user.user.role === 1 && <p>{user.user.username}</p>}
        </div>
        <div className="mt-3 md:mt-0">
          <NavLink
            to="/addregister"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Register
          </NavLink>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-2">Fullname</th>
              <th className="py-3 px-2">age</th>
              <th className="py-3 px-2">sex</th>
              <th className="py-3 px-2">Email</th>
              <th className="py-3 px-2">Departement</th>
              <th className="py-3 px-2">Skill</th>
              <th className="py-3 px-2">why</th>
              <th className="py-3 px-2"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {register.map((reg) => (
              <tr key={reg._id}>
                {(user.user.role === 1 ||
                  user.user.username === reg.username) && (
                  <>
                    <td className="px-2 py-4 whitespace-nowrap">
                      {reg.fullname}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">{reg.age}</td>
                    <td className="px-2 py-4 whitespace-nowrap">{reg.sex}</td>
                    <td className="px-2 py-4 whitespace-nowrap">{reg.email}</td>
                    <td className="px-2 py-4 whitespace-nowrap">
                      {reg.departement}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">{reg.skill}</td>
                    <td className="px-2 py-4 whitespace-nowrap">{reg.why}</td>
                    <td
                      className={`${
                        reg.status === "pending"
                          ? "text-red-500"
                          : "text-green-600"
                      } text-right px-6 whitespace-nowrap`}
                    >
                      {reg.status}
                    </td>
                    <td>
                      <button
                        onClick={() => openEditModal(reg._id)}
                        className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Edit
                      </button>
                      {user.user.role === 1 && (
                        <button
                          className="bg-gray-300 p-0 m-2 mb-3 active:text-white"
                          onClick={() => handleUpdatestatus(reg._id)}
                        >
                          Confirm
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(reg._id)}
                        className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {isEditModalOpen && (
          <EditRegister
            registerId={selectedRegisterId}
            onClose={closeEditModal}
            onUpdate={handleUpdate}
          />
        )}
      </div>
    </div>
  );
};
export default RegistrationTable;
