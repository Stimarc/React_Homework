import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import { addUser, deleteUser } from '../actions/userActions';


const UserList = () => {
  const { users, dispatch } = useContext(AppContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUserName, setNewUserName] = useState('');

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleAddUser = () => {
    if (newUserName.trim() !== '') {
      const newUserObject = {
        id: users.length + 1,
        name: newUserName
      };
      dispatch(addUser(newUserObject));
      setNewUserName('');
    }
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
    setSelectedUser(null);
  };

  return (
    <div className="user-list-container">
      <h2 className="user-list-header">User List</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item" onClick={() => handleUserClick(user)}>
            <span className="user-name">{user.name}</span>
            <button onClick={() => handleDeleteUser(user.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="add-user-container">
        <input
          className='user-input'
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="Enter a new user name"
        />
        <button className='user-button-add' onClick={handleAddUser}>Add User</button>
      </div>
      {selectedUser && (
        <div className="user-details">
          <h3>User Details</h3>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Phone:</strong> {selectedUser.phone}</p>
          <p><strong>Website:</strong> {selectedUser.website}</p>
        </div>
      )}
    </div>
  );
};

export default UserList;