import React, { useState } from "react";

function AddCatPost({ addCatPost }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!title || !description) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    
    const imageUrl = "https://cataas.com/cat";
    addCatPost(title, description, imageUrl);

  
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Название:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="description">Описание:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Создать пост</button>
      </form>
    </div>
  );
}

export default AddCatPost;