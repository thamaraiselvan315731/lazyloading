
import './App.css';
// eslint-disable-next-line
import React, { lazy, Suspense } from 'react';
import Posts from "./Components/Post/Post";

function App() {
  return (<>
    <div style={{ backgroundColor: 'black' }}>
      <Posts />
    </div>
  </>);
}
export default App;
