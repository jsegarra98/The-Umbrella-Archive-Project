import Header from "../Header";
import Footer from "../Footer";
import "./CSheet.css";

const RE3Remake = () => {
  return (
    <div className='CharacterSheet'>
      <Header />
      <div className='character-options-container'>
        <CharacterOption
          title='Jill Valentine'
          description='Jill Valentine  is an American Special Operations Agent (SOA) of the Bioterrorism Security Assessment Alliance, of which she is a co-founder and an original member. She is a respected high-ranking operator, owing to her commitment in eradicating bioterrorism and her survival amid to the Biohazardous outbreaks in Arklay County in 1998.'
          imageSrc='https://i.pinimg.com/originals/93/72/a7/9372a7b8691c1a36aaa85ed97fb5dff1.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Jill_Valentine'
        />
        <CharacterOption
          title='Carlos Oliveira'
          description='Carlos Oliveira was a mercenary for the Umbrella Biohazard Countermeasure Service (U.B.C.S.). He held the rank of Corporal, and served in their Delta Platoon as rear security for Alpha Squad, where he was also their heavy weapons specialist. Oliveira is also one of the few survivors of the deployed squads who served during Raccoon City Destruction Incident.'
          imageSrc='https://i.pinimg.com/736x/b3/3d/10/b33d104fd6635110cc62fa0e99196aa0.jpg'
          buttonLink='Link to Module 2'
        />
        <CharacterOption
          title='Nikolai Zinoviev'
          description="Nikolai Zinoviev (ニコライ・ジノビェフ Nikorai Jinobyefu?, Russian: Николай Зиновьев), codenamed 'Silver Wolf', is a Soviet Army veteran who served in Umbrella's paramilitary as a Sergeant in the UBCS as well as a Monitor. He and the USS commando, HUNK were considered to be 'rivals', and he was a close friend of Col. Sergei Vladimir, of whom he may have served with in the Soviet Army."
          imageSrc='https://i.pinimg.com/736x/e8/8e/c0/e88ec067830eb6d464b8745512055b60.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Nikolai_Zinoviev'
        />
        <CharacterOption
          title='Brad Vickers'
          description="Brad Vickers (ブラッド・ヴィッカース Buraddo Vikkāsu?) was a member of the Raccoon Police Department's S.T.A.R.S. Alpha Team. Vickers wasn't much of a fighter, and it is not mentioned as to whether or not he had served in any combat capacity before his recruitment into the S.T.A.R.S. unit. His hometown was Delucia."
          imageSrc='https://i.pinimg.com/564x/c4/6d/4b/c46d4bd2156c61314e57ea5629e83df2.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Brad_Vickers'
        />
        <CharacterOption
          title='Nemesis-T Type'
          description="Nemesis-T Type (ネメシス-Ｔ型 nemeshishu-tī-gata?) was a series of experimental Bio Organic Weapons. Created by Umbrella Europe's No. 6 Laboratory, the Nemesis-T Types were the culmination of the Nemesis Project with the successful implantation of NE-α parasites within T-103 hosts, presenting Umbrella with a highly intelligent and powerful creature. Several Nemesis-T Types were produced, though only one - Nemesis-T02 - is known to have experienced combat. This individual was sent in Raccoon City and nicknamed the 'Pursuer (追跡者 tuisekisha?)'."
          imageSrc='https://d.newsweek.com/en/full/1559236/resident-evil-3-nemesis.jpg?w=1600&h=1600&l=60&t=23&q=88&f=6cd9edc74b8cf24051af0ea14f172a04'
          buttonLink='https://residentevil.fandom.com/wiki/Nemesis-T_Type'
        />
      </div>
      <Footer />
    </div>
  );
};

const CharacterOption = ({ title, description, imageSrc, buttonLink }) => {
  return (
    <div className='character-option'>
      <img src={imageSrc} alt={`${title}`} className='character-image' />
      <h1 className='character-title'>{title}</h1>
      <p className='character-description'>{description}</p>
      <a
        href={buttonLink}
        className='character-button'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn More
      </a>
    </div>
  );
};

export default RE3Remake;
