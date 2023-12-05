import Header from "./Header";
import "./ArtGallery.css";
import Footer from "./Footer";

const ArtGallery = () => {
  return (
    <div className='ArtGallery'>
      <Header />
      <div className='title-and-desc'>
        <h1>ART GALLERY</h1>
        <p>
          This is the page where you can browse the Art of Resident Evil
          franchise. <br />
          You can browse from the official concept art, or from the fan art
          other artists have made.
        </p>
      </div>
      <div className='category-container'>
        <CategoryBox
          title='Concept Art'
          imageSrc='https://game.capcom.com/manual/re4/locale/page/83_2_1.jpg'
          description='Explore stunning concept art and discover the creative process.'
          subCategories={[
            {
              name: "Resident Evil 2 (Remake)",
              link: "https://residentevil.fandom.com/wiki/Concept_Art_(RE2_remake)",
            },
            {
              name: "Resident Evil 3 (Remake)",
              link: "https://residentevil.fandom.com/wiki/Concept_Art_(RE3_remake)",
            },
            {
              name: "Resident Evil 4 (Remake)",
              link: "https://residentevil.fandom.com/wiki/Concept_Art_(RE4_Remake)",
            },
            {
              name: "Resident Evil 7",
              link: "https://www.residentevilvillage8.com/the-tragedy-of-ethan-winters-concept-art-resident-evil-7/",
            },
            {
              name: "Resident Evil 8 Village",
              link: "https://www.residentevilvillage8.com/concept-art/",
            },
          ]}
        />
        <CategoryBox
          title='Fan Arts'
          imageSrc='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ad015354-ce00-4190-a354-8adcab130aa8/dejg160-9f54bc17-ad3f-4f0e-ae43-63a9a9d00984.jpg/v1/fill/w_1024,h_673,q_75,strp/resident_evil8_alcina_dimitrescu_by_inshoo1_dejg160-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjczIiwicGF0aCI6IlwvZlwvYWQwMTUzNTQtY2UwMC00MTkwLWEzNTQtOGFkY2FiMTMwYWE4XC9kZWpnMTYwLTlmNTRiYzE3LWFkM2YtNGYwZS1hZTQzLTYzYTlhOWQwMDk4NC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Lh-GApb3nEnQYwZht3eg76mo3Lt9fudBD4v79-c9Lz4'
          description='Enjoy fan-created artworks inspired by our favorite characters.'
          buttonText='Fan Art'
          link='https://www.deviantart.com/tag/residentevil'
        />
      </div>
      <Footer />
    </div>
  );
};

const CategoryBox = ({
  title,
  imageSrc,
  description,
  buttonText,
  subCategories,
  link,
}) => {
  const renderButton = () => {
    if (link) {
      return (
        <a
          href={link}
          className='category-btn'
          target='_blank'
          rel='noopener noreferrer'
        >
          {buttonText}
        </a>
      );
    } else {
      return <button className='category-btn'>{buttonText}</button>;
    }
  };

  return (
    <div className='category-box'>
      <img src={imageSrc} alt={`${title}`} className='category-image' />
      <p className='category-description'>{description}</p>
      {buttonText && renderButton()}
      {subCategories && (
        <div className='dropdown'>
          <button className='action-btn'>{title}</button>
          <div className='dropdown-content'>
            {subCategories.map((subCategory, index) => (
              <a
                key={index}
                href={subCategory.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <button>{subCategory.name}</button>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtGallery;
