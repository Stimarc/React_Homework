import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';

const UserList = () => {
  const { users } = useContext(AppContext);
  const limitedUsers = users.slice(0, 5);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="user-list-container">
      <h2 className="user-list-header">User List</h2>
      <ul className="user-list">
        {limitedUsers.map((user) => (
          <li key={user.id} className="user-item" onClick={() => handleUserClick(user)}>
            <span className="user-name">{user.name}</span>
          </li>
        ))}
      </ul>
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