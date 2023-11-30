import Header from "../Header";
import Footer from "../Footer";
import "./CSheet.css";

const RE2Remake = () => {
  return (
    <div className='CharacterSheet'>
      <Header />
      <div className='character-options-container'>
        <CharacterOption
          title='Leon S. Kennedy'
          description='Leon Scott Kennedy is an American of Italian descent, currently employed as a federal agent by the Division of Security Operations (D.S.O.), a counter-terrorism agency under direct Presidential command. Kennedy is a known survivor of the 1998 Raccoon City Destruction Incident, at the time a police officer. Following his escape, he was forcefully recruited into a top secret anti-Umbrella team under USSTRATCOM devoted to anti-B.O.W. combat, serving it until 2011 in repeated operations around the world.'
          imageSrc='https://i.pinimg.com/736x/ac/eb/a1/aceba14194f412b27a7aca38fa3269a1.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Leon_Scott_Kennedy'
        />
        <CharacterOption
          title='Claire Redfield'
          description='Claire Redfield is a current member of the human rights organization, TerraSave. She is the younger sister of BSAA operative and former S.T.A.R.S. member Chris Redfield. Since her survival in the Raccoon City incident in 1998, Claire would become involved or end up in the midst of several Biohazard outbreaks around the world, prompting her, as well as Chris, to devote her career to combating the threat of Bio Organic Weapons.'
          imageSrc='https://i.pinimg.com/736x/d0/60/20/d0602041d64170ed74da337a3500a441.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Claire_Redfield'
        />
        <CharacterOption
          title='Sherry Birkin'
          description='Sherry Birkin is an American federal agent attached to the Division of Security Operations. As a child, she was placed in protective custody after her parents deaths during the Raccoon City Destruction Incident. During the outbreak, Sherry was infected with the G-Virus, but was treated with the vaccine soon after. Because of her exposure to the virus, Sherry gained lifelong regenerative abilities.
          Years later, her G-Virus laced blood would be used by bio-terrorist and Neo-Umbrella leader Carla Radames to engineer the C-Virus and its enhanced strain. It was primarily used during the 2012-2013 Global Bioterrorist Attacks.'
          imageSrc='https://i.pinimg.com/736x/b7/45/f2/b745f21c2a179864ba153c985c610c90.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Sherry_Birkin'
        />
        <CharacterOption
          title='Ada Wong'
          description='Ada Wong is the pseudonym of an enigmatic unnamed spy of Asian-American descent. She has gained notoriety in the corporate world for being able to handle serious situations and the most difficult requests without guilt.

          Wong has acted secretly in the background of many biohazard incidents and collected information which became useful to several organisations, while at the same time operating to undermine them. However, Wong follows only her own "true purpose" and has often betrayed the organisations and customers she is affiliated with to achieve it.'
          imageSrc='https://i.pinimg.com/736x/c6/f9/f2/c6f9f2a1fb205e1ede6b592923b499d4.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Ada_Wong'
        />
        <CharacterOption
          title='T-00 (Mr. X)'
          description='T-00 was a Tyrant sent into Raccoon City during the 1998 Raccoon City Destruction Incident. T-00 was one of six within the T-103 series that were airlifted into the city, and was given instructions to recover a G-Virus sample from the pendant of Sherry Birkin and kill any surviving officers and civilians found in the Raccoon Police Station where it began a hunt of Leon S. Kennedy and Claire Redfield who were trying to escort Sherry to safety.'
          imageSrc='https://cdna.artstation.com/p/assets/images/images/028/970/360/large/nolan-jacobs-screenshot002.jpg?1596058812'
          buttonLink='https://residentevil.fandom.com/wiki/T-00'
        />
        <CharacterOption
          title='Marvin Branagh'
          description="Lieutenant Marvin Branagh was a police officer who served with the Raccoon Police Department.

          Branagh may have been a senior in the department's Bureau of Operations, as he was established within the station's West Office and was in Leon S. Kennedy's chain of command."
          imageSrc='https://i.pinimg.com/originals/84/49/b3/8449b3c3df61731fdf3821cb432d3575.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Marvin_Branagh'
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

export default RE2Remake;
