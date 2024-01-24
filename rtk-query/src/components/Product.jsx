import React, { useState } from 'react';
import { useUpdateGoodMutation } from '../redux';

export const Product = ({ product, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(product.name);
  const [updateGood] = useUpdateGoodMutation();

  const handleDelete = () => {
    onDelete(product.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    await updateGood({ id: product.id, name: editedName }).unwrap();
    onUpdate(product.id, editedName);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedName(product.name);
  };

  const handleInputChange = (e) => {
    setEditedName(e.target.value);
  };

  return (
    <div className="product">
      {isEditing ? (
        <>
          <input value={editedName} onChange={handleInputChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <div className="product-info">
            <span>{product.name}</span>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};