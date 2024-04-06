import React, {useContext, useState } from 'react';
import MembersTable from './member/MembersTable';
import EventsTable from './Event/EventsTable';
import ProjectsTable from './project/ProjectsTable';
import RegistrationTable from './registration/RegistrationTable';
import ServicesTable from './service/ServicesTable';
import { Context } from '../../context/Context';


const AdminDashboard = () => {
  const { dispatch } = useContext(Context);
  const handleLogout = ()=>{
    dispatch({type: "LogOut"})
    };
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const renderContent = () => {
    switch (selectedMenuItem) {
      case 'Members':
        return <MembersTable />;
      case 'Events':
        return <EventsTable />;
      case 'Projects':
        return <ProjectsTable />;
      case 'Registration':
        return <RegistrationTable />;
      case 'Service':
        return <ServicesTable />;
      default:
        return null;
    }
  };

  return (
    <div className='admindashboard ' style={{ display: 'flex', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <div style={{ width: '200px', backgroundColor: '#2c3e50', color: '#ecf0f1', padding: '20px' }}>
        <h2 className='my-4  flex justify-center h-auto w-auto font-extrabold' >Admin Dashboard</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li
            style={{
              padding: '10px',
              cursor: 'pointer',
              borderBottom: '1px solid #34495e',
              transition: 'background-color 0.3s ease, opacity 0.3s ease',
              opacity: 1,
            }}
            onClick={() => setSelectedMenuItem('Members')}
            onMouseEnter={(e) => (e.target.style.backgroundColor = 'white')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#2c3e50')}
          >
            Members
          </li>
          <li
            style={{
              padding: '10px',
              cursor: 'pointer',
              borderBottom: '1px solid #34495e',
              transition: 'background-color 0.3s ease, opacity 0.3s ease',
              opacity: 1,
            }}
            onClick={() => setSelectedMenuItem('Events')}
            onMouseEnter={(e) => (e.target.style.backgroundColor = 'white')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#2c3e50')}
          >
            Events
          </li>
          <li
            style={{
              padding: '10px',
              cursor: 'pointer',
              borderBottom: '1px solid #34495e',
              transition: 'background-color 0.3s ease, opacity 0.3s ease',
              opacity: 1,
            }}
            onClick={() => setSelectedMenuItem('Projects')}
            onMouseEnter={(e) => (e.target.style.backgroundColor = 'white')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#2c3e50')}
          >
            Projects
          </li>
          <li
            style={{
              padding: '10px',
              cursor: 'pointer',
              borderBottom: '1px solid #34495e',
              transition: 'background-color 0.3s ease, opacity 0.3s ease',
              opacity: 1,
            }}
            onClick={() => setSelectedMenuItem('Registration')}
            onMouseEnter={(e) => (e.target.style.backgroundColor = 'white')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#2c3e50')}
          >
            Registration
          </li>
          <li
            style={{
              padding: '10px',
              cursor: 'pointer',
              borderBottom: '1px solid #34495e',
              transition: 'background-color 0.3s ease, opacity 0.3s ease',
              opacity: 1,
            }}
            onClick={() => setSelectedMenuItem('Service')}
            onMouseEnter={(e) => (e.target.style.backgroundColor = 'white')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#2c3e50')}
          >
            Service
          </li>
        </ul>
        <div style={{width:"full", display:"flex" ,justifyContent:'center'}}>
        <button  onClick={handleLogout}>Logout</button>

        </div>
          
      </div>

      {/* Content Area */}
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#ecf0f1' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;



