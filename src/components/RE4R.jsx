import Header from "./Header";
import Footer from "./Footer";
import "./CSheet.css";

const RE4Remake = () => {
  return (
    <div className='CharacterSheet'>
      <Header />
      <div className='character-options-container'>
        <CharacterOption
          title='Leon S. Kennedy'
          description='Leon Scott Kennedy is an American of Italian descent, currently employed as a federal agent by the Division of Security Operations (D.S.O.), a counter-terrorism agency under direct Presidential command. Kennedy is a known survivor of the 1998 Raccoon City Destruction Incident, at the time a police officer. Following his escape, he was forcefully recruited into a top secret anti-Umbrella team under USSTRATCOM devoted to anti-B.O.W. combat, serving it until 2011 in repeated operations around the world.'
          imageSrc='https://i.redd.it/are-you-a-fan-of-re4-remake-leons-3-5-looking-design-v0-pm9fo2aivtw91.jpg?width=2156&format=pjpg&auto=webp&s=6fce04fac3075de213c8043ed1bc01bc51c3ee39'
          buttonLink='https://residentevil.fandom.com/wiki/Leon_Scott_Kennedy'
        />
        <CharacterOption
          title='Ashley Graham'
          description='Ashley Graham (アシュリー・グラハム Ashurī Gurahamu?) (born c.1984) was the daughter of former President Graham. In 2004, Graham was victim to an international conspiracy to turn influential American citizens into hosts for a mind-control parasite, Las Plagas, and was rescued in a classified government operation .'
          imageSrc='https://i.pinimg.com/originals/59/17/93/591793af40cc466a3a3d6dff77b4bc57.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Ashley_Graham'
        />
        <CharacterOption
          title='Ada Wong'
          description='Ada Wong is the pseudonym of an enigmatic unnamed spy of Asian-American descent. She has gained notoriety in the corporate world for being able to handle serious situations and the most difficult requests without guilt.
          Wong has acted secretly in the background of many biohazard incidents and collected information which became useful to several organisations, while at the same time operating to undermine them. However, Wong follows only her own "true purpose" and has often betrayed the organisations and customers she is affiliated with to achieve it.'
          imageSrc='https://64.media.tumblr.com/d30796ad61d20517f0f79022eda1b386/8eada49b909bf89b-2f/s1280x1920/980d2f29b48029f0fafcb4ccb7ecd19d80aaec56.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Ada_Wong'
        />
        <CharacterOption
          title='Luis Serra Navarro'
          description='Dr. Luis Serra Navarro (ルイス・セラ・ナバロ Ruisu Sera Nabaro?), often shorted to Luis Serra (ルイス・セラ Ruisu Sera?) was a Spanish biologist native to an isolated region of Spain and former employee of the Umbrella Corporation.'
          imageSrc='https://i.pinimg.com/originals/1f/fc/71/1ffc710d2d68226bcf556312664c8f38.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Luis_Serra_Navarro'
        />
        <CharacterOption
          title='Osmund Saddler'
          description="Osmund Saddler (オズムンド・サドラー Ozumundo Sadorā?), often referred to as Lord Saddler, was the leader of Los Iluminados, a neopagan cult and paramilitary organisation. He was a bio-weapons research chief who resided in an isolated Spanish region. In the early 2000s, Saddler's leadership ensured the cult's dominance in the region through the weaponisation of the mind-controlling Plaga parasites to suit his plans for world domination. He was killed in 2004 during a USSTRATCOM mission to rescue Ashley Graham, the President's daughter whom Saddler's organisation had taken hostage."
          imageSrc='https://i.pinimg.com/originals/91/71/03/917103efcdfb561ef3d303e8fc15f7fe.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Osmund_Saddler'
        />
        <CharacterOption
          title='The Merchant'
          description='The Weapons Merchant (武器ぶき商人しょうにん buki shōnin?) is a mysterious character and trader that appears in Resident Evil 4 and the Resident Evil 4 remake as a means for the player to upgrade, sell, and purchase weapons.'
          imageSrc='https://i.pinimg.com/originals/4c/07/e1/4c07e115f05d09285c1d140ca7229b1d.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Merchant'
        />
        <CharacterOption
          title='Jack Krauser'
          description='Major Jack Krauser (ジャック・クラウザー Jakku Kurauzā?) was an agent for the 3rd Organization during the War on Terror, and a supporter of Dr. Albert Wesker. Previously a soldier within USSOCOM known as "Silverdax," he was forced into retirement after a 2002 mission to South America with USSTRATCOM agent Leon S. Kennedy. During his employment within The Organization, Krauser took part in the infiltration of Los Iluminados to obtain a Plaga parasite. Krauser was killed in late 2004 during the rescue operation of Ashley Graham.'
          imageSrc='https://cdn.vox-cdn.com/thumbor/TOwd6jCsNCp_C_jkxDEgJmfxgbg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24560069/Resident_Evil_4_Chapter_14_walkthrough_1.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Jack_Krauser'
        />
        <CharacterOption
          title='Albert Wesker'
          description='Dr. Albert Wesker (アルバート・ウェスカー?) (c.1960-2009) was an accomplished virologist notorious for his work with groups affiliated with the bio-weapons black market.'
          imageSrc='https://i.pinimg.com/originals/63/4d/ed/634dedfa8ae35f67f3642e11ad6d9a6e.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Albert_Wesker'
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

export default RE4Remake;
