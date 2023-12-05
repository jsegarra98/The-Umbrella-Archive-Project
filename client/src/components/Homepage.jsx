import { Link } from "react-router-dom";
import imgName from "./images/HOME-PAGE-LOGO.jpeg";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
      <div className='homepage'>
        <div>
          <img src={imgName} alt='homepage logo' className='homepage-logo' />
        </div>
        <div className='welcoming-buttons'>
          <p>Welcome to the Umbrella Archive!</p>
          <div className='homepage-button-container'>
            <div className='dropdown'>
              <button className='action-btn'>Browse Category</button>
              <div className='dropdown-content'>
                <Link to='/art-gallery'>
                  <button>Art Gallery</button>
                </Link>
                <Link to='/character-info'>
                  <button>Character Information</button>
                </Link>
                <Link to='merchandise'>
                  <button>Merchandise Showcase</button>
                </Link>
                <button>Help</button>
              </div>
            </div>
            <Link to='/art-gallery'>
              <button className='action-btn'>Login</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <br /> <br /> <br />
        <footer>
          ALL RIGHTS RESERVED. <br />
          <br /> CREATED BY <br /> JOSEPH S.
        </footer>
      </div>
    </div>
  );
};

export default Homepage;
