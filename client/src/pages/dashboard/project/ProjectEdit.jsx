import React, { useState, useEffect } from "react";
import axios from "axios";
  const ProjectEdit = ({ projectId, onClose}) => {
  const [project, setProjects] = useState({
     proname: "",
     desc: "",
     photo: "",
  });
  const [title, setTitle] = useState(project.proname);
  const [description, setDescription]=useState(project.desc);
  const [photo, setPhoto] = useState(project.photo);
  useEffect(() => {
    const getProjectDetails = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}api/projects/get/${projectId}`);
        setProjects(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProjectDetails();
  }, [projectId]);


   
  const handleUpdate = async () => {
    try {
      await axios.put(`${import.meta.env.VITE_BASE_URL}api/projects/update/${projectId}`, {   
      proname: title,
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
    <h2 style={{ fontSize: '1.5em', marginBottom: '15px' }}>Edit Project</h2>
    <label style={{ display: 'block', marginBottom: '5px' }}>Project Name:</label>
    <input style={{ width: '100%', padding: '8px', marginBottom: '15px' }} placeholder={"FullName.."} defaultValue={project.proname} autoFocus={true} type="text" onChange={(e) => setTitle(e.target.value)} />
    <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
    <textarea style={{ width: '100%', padding: '8px', marginBottom: '15px' }} placeholder={"Description.."} type="textarea" defaultValue={project.desc} autoFocus={true}  onChange={(e) => setDescription(e.target.value) }></textarea>
    <label style={{ display: 'block', marginBottom: '5px' }}>Photo URL:</label>
    <input style={{ width: '100%', padding: '8px', marginBottom: '15px' }} type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />
    <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }} onClick={handleUpdate}>Update</button>
    <button style={{ backgroundColor: '#ccc', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={onClose}>Cancel</button>
</div>
  );
};

export default ProjectEdit;