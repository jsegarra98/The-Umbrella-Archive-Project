import Header from "../Header";
import Footer from "../Footer";
import "./CSheet.css";

const RE7 = () => {
  return (
    <div className='CharacterSheet'>
      <Header />
      <div className='character-options-container'>
        <CharacterOption
          title='Ethan Winters'
          description='Ethan Winters (イーサン・ウィンターズ Īsan Wintāzu?) (c.1984-10 February 2021) was an American mutant trained as systems engineer. One of many mutant victims of biological weaponry, Winters was infected with a weaponized species of "Mold" during the 2017 Dulvey incident. He and his wife Mia were rescued by the Bioterrorism Security Assessment Alliance, and were placed under witness protection in Eastern Europe. This protection ultimately unraveled in February 2021 when their daughter, Rosemary, was abducted by Mother Miranda. Winters was successful in rescuing Rosemary, but gave his life to save his daughter from Miranda.'
          imageSrc='https://i.pinimg.com/originals/02/30/30/0230309b544648e8ba62af7a4bc2e047.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Ethan_Winters'
        />
        <CharacterOption
          title='Mia Winters'
          description="Mia Winters (ミア・ウィンターズ Mia Wintāzu?) is a former operative for The Connections who worked covertly in the birth of Eveline, acting as her 'caretaker' for her while covering up her career as a worker at a 'trading company' to her husband, Ethan. After being presumed dead in 2014, she was recovered by the Baker family, and resided under lock and key at their property until being re-discovered in mid-2017.
          After Eveline's death, Mia and Ethan started a family again and Mia gave birth to their daughter, Rosemary Winters. However, Mia was captured and used in experimentation by Mother Miranda and her cult in an attempt to use Rose as a vessel to revive Miranda's late daughter, Eva."
          imageSrc='https://i.pinimg.com/1200x/60/4c/f9/604cf909dcc2f5eeeba519ecbcbd67c2.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Mia_Winters'
        />
        <CharacterOption
          title='Eveline (E-001)'
          description='Eveline (エヴリン Evurin?), codenamed E-001, was a genetically modified human conceived as part of the next generation of bioweapons research conducted by The Connections, designed to eliminate enemies without the need for combat. As a result of the merging of an anomalous bacteria into her genome during the embryonic stage, she gained the ability to control the minds of people who came in contact with her. Eveline was unique in being the first E-Type bioweapon, alongside her unhealthy obsession with creating a family to suit her own needs.'
          imageSrc='https://www.fiveminutesspare.com/entertainment/wp-content/uploads/sites/3/2022/11/0064_Resident_Evil_7_biohazard.0.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Eveline'
        />
        <CharacterOption
          title='Zoe Baker'
          description="Zoe Baker (ゾイ・ベイカー Zoi Beikā?) is a woman from Dulvey, Louisiana who was involved in the Dulvey incident, a three-year series of abductions by her parents, Jack and Marguerite Baker, and her brother Lucas, all at the behest of Eveline, a young girl genetically-engineered to control minds. Following Eveline's Death and Zoe's rescue from the Baker Ranch by BSAA forces led by Chris Redfield with the assistance of Blue Umbrella, she and her paternal uncle Joe were placed into protective custody."
          imageSrc='https://i.pinimg.com/736x/2c/e1/3b/2ce13bdfbbdb73b94d372fc354fc2e6d.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Zoe_Baker'
        />
        <CharacterOption
          title='Chris Redfield'
          description='Captain Chris Redfield (クリス・レッドフィールド Kurisu Reddofīrudo?) is an American Special Operations Unit operator in the Bioterrorism Security Assessment Alliance, in which he has served since its foundation in 2003. Redfield has built up and dedicated his career in destroying Bio Organic Weapons and fighting against producers and sellers of bioweapons after his experiences with bioterrorism in 1998. He is the older brother of TerraSave member Claire Redfield. He is also the mentor of American superhuman Rosemary Winters.'
          imageSrc='https://steamuserimages-a.akamaihd.net/ugc/964232331553446427/2C9E9A01E4797B0D782605758021CA15B50C433F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
          buttonLink='https://residentevil.fandom.com/wiki/Chris_Redfield'
        />
        <CharacterOption
          title='Marguerite Baker'
          description='Marguerite Baker (マーガレット・ベイカー Māgaretto Beikā?) was a resident of the Baker ranch household, a mansion in Dulvey, Louisiana. She was the wife of Jack Baker and mother of Zoe and Lucas Baker.'
          imageSrc='https://static0.gamerantimages.com/wordpress/wp-content/uploads/resident-evil-7-marguerite-baker-bugs-gameplay-video.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Marguerite_Baker'
        />
        <CharacterOption
          title='Jack baker'
          description="Jack Baker (ジャック・ベイカー Jakku Beikā?) was an American serial killer who kidnapped, murdered and ate over a hundred men and women in Dulvey Parish, Louisiana from 2014 to 2017, in coordination with his wife Marguerite, his son Lucas, and his adopted daughters Eveline and Mia. At the time of his death in August 2017, it was determined by the BSAA that the family's actions were the result of a psychoactive fungal bio-weapon that induced extreme violent tendencies."
          imageSrc='https://i0.wp.com/powerup-gaming.com/wp-content/uploads/2017/01/re7-jack-powerup-2.png?fit=723%2C404&ssl=1'
          buttonLink='https://residentevil.fandom.com/wiki/Jack_Baker'
        />
        <CharacterOption
          title='Lucas Baker'
          description='Lucas Baker (ルーカス・ベイカー Rūkasu Beikā?) was a resident of the Baker ranch, located in Dulvey, Louisiana. He was the son of Jack and Marguerite Baker, the older brother of Zoe Baker, and the nephew of Joe Baker.'
          imageSrc='https://www.giantbomb.com/a/uploads/scale_small/1/16944/3294802-pa3pwmte.jpeg'
          buttonLink='https://residentevil.fandom.com/wiki/Lucas_Baker'
        />
        <CharacterOption
          title='Joe Baker'
          description='Joe Baker is an American retired Marine and frontiersman from Dulvey Parish, Louisiana. Baker is one of several survivors of the 2014-2017 Baker House Incident, a series of mass killings committed by several Dulvey residents including three members of the Baker family. Baker was rescued by the BSAA during a clean-up operation after determining a link between the killings and a mind-altering fungus. Following this, he and his surviving niece, Zoe, the only two surviving members of the Baker family, were placed in protective custody.'
          imageSrc='https://store.playstation.com/store/api/chihiro/00_09_000/container/SG/en/99/UP0102-CUSA03962_00-ASIA0BH7THEME008/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720'
          buttonLink='https://residentevil.fandom.com/wiki/Joe_Baker'
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

export default RE7;
