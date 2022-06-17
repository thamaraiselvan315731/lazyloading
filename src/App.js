
import './App.css';
// eslint-disable-next-line
import React, { lazy, Suspense } from 'react';
import AvatarComponent from "./AvatarComponent";
import Posts from "./Components/Post/Post";
// const renderLoader = () => <p>Loading...</p>;
//const AvatarComponent = lazy(() => import('./AvatarComponent'));

//const Posts = lazy(() => import('./Components/Post/Post'));
function App() {
  const [visibles, setVisible] = React.useState(false)
  const func = (val) => {
    setVisible(!val)
  }
  return (

    //  <Suspense fallback={renderLoader()}>
    <> {!visibles && <AvatarComponent func={func} />}
      {visibles && <><Posts />
      </>}</>
    // {/* <Posts /> */}
    // {/* </Suspense> */}



  );
}


export default App;
