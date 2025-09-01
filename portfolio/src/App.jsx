import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AnimationCanvas from "./components/AnimationCanvas";
import Home from "./pages/Home";
import Projects from './pages/Projects';

function App() {
  return (
    <div>

      <div style={{ height: "200vh" }}>
        <AnimationCanvas  style={{ position: 'absolute', top: 0, left: 0 }}
        gl={{ alpha: true }}/>
      </div>


      <div style={{ position: 'absolute', top: 10, left: 20 }}>

        <div style={{ height: "100%"}}>
          <section style={{ height: "100vh"}}>
            <Home />
          </section>

          <section style={{ height: "100vh" }}>
            <Projects />
          </section>
        </div>

      </div>
      
    </div>
    
  );
}

export default App;
