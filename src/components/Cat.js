import React, { useState } from "react";

function Cat({ id, title, description, imageUrl, editCatPost, deleteCatPost }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editCatPost(id, editedTitle, editedDescription);
    setIsEditing(false);
  };

  return (
    <div className="cat-post">
      <img src={imageUrl} alt="Cat" />
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={handleEdit}>Редактировать</button>
          <button onClick={() => deleteCatPost(id)}>Удалить</button>
        </div>
      )}
    </div>
  );
}


export default Cat;