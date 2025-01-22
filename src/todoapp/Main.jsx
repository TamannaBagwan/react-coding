import React, { useState } from "react";
import UseForm from "./UseForm";
import UseTable from "./UseTable";

const Main = () => {
  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const updateUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">User Management</h1>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <UseForm addUser={addUser} />
        <UseTable
          users={users}
          updateUser={updateUser}
          deleteUser={deleteUser}
        />
      </div>
    </div>
  );
};

export default Main;
