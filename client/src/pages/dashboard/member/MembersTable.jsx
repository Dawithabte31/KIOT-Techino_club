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
  }, []);

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
      console.error("Error updating member:", error);
    }
  };

  const handleDelete = async (memberId) => {
    try {
      const memberToDelete = members.find((member) => member._id === memberId);

      if (!memberToDelete) {
        console.error("Member not found");
        return;
      }

      await axios.delete(
        `http://localhost:3000/api/members/delete/${memberToDelete._id}`,
        {
          data: { member: memberToDelete.fullname },
        }
      );

      console.log("Member deleted successfully");
      // Update the members after deletion
      getMembers();
    } catch (err) {
      console.error("Error deleting member:", err);
    }
  };
  return (
    <div className=" mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Team members
          </h3>
          <p className="text-gray-600 mt-2">Team leaders list</p>
        </div>
        <div className="mt-3 md:mt-0">
          <a
            href="/addmember"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Add member
          </a>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Photo</th>
              <th className="py-3 px-6">Fullname</th>
              <th className="py-3 px-6">Position</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {members.map((member, idx) => (
              <tr key={idx}>
                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <img src={member.photo} className="w-10 h-10 rounded-full" />
                  {/* <div>
                                          <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                          <span className="block text-gray-700 text-xs">{item.email}</span>
                                      </div> */}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {member.fullname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{member.desc}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    onClick={() => openEditModal(member._id)}
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(member._id)}
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
          <EditMember
            memberId={selectedMemberId}
            onClose={closeEditModal}
            onUpdate={handleUpdate}
          />
        )}
      </div>
    </div>
  );
};
export default MembersTable;
