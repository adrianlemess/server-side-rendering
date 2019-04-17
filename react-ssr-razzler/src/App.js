import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const loadData = () => {
  return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
          return {
              posts: response.data
          };
      });
}

const App = () => {
  console.log("App normal");
  const [postState, setPostState] = useState([]);

  useEffect( () => {
      loadData()
        .then(result => {
          setPostState(result.posts);
        })

  }, []);

  return (
    <div>
      {postState.map(post => {
        return <h1 key={post.id}> {post.title} </h1>;
      })}
    </div>
  );
};

export default App;
