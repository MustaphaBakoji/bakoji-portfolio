
import { useState } from 'react';
import './App.css';
import Contact from './Components/Contact';
import Education, { MyJourney } from './Components/Education';
import Home from './Components/Home';
import MyProjects from './Components/MyProjects';
import Myteam from './Components/Myteam';
import Nav from './Components/Nav';
import Others from './Components/Others';

function App() {
  const [bad, setbad] = useState('what')

  return (
    <div className="App">

      <Nav />
      <div className='z-0'>
        <Home />
        <Education />
        <MyJourney />
        <MyProjects />
        {/* <Myteam /> */}
        <Others />
        <Contact />
      </div>
    </div>
  );
}

export default App;
