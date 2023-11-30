import FooterLogo from "./images/UMBRELLA-CORP-LOGO.avif";
import { Link } from "react-router-dom";
// import imgName from "./images/FOOTER-LOGO.jpeg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className={`footer page-padding section-padding`}>
      <div className='footerItem'>
        CREATED BY <br /> <br /> JOSEPH S.
      </div>
      <Link to='/' className='footerItem'>
        BY CAPCOM ® <br />
        <br />
        ALL RIGHTS RESERVED.
      </Link>
      <span> </span>
      <div className='footerItem footerLogo'>
        <img src={FooterLogo} width='135' height='100' alt='Footer Logo' />
      </div>
    </footer>
  );
};

export default Footer;
