
import './App.css';

import Posts from "./Components/Post/Post"
function App() {
  return (
    <div className="App">

      <div style={{ justifyContent: "center", alignContent: "center" }}>
        <Posts />
        {/* <Grid container spacing={4}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          style={{ minHeight: '80vh' }}
        >
          {
            data.map(c => (
              <Grid item xs={3} sm={6} md={4} >
                <CardView img={c.imageUrl} name={c.owner} />
              
              </Grid>
            ))
          }

        </Grid> */}

      </div>


    </div>
  );
}


export default App;
