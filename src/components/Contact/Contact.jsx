import "./Contact.css";

function Contact() {
  return (
    <div className="contactBody">
      <h1 id="contactSectionTitle">Contact</h1>
      <p id="contactDescription">
        Feel free to contact me for opportunities, collaborations. or any
        questions.
      </p>
      <ul className="contactList">
        <li>
          <p>
            Gmail:
            <a
              href="mailto:lemueltadz@gmail.com"
              id="gmail"
              className="accounts"
            >
              lemueltadz@gmail.com
            </a>
          </p>
        </li>
        <li>
          <p>
            Github:
            <a
              href="https://github.com/weltadz"
              target="_blank"
              rel="noreferrer"
              id="github"
              className="accounts"
            >
              github.com/weltadz
            </a>
          </p>
        </li>
        <li>
          <p>
            Linkedin:
            <a
              href="https://www.linkedin.com/in/lemuel-tadeo-2329a0373/"
              target="_blank"
              rel="noreferrer"
              id="linkedin"
              className="accounts"
            >
              linkedin.com/in/lemuel-tadeo
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
