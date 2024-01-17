import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, editUser, deleteUser } from '../userActions';

export const UserManagement = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);

  const [newUser, setNewUser] = useState('');

  const handleAddUser = () => {
    dispatch(addUser(newUser));
    setNewUser('');
  };

  const handleEditUser = (user) => {
    const newName = prompt('Enter new name:', user.name);
    if (newName) {
      dispatch(editUser({ id: user.id, name: newName }));
    }
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(userId));
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleEditUser(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
}

