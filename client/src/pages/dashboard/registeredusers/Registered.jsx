import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Context } from "../../../context/Context";

const Registered = () => {
  const { user } = useContext(Context);
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

  return (
    <div className="max-w-screen-xl mx-auto px-4 ml-0 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Members List 
          </h3>
          <p className="text-gray-600 mt-2">
            Registered members list
          </p>
        </div>
        
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Fullname</th>
              <th className="py-3 px-6">age</th>
              <th className="py-3 px-6">sex</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Departement</th>
              <th className="py-3 px-6">Skill</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {register.map(
              (register) =>
                register.status === "registered" && (
                  <tr key={register._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {register.fullname}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {register.age}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {register.sex}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {register.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {register.departement}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {register.skill}
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Registered;
