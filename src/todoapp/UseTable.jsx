import React, { useState } from 'react';

const UseTable = ({ users, updateUser, deleteUser }) => {
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');

  const handleEdit = (user) => {
    setEditingId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  const handleUpdate = () => {
    updateUser(editingId, { id: editingId, name: editName, email: editEmail });
    setEditingId(null);
  };

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="p-4 border">Name</th>
          <th className="p-4 border">Email</th>
          <th className="p-4 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            {editingId === user.id ? (
              <>
                <td className="p-4 border">
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="p-2 border rounded-md"
                  />
                </td>
                <td className="p-4 border">
                  <input
                    type="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    className="p-2 border rounded-md"
                  />
                </td>
                <td className="p-4 border">
                  <button
                    onClick={handleUpdate}
                    className="bg-green-500 text-white p-2 rounded-md mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-500 text-white p-2 rounded-md"
                  >
                    Cancel
                  </button>
                </td>
              </>
            ) : (
              <>
                <td className="p-4 border">{user.name}</td>
                <td className="p-4 border">{user.email}</td>
                <td className="p-4 border">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-yellow-500 text-white p-2 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 text-white p-2 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UseTable;
