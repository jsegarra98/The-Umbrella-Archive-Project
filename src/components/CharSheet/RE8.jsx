import Header from "../Header";
import Footer from "../Footer";
import "./CSheet.css";

const RE8 = () => {
  return (
    <div className='CharacterSheet'>
      <Header />
      <div className='character-options-container'>
        <CharacterOption
          title='Ethan Winters'
          description='Ethan Winters (イーサン・ウィンターズ Īsan Wintāzu?) (c.1984-10 February 2021) was an American mutant trained as systems engineer. One of many mutant victims of biological weaponry, Winters was infected with a weaponized species of "Mold" during the 2017 Dulvey incident. He and his wife Mia were rescued by the Bioterrorism Security Assessment Alliance, and were placed under witness protection in Eastern Europe. This protection ultimately unraveled in February 2021 when their daughter, Rosemary, was abducted by Mother Miranda. Winters was successful in rescuing Rosemary, but gave his life to save his daughter from Miranda.'
          imageSrc='https://cdn.vox-cdn.com/thumbor/8jEJs_XR5pWO-bPeYwnJxHPbg1w=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22512748/RE_Village_Jan21_Art_Ethan.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Ethan_Winters'
        />
        <CharacterOption
          title='Mia Winters'
          description="Mia Winters (ミア・ウィンターズ Mia Wintāzu?) is a former operative for The Connections who worked covertly in the birth of Eveline, acting as her 'caretaker' for her while covering up her career as a worker at a 'trading company' to her husband, Ethan. After being presumed dead in 2014, she was recovered by the Baker family, and resided under lock and key at their property until being re-discovered in mid-2017.
          After Eveline's death, Mia and Ethan started a family again and Mia gave birth to their daughter, Rosemary Winters. However, Mia was captured and used in experimentation by Mother Miranda and her cult in an attempt to use Rose as a vessel to revive Miranda's late daughter, Eva."
          imageSrc='https://i.pinimg.com/originals/cb/df/2f/cbdf2fc1c4d0fcff78eaa36e56438da7.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Mia_Winters'
        />
        <CharacterOption
          title='Chris Redfield'
          description='Captain Chris Redfield (クリス・レッドフィールド Kurisu Reddofīrudo?) is an American Special Operations Unit operator in the Bioterrorism Security Assessment Alliance, in which he has served since its foundation in 2003. Redfield has built up and dedicated his career in destroying Bio Organic Weapons and fighting against producers and sellers of bioweapons after his experiences with bioterrorism in 1998. He is the older brother of TerraSave member Claire Redfield. He is also the mentor of American superhuman Rosemary Winters.'
          imageSrc='https://i.pinimg.com/originals/79/d1/de/79d1de0407a0d9e1b681fda547153aae.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Chris_Redfield'
        />
        <CharacterOption
          title='Lady Alcina Dimitrescu'
          description='Countess Alcina Dimitrescu (オルチーナ・ドミトレスク oruchīna domitoresuku?), commonly referred to as Lady Dimitrescu, was a mutant human aristocrat. From the 1950s until her death in 2021, Dimitrescu maintained a pseudo-feudal rule over the peasantry near Castle Dimitrescu as one of the Four Lords of the region. For more than sixty years, Dimitrescu was feared by the locals over allegations of mass murder and cannibalism, which were later found out to be true. She was killed by Ethan Winters in February 2021, after conspiring with Mother Miranda in the abduction of his daughter Rose.'
          imageSrc='https://64.media.tumblr.com/5b0ca4d5f53f9edbfb9c7482b7916e6a/2dd51f1a1e23fd2c-c5/s540x810/1b4ee7456d256004351a64a0c6de8c0c9a97fcb3.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Alcina_Dimitrescu?so=search'
        />
        <CharacterOption
          title='Karl Heisenberg'
          description='Lord Karl Heisenberg (カール・ハイゼンベルク kāru haizenberuku?) was a human mutant who lived in an Eastern European mountain range. A genius in engineering, he is presumably the patriarch of the Heisenberg family. He runs the inherited Heisenberg Factory, located just outside the village, and serves Mother Miranda, along with the other three major houses in the mountain range.'
          imageSrc='https://i.pinimg.com/originals/c2/12/7e/c2127e9bb41007cc34c5de957da06759.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Karl_Heisenberg'
        />
        <CharacterOption
          title='Salvatore Moreau'
          description='Salvatore Moreau (サルヴァトーレ・モロー saruvatōre morō?) was a mutant human who lived in a Eastern European mountain range. Presumably the last surviving member of the Moreau family, he resided at an abandoned reservoir until his death in 2021.'
          imageSrc='https://i.pinimg.com/736x/a4/dc/63/a4dc63914d04fd48f8c6268a20968192.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Salvatore_Moreau'
        />
        <CharacterOption
          title='Donna Beneviento & Angie'
          description='Donna Beneviento (ドナ・ベネヴィエント dona beneviento?) was a mutant human doll-maker who resided in an Eastern European mountain range. Dressed in a black garb, she was usually seen with her doll, Angie, through which she often communicated.'
          imageSrc='https://i.redd.it/bsasjaoevsy61.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Donna_Beneviento'
        />
        <CharacterOption
          title='Mother Miranda'
          description="Miranda (ミランダ miranda?) was an Eastern European biologist and cult leader who ruled over an isolated mountain village from 1919 to 2021. After losing her only daughter to the Spanish flu, she discovered and became infected by the Mold within a nearby cave. Gaining vast knowledge and superhuman powers from the infection, she pioneered research on this mysterious fungus and used it to conduct experiments on local villagers over the next century, hoping to find the perfect vessel to revive her daughter. In February 2021, she abducted the infant Rosemary Winters for this purpose and, seeing no further use for the villagers, committed a genocide by unleashing Lycans on the local populace. Miranda was ultimately killed by Rose's father, Ethan Winters, who had become intertwined with a BSAA operation to contain the outbreak."
          imageSrc='https://64.media.tumblr.com/4cc737c529fd2628b17c2d5e303b8b55/ad78077b1e090d17-21/s540x810/8e645bffc1f1bc5268c349d072d938e98498841d.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/Miranda'
        />
        <CharacterOption
          title='Rosemary Winters'
          description='Rosemary "Rose" Winters (ローズマリー・ウィンターズ Rōzumarī Wintāzu?) is an American superhuman. The daughter of mutants Mia & Ethan Winters, Winters body was comprised entirely of Mold, which was replicating human DNA. Following her rescue from an outbreak in Eastern Europe, Rose grew up in the United States under special protection.'
          imageSrc='https://i.pinimg.com/originals/62/37/9f/62379f0e8b3c0481f09be55a7ea50a4c.png'
          buttonLink='https://residentevil.fandom.com/wiki/Rosemary_Winters'
        />
        <CharacterOption
          title='The Duke'
          description="The Duke is a mysterious character who serves as a merchant and aids Ethan Winters in Resident Evil Village. He has been the resident merchant of the village for years, profiting well from his business transactions. He becomes an important guide in Ethan's journey to rescue his daughter Rosemary."
          imageSrc='https://i.redd.it/ee6f516k1ry61.jpg'
          buttonLink='https://residentevil.fandom.com/wiki/The_Duke'
        />
        <CharacterOption
          title='Bela Dimitrescu'
          description='Bela Dimitrescu was a chimæric mutant human born from the Cadou research project, and an adopted daughter of Countess Alcina Dimitrescu. She resided at Castle Dimitrescu with the rest of her family, including fellow adopted siblings Daniela and Cassandra. She was the oldest daughter, noted to be quiet but with a strong head on her shoulders. She was killed during a raid in the castle by Ethan Winters.'
          imageSrc='https://i.pinimg.com/originals/73/bd/a8/73bda899228752b14d33dd028b3f29af.png'
          buttonLink='https://residentevil.fandom.com/wiki/Bela_Dimitrescu'
        />
        <CharacterOption
          title='Cassandra Dimitrescu'
          description='Cassandra Dimitrescu was a chimæric mutant human born from the Cadou research project, and an adopted daughter of Countess Alcina Dimitrescu. She resided at Castle Dimitrescu with the rest of her family, including fellow adopted siblings Bela and Daniela. Cassandra was the middle child and she was noted to be a sadist who particularly enjoyed tormenting and killing her victims. She was killed during a raid on the castle by Ethan Winters.'
          imageSrc='https://i.pinimg.com/originals/fd/a3/c1/fda3c18475b8c1b550b2a26708fd106e.png'
          buttonLink='https://residentevil.fandom.com/wiki/Cassandra_Dimitrescu'
        />
        <CharacterOption
          title='Daniela Dimitrescu'
          description='Daniela Dimitrescu was a chimæric mutant human born from the Cadou research project, and an adopted daughter of Countess Alcina Dimitrescu. She resided at Castle Dimitrescu with the rest of her family, including fellow adopted siblings Bela and Cassandra. Daniela was the youngest daughter and she was noted to be the most delusional of the three. She was killed during a raid on the castle by Ethan Winters.'
          imageSrc='https://i.pinimg.com/originals/64/4f/70/644f700e6b60293a4006c5130e4abefa.png'
          buttonLink='https://residentevil.fandom.com/wiki/Daniela_Dimitrescu'
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

export default RE8;
