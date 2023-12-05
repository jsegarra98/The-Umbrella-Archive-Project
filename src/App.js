import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import ArtGallery from "./components/ArtGallery";
import CharacterInfo from "./components/CharacterInfo";
import HelpPage from "./components/HelpPage";

import RE2Remake from "./components/CharSheet/RE2R";
import RE3Remake from "./components/CharSheet/RE3R";
import RE4Remake from "./components/CharSheet/RE4R";
import RE7 from "./components/CharSheet/RE7";
import RE8 from "./components/CharSheet/RE8";
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

        <Route path='/CharSheet/RE2R' component={RE2Remake} />
        <Route path='/CharSheet/RE3R' component={RE3Remake} />
        <Route path='/CharSheet/RE4R' component={RE4Remake} />
        <Route path='/CharSheet/RE7' component={RE7} />
        <Route path='/CharSheet/RE8' component={RE8} />
      </div>
    </Router>
  );
}

export default App;
