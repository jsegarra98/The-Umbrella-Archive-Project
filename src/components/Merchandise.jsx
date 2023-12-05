import Header from "./Header";
import "./CharacterInfo.css";
import Footer from "./Footer";

const Merchandise = () => {
  return (
    <div className='CharacterInfo'>
      <Header />
      <div className='title-and-desc'>
        <h1>Merchandise</h1>
        <p>
          This is the page where you can browse and buy Resident Evil merchs!
        </p>
      </div>
      <div className='character-options-container'>
        <CharacterOption
          title='Difuzed: Resident Evil - Caution T-Shirt (Size: L)'
          imageSrc='https://d3fa68hw0m2vcc.cloudfront.net/f38/267903531.jpeg'
          buttonLink='https://www.mightyape.co.nz/product/difuzed-resident-evil-caution-t-shirt-size-l/35870753'
        />
        <CharacterOption
          title='Difuzed: Resident Evil - Lady Dimitrescu (Size: S)'
          imageSrc='https://d3fa68hw0m2vcc.cloudfront.net/d7d/267903469.jpeg'
          buttonLink='https://www.mightyape.co.nz/product/difuzed-resident-evil-lady-dimitrescu-t-shirt-size-s/35870750'
        />
        <CharacterOption
          title='Claire Redfield - Vinyl Figure'
          imageSrc='https://d3fa68hw0m2vcc.cloudfront.net/38d/260466389.jpeg'
          buttonLink='https://www.mightyape.co.nz/product/resident-evil-2-claire-redfield-cutie1-plus-vinyl-figure/35577896'
        />
        <CharacterOption
          title='Jill Valentine - Vinyl Figure'
          imageSrc='https://d3fa68hw0m2vcc.cloudfront.net/cb9/265747462.jpeg'
          buttonLink='https://www.mightyape.co.nz/product/resident-evil-re-3-jill-valentine-cutie1-plus-vinyl-figure/35790602'
        />
        <CharacterOption
          title='Chris Redfield (Renewal Package) - ARTFX Figure'
          imageSrc='https://d3fa68hw0m2vcc.cloudfront.net/62e/278492002.jpeg'
          buttonLink='https://www.mightyape.co.nz/product/resident-evil-chris-redfield-renewal-package-artfx-figure/36489501'
        />
        <CharacterOption
          title='Lady Dimitrescu - 1:4 Scale Statue'
          imageSrc='https://d3fa68hw0m2vcc.cloudfront.net/691/268097836.jpeg'
          buttonLink='https://www.mightyape.co.nz/product/resident-evil-lady-dimitrescu-14-scale-statue/35881921'
        />
        <CharacterOption
          title='Ada Wong - Plush'
          imageSrc='https://d3fa68hw0m2vcc.cloudfront.net/282/309353140.jpeg'
          buttonLink='https://www.mightyape.co.nz/product/voxenation-resident-evil-ada-wong-plush/38194581'
        />
        <CharacterOption
          title='Licker - Vinyl Figure'
          imageSrc='https://d3fa68hw0m2vcc.cloudfront.net/f14/265756358.jpeg'
          buttonLink='https://www.mightyape.co.nz/product/cutie1-plus-resident-evil-licker-vinyl-figure/35790754'
        />
      </div>
      <Footer />
    </div>
  );
};

const CharacterOption = ({ title, imageSrc, buttonLink }) => {
  return (
    <div className='character-option'>
      <img src={imageSrc} alt={`${title}`} className='character-image' />
      <h1 className='character-title'>{title}</h1>
      <a
        href={buttonLink}
        className='character-button'
        rel='noopener noreferrer'
      >
        Buy Now
      </a>
    </div>
  );
};

export default Merchandise;
