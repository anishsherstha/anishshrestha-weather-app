import "./Contact.css";

function Contact() {

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      "Thank you! Your message has been submitted successfully."
    );

    e.target.reset();
  };


  return (

    <div className="contact-container">

      {/* HEADER */}

      <div className="contact-header">

        <div className="contact-icon">
          📩
        </div>

        <h1>
          Contact Me
        </h1>

        <p>
          Have a question or suggestion?
          Feel free to contact me.
        </p>

      </div>


      {/* CONTENT */}

      <div className="contact-content">

        {/* FORM */}

        <div className="contact-form">

          <h2>
            Send a Message
          </h2>


          <form onSubmit={handleSubmit}>

            <label>
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              required
            />


            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />


            <label>
              Subject
            </label>

            <input
              type="text"
              placeholder="Enter subject"
              required
            />


            <label>
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>


            <button type="submit">
              Send Message
            </button>

          </form>

        </div>


        {/* CONTACT INFORMATION */}

        <div className="contact-info">

          <h2>
            Get in Touch
          </h2>


          <p>
            I would be happy to hear from you.
            You can contact me using the
            information below.
          </p>


          <div className="contact-item">

            <span>
              📧
            </span>

            <div>

              <strong>
                Email
              </strong>

              <p>
                anish@example.com
              </p>

            </div>

          </div>


          <div className="contact-item">

            <span>
              📱
            </span>

            <div>

              <strong>
                Phone
              </strong>

              <p>
                +977-9800000000
              </p>

            </div>

          </div>


          <div className="contact-item">

            <span>
              📍
            </span>

            <div>

              <strong>
                Location
              </strong>

              <p>
                Kathmandu, Nepal
              </p>

            </div>

          </div>


          {/* SOCIAL */}

          <h3 className="social-title">
            Follow Me
          </h3>


          <div className="social-links">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>


            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>


            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>


            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Contact;