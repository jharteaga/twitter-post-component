import React from 'react';
import './App.css';
import Post from './components/post';

function App() {
  return (
    <div className="App">
      <h1>Twitter Post Component</h1>
      <div className="post">
        <Post />
      </div>
    </div>
  );
}

export default App;
