
import './App.css';
// eslint-disable-next-line
import React, { lazy, Suspense } from 'react';

const Posts = lazy(() => import('./Components/Post/Post'));

const renderLoader = () => <p>Loading...</p>;


function App() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Suspense fallback={renderLoader()}>
        <Posts />
      </Suspense>
    </div>
  );
}
export default App;
