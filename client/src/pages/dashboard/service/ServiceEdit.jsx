import React, { useState, useEffect } from "react";
import axios from "axios";
  const ServiceEdit = ({ serviceId, onClose}) => {
  const [service, setServices] = useState({
     title: "",
     desc: "",
     photo: "",
  });
  const [title, setTitle] = useState(service.title);
  const [description, setDescription] = useState(service.desc);
  const [photo, setPhoto] = useState(service.photo);
  useEffect(() => {
    const getServiceDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/services/get/${serviceId}`);
        setServices(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getServiceDetails();
  }, [serviceId]);


   
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/api/services/update/${serviceId}`, {   
      title: title,
      desc: description,
      photo: photo,
    });
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', position: 'relative' }}>
    <h2 style={{ fontSize: '1.5em', marginBottom: '15px' }}>Edit Service</h2>
    <label style={{ display: 'block', marginBottom: '5px' }}>Service Title:</label>
    <input style={{ width: '100%', padding: '8px', marginBottom: '15px' }} placeholder={"Title.."} defaultValue={service.title} autoFocus={true} type="text" onChange={(e) => setTitle(e.target.value)} />
    <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
    <textarea style={{ width: '100%', padding: '8px', marginBottom: '15px' }} placeholder={"Description.."} type="textarea" defaultValue={service.desc} autoFocus={true}  onChange={(e) => setDescription(e.target.value) }></textarea>
    <label style={{ display: 'block', marginBottom: '5px' }}>Photo URL:</label>
    <input style={{ width: '100%', padding: '8px', marginBottom: '15px' }} type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />
    <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }} onClick={handleUpdate}>Update</button>
    <button style={{ backgroundColor: '#ccc', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={onClose}>Cancel</button>
</div>
  );
};

export default ServiceEdit;