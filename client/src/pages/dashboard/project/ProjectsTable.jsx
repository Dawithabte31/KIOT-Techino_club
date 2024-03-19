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
  },[]); 
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
      await axios.put(`http://localhost:3000/api/projects/update/${project._id}`, {
        proname:  proname,
        desc:  description,
        photo: photo,
      });

      onUpdate();
      onClose();
      
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };
    const handleDelete = async (projectId) => {
    try {
        
      const projectToDelete = projects.find((project) => project._id === projectId);
      if (!projectToDelete) {
        console.error("project not found");
        return;
      }
  
      await axios.delete(`http://localhost:3000/api/projects/delete/${projectToDelete._id}`, {
        data: { event: projectToDelete.title }
      });
      console.log("project deleted successfully");
      // Update the members after deletion
      getProjects();
      } catch (err) {
      console.error("Error deleting project:", err);
      }
      };
  
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
         <div className="addevent">
            <NavLink to="/addproject"><button>Add New project</button></NavLink>
         </div>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>PrName</th>
            <th style={tableHeaderStyle}>Description</th>
            <th style={tableHeaderStyle}>Photo</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
              <tr key={project._id}>
              <td style={tableCellStyle}>{project._id}</td>
              <td style={tableCellStyle}>{project.proname}</td>
              <td style={tableCellStyle}>{project.desc}</td>
              <td style={tableCellStyle}>
              <img src={project.photo} alt={project.title} style={photoStyle} />
              </td>
              <td style={tableCellStyle}>
                <button  onClick={() => openEditModal(project._id)} style={actionButtonStyle}>Edit</button>
                <button style={{ ...actionButtonStyle, marginLeft: "0.5rem" }} onClick={()=>handleDelete(project._id)}>Delete</button>
              </td>
              </tr>
          ))}
        </tbody>
      </table>
     
      {isEditModalOpen && (
        <EditProject projectId={selectedProjectId} onClose={closeEditModal} onUpdate={handleUpdate} />
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

export default ProjectsTable;





