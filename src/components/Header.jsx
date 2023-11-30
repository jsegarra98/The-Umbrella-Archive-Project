import { Link } from "react-router-dom";
import imgName from "./images/HEADER-LOGO.jpeg";
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
      <div className='button-container'>
        <div className='dropdown'>
          <button className='header-btn'>X</button>
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
            <Link to='helppage'>
              <button>Help</button>
            </Link>
            <Link to='/'>
              <button>Homepage</button>
            </Link>
          </div>
        </div>
        <img src={imgName} alt='Logo' className='logo' />
      </div>
    </div>
  );
};

export default Header;
