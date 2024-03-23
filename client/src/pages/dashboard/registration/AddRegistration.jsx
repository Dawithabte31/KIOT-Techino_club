
import React, { useState } from 'react';
import axios from 'axios';
function AddRegistration() {
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [departement, setDepartement] = useState("");
  const [skill, setSkill] = useState("");
  const [why, setWhy] = useState("");
  
    const handleAdd = async () => {
      try{
        await axios.post("http://localhost:3000/api/registers/create", {   
          fullname: fullname,
          age: age,
          sex: sex,
          email:email,
          departement:departement,
          skill:skill,
          why:why,
        });
        window.location.href = '/admin';
        console.log("done!")
      } catch (error) {
        console.log(error);
      }
    };
     
  return (
    <div className='add-event'>
    <div style={{ maxWidth: '30%', margin: '0 auto', padding: '20px', border: 'none', borderRadius: '8px', position: 'relative' }}>
    <input style={{ width: '100%',backgroundColor:"" ,fontSize: '1.5em',border: 'none', padding: '8px', marginBottom: '15px' }} placeholder={"Fullname.."}  type="text" onChange={(e) => setFullname(e.target.value)} />
    <input style={{ width: '100%',backgroundColor:"" ,fontSize: '1.5em',border: 'none', padding: '8px', marginBottom: '15px' }} placeholder={"Age.."}  type="text" onChange={(e) => setAge(e.target.value)} />
    <input style={{ width: '100%',backgroundColor:"" ,fontSize: '1.5em',border: 'none', padding: '8px', marginBottom: '15px' }} placeholder={"Sex.."}  type="text" onChange={(e) => setSex(e.target.value)} />
    <input style={{ width: '100%',backgroundColor:"" ,fontSize: '1.5em',border: 'none', padding: '8px', marginBottom: '15px' }} placeholder={"Email"}  type="text" onChange={(e) => setEmail(e.target.value)} />
    <input style={{ width: '100%',backgroundColor:"" ,fontSize: '1.5em',border: 'none', padding: '8px', marginBottom: '15px' }} placeholder={"Departement"}  type="text" onChange={(e) => setDepartement(e.target.value)} />
    <input style={{ width: '100%',backgroundColor:"" ,fontSize: '1.5em',border: 'none', padding: '8px', marginBottom: '15px' }} placeholder={"You skill.."}  type="textarea" onChange={(e) => setSkill(e.target.value)} />
    <textarea style={{ width: '100%',border: 'none', padding: '8px', marginBottom: '15px' }} placeholder={"why?"} type="textarea" onChange={(e) => setWhy(e.target.value)}></textarea>
    <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '80%' }} onClick={handleAdd}>Submit</button>
    </div>
    </div>
  )
}

export default AddRegistration





// import React, { useState } from 'react';

// const AddRegistration = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     sex: '',
//     age: '',
//     department: '',
//     skill: '',
//     whyJoin: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // Replace with your form submission logic
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md mt-10 mb-5">
//       <h2 className="text-2xl font-semibold mb-4 text-blue-800">Registeration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="sex" className="block text-sm font-medium text-gray-700">
//             Sex
//           </label>
//           <input
//             type="text"
//             id="sex"
//             name="sex"
//             value={formData.sex}
//             onChange={handleChange}
//             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="age" className="block text-sm font-medium text-gray-700">
//             Age
//           </label>
//           <input
//             type="text"
//             id="age"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="department" className="block text-sm font-medium text-gray-700">
//             Department
//           </label>
//           <input
//             type="text"
//             id="department"
//             name="department"
//             value={formData.department}
//             onChange={handleChange}
//             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="skill" className="block text-sm font-medium text-gray-700">
//             Skill
//           </label>
//           <input
//             type="text"
//             id="skill"
//             name="skill"
//             value={formData.skill}
//             onChange={handleChange}
//             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="whyJoin" className="block text-sm font-medium text-gray-700">
//             Why do you want to join?
//           </label>
//           <textarea
//             id="whyJoin"
//             name="whyJoin"
//             value={formData.whyJoin}
//             onChange={handleChange}
//             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//             rows={4}
//           />
//         </div>
//         <button
//           type="submit"
//           className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddRegistration;


