import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./HelpPage.css";

const HelpPage = () => {
  return (
    <div>
      <Header />
      <main class='contact-main'>
        <div className='contact-header'>
          <h1>HELP PAGE</h1>
          <p>Please contact us if you need help!</p>
        </div>
        <form action='https://formspree.io/f/mvonajly' method='post'>
          <section class='form-main'>
            <div>
              <label for='name' class='form-label'>
                Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                class='contact-details'
              />
            </div>
            <div>
              <label for='email' class='form-label'>
                Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                class='contact-details'
              />
            </div>
            <div>
              <label for='message' class='form-label'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                class='contact-details'
              ></textarea>
            </div>
            <button type='submit' class='contact-button'>
              Contact us
            </button>
          </section>
          <div class='contact-details-bottom'>
            <span>
              &#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;
            </span>
            <h1>Contact Details</h1>
            <div>
              <p>123 Fake Street,</p>
              <p>Auckland,</p>
              <p>New Zealand</p>
              <span>
                &#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;
              </span>
            </div>
            <p>
              <strong>Phone:</strong> 09 123 45678
            </p>
            <p>
              <strong>Email:</strong> theumbrellaarchive@umbrella.co.nz
            </p>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default HelpPage;
