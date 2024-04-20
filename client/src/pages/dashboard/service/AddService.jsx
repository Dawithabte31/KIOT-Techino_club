
import React, { useState } from 'react';
import axios from 'axios';

function AddService() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [file, setFile] = useState(null); 

  const handleAdd = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      const filename = Date.now() + file.name;
      formData.append("name", filename);
      formData.append("file", file);

      try {
        await axios.post(`${import.meta.env.VITE_BASE_URL}api/upload`, formData);
        setPhoto(filename);

      } catch (error) {
        console.error(error);
      }
    }

    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}api/services/create`, {
        title: title,
        desc: description,
        photo: photo,
      });
      
      window.location.href = '/admin';
      console.log("done!")  
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className='add-event'>
      
      {file && (
        <img 
          className='writeImg'
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <div style={{ maxWidth: '30%', margin: '0 auto', padding: '20px', border: 'none', borderRadius: '8px', position: 'relative' }}>
        <form onSubmit={handleAdd}>
            <label htmlFor="fileInput">
                <span className="material-symbols-outlined" style={{cursor: 'pointer',fontSize:30}}>
                    add_circle
                </span>
            </label>
            <input
              style={{ display: 'none' }}
              type="file"
              name='file'
              id='fileInput'
              onChange={(e)=>setFile(e.target.files[0])}
            />
          

           <input
             style={{ width: '100%', backgroundColor: "", fontSize: '1.5em', border: 'none', padding: '8px', marginBottom: '15px' }}
             placeholder={"Service title.."}
             type="text"
             onChange={(e) => setTitle(e.target.value)}
            />
           <textarea
             style={{ width: '100%', border: 'none', padding: '8px', marginBottom: '15px' }}
             placeholder={"Description.."}
             type="textarea"
             onChange={(e) => setDescription(e.target.value)}
           ></textarea>
          <button
            type='submit'
            style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '80%' }}
           >
            Add
          </button>
          </form>
      </div>
    </div>
  );
}

export default AddService;



