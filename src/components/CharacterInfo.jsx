import Header from "./Header";
import Footer from "./Footer";
import "./CharacterInfo.css";
import { Link } from "react-router-dom";

const CharacterInfo = () => {
  return (
    <div className='CharacterInfo'>
      <Header />
      <div className='title-and-desc'>
        <h1>Character Information</h1>
        <p>
          This is the page where you can browse the main characters of Resident
          Evil from each game. <br />
          Select a game you want to browse the characters from.
        </p>
      </div>
      <div className='character-options-container'>
        <CharacterOption
          title='Resident Evil 2 (Remake)'
          imageSrc='https://preview.redd.it/kbh368texsh91.jpg?auto=webp&s=2e0cdb5d5080d119563cb93c9224c8fbd8923100'
          buttonLink='/CharSheet/RE2R'
        />
        <CharacterOption
          title='Resident Evil 3 (Remake)'
          imageSrc='https://image.api.playstation.com/vulcan/ap/rnd/202206/0206/WmriZBRlSeXWEEDLJOWW7MdW.png'
          buttonLink='/CharSheet/RE3R'
        />
        <CharacterOption
          title='Resident Evil 4 (Remake)'
          imageSrc='https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png'
          buttonLink='/CharSheet/RE4R'
        />
        <CharacterOption
          title='Resident Evil 7'
          imageSrc='https://assets-prd.ignimgs.com/2021/12/20/resident-evil-7-button-fin-1640038838419.jpg'
          buttonLink='/CharSheet/RE7'
        />
        <CharacterOption
          title='Resident Evil 8 Village'
          imageSrc='https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png'
          buttonLink='/CharSheet/RE8'
        />
      </div>
      <Footer />
    </div>
  );
};

const CharacterOption = ({ title, imageSrc, buttonLink }) => {
  return (
    <div className='character-option'>
      <img src={imageSrc} alt={`${title}`} className='info-image' />
      <h1 className='character-title'>{title}</h1>
      <Link to={buttonLink} className='character-button'>
        Browse
      </Link>
    </div>
  );
};

export default CharacterInfo;
