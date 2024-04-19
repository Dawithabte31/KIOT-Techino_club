import React, { useEffect, useState } from "react";
import EditProject from "./ProjectEdit";
import axios from "axios";
import { NavLink } from "react-router-dom";
const ProjectsTable = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/projects/allprojects`
      );
      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);
  const openEditModal = (projectId) => {
    setSelectedProjectId(projectId);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedProjectId(null);
    setEditModalOpen(false);
  };

  const handleUpdate = async () => {
    try {
      // Send a PUT request to update the member
      await axios.put(
        `http://localhost:3000/api/projects/update/${project._id}`,
        {
          proname: proname,
          desc: description,
          photo: photo,
        }
      );

      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };
  const handleDelete = async (projectId) => {
    try {
      const projectToDelete = projects.find(
        (project) => project._id === projectId
      );
      if (!projectToDelete) {
        console.error("project not found");
        return;
      }

      await axios.delete(
        `http://localhost:3000/api/projects/delete/${projectToDelete._id}`,
        {
          data: { event: projectToDelete.title },
        }
      );
      console.log("project deleted successfully");
      // Update the members after deletion
      getProjects();
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  };

  return (
    <div className="max-w-screen-xl  mx-auto px-4 mt-3 md:px-8">
      <div className="items-start justify-between flex-wrap md:flex">
        <div className="">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Developed Projects
          </h3>
        </div>
        <div className="mt-3 md:mt-0">
          <NavLink
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
            to="/addproject"
          >
            Add project
          </NavLink>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">project name</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {projects.map((project) => (
              <tr key={project._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {project.proname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{project.desc}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    onClick={() => openEditModal(project._id)}
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project._id)}
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
          <EditProject
            projectId={selectedProjectId}
            onClose={closeEditModal}
            onUpdate={handleUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsTable;
