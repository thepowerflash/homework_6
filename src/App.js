import { useState, useEffect } from "react";
import "./App.css"; 
import React from "react";
import AddCatPost from "./components/AddCatPost";
import Cat from "./components/Cat";

function App() {
  const [catPosts, setCatPosts] = useState([]);

  useEffect(() => {

    const fetchCatPosts = async () => {
      try {
        const response = await fetch(
          "https://cataas.com/api/cats?limit=0&skip=0"
        );
        const data = await response.json();

     
        const catPostData = data.map((cat, index) => ({
          id: index + 1,
          title: `Заголовок поста ${index + 1}`,
          description: `Описание поста ${index + 1}`,
          imageUrl: cat.url,
        }));

    
        setCatPosts(catPostData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCatPosts();
  }, []);

 
  const addCatPost = (title, description) => {
    const newCatPost = {
      id: catPosts.length + 1,
      title,
      description,
      imageUrl: "https://cataas.com/cat",
    };
    setCatPosts([...catPosts, newCatPost]);
  };

  
  const editCatPost = (postId, title, description) => {
    const updatedCatPosts = catPosts.map((post) =>
      post.id === postId ? { ...post, title, description } : post
    );
    setCatPosts(updatedCatPosts);
  };


  const deleteCatPost = (postId) => {
    const updatedCatPosts = catPosts.filter((post) => post.id !== postId);
    setCatPosts(updatedCatPosts);
  };

  return (
    <main>
      <h1>Кошачий постометр :")"</h1>
      <AddCatPost addCatPost={addCatPost} />
      <section className="cat-posts-container">
        {catPosts.map((post) => (
          <Cat
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            editCatPost={editCatPost}
            deleteCatPost={deleteCatPost}
          />
        ))}
      </section>
    </main>
  );
}

export default App;