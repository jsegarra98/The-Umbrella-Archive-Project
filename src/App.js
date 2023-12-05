import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import ArtGallery from "./components/ArtGallery";
import CharacterInfo from "./components/CharacterInfo";
import HelpPage from "./components/HelpPage";

import RE2Remake from "./components/RE2R";
import RE3Remake from "./components/RE3R";
import RE4Remake from "./components/RE4R";
import RE7 from "./components/RE7";
import RE8 from "./components/RE8";
import Merchandise from "./components/Merchandise";

function App() {
  return (
    <Router>
      <div className='container'>
        <Route path='/' exact component={Homepage} />
        <Route path='/art-gallery' component={ArtGallery} />
        <Route path='/merchandise' component={Merchandise} />
        <Route path='/helppage' component={HelpPage} />
        <Route path='/character-info' component={CharacterInfo} />

        <Route path='/RE2R' component={RE2Remake} />
        <Route path='/RE3R' component={RE3Remake} />
        <Route path='/RE4R' component={RE4Remake} />
        <Route path='/RE7' component={RE7} />
        <Route path='/RE8' component={RE8} />
      </div>
    </Router>
  );
}

export default App;
