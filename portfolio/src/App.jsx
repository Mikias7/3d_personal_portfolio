import AnimationCanvas from "./components/AnimationCanvas";

function App() {
  return (
    <div>
      <AnimationCanvas style={{ position: 'absolute', top: 0, left: 0 }}
      gl={{ alpha: true }}/>


      <div style={{ position: 'absolute', top: 10, left: 20 }}>
        <h1>Home</h1>
        <p>Hello this is the home page</p>
      </div>
      
    </div>
    
  );
}

export default App;
