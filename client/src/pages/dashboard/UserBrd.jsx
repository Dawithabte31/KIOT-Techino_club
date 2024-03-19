import React, { useState } from 'react';
import RegistrationTable from './registration/RegistrationTable';

const UserBrd = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const renderContent = () => {
    switch (selectedMenuItem) {
      case 'Registration':
        return <RegistrationTable />;
      default:
        return null;
    }
  };
  return (
    <div className='admindashboard' style={{ display: 'flex', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <div style={{ width: '200px', backgroundColor: '#2c3e50', color: '#ecf0f1', padding: '20px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#ecf0f1' }}>User</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
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
          
        </ul>
        <div style={{width:"full", display:"flex" ,justifyContent:'center'}}>
        <button>Logout</button>

        </div>
          
      </div>

      {/* Content Area */}
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#ecf0f1' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default UserBrd;



