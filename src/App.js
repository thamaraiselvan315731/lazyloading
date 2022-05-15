
import './App.css';
import React, { lazy, Suspense } from 'react';
//import AvatarComponent from "./AvatarComponent";
const renderLoader = () => <p>Loading...</p>;
const AvatarComponent = lazy(() => import('./AvatarComponent'));
//import Posts from "./Components/Post/Post"
const Posts = lazy(() => import('./Components/Post/Post'));
function App() {
  const [visibles, setVisible] = React.useState(false)
  const func = (val) => {
    setVisible(!val)
  }
  return (

    <Suspense fallback={renderLoader()}>
      {!visibles && <AvatarComponent func={func} />}
      {visibles && <><Posts />
      </>}
      {/* <Posts /> */}
    </Suspense>



  );
}


export default App;
