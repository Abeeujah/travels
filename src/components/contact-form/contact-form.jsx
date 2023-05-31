import utilStyles from "../../styles/utils.module.css";
import Button from "../button/button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const phone = event.target.phone.value;
    const message = event.target.message.value;
    const client = event.target.client.value;

    if (client) {
      return;
    }

    const data = {
      name,
      email,
      subject,
      phone,
      message,
    };

    const JSONData = JSON.stringify(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONData,
    };
    const endpoint = "/api/contactform";
    const response = await fetch(endpoint, options);
    const result = await response.json();
    document.getElementById("form").reset();
  };
  return (
    <section id="contact-form">
      <div className={`${utilStyles.container} ${utilStyles.mBlock}`}>
        <div>
          <h3
            className={`${utilStyles.textCenter} ${styles.block} ${utilStyles.textCapitalize} ${utilStyles.headingXl}`}
          >
            get in touch with us
          </h3>
          <div>
            <form onSubmit={handleSubmit} id="form">
              <div className={styles.container}>
                <div className={utilStyles.textCaitalize}>
                  <div className={styles.grid}>
                    <div className={utilStyles.flexCol}>
                      <label className={styles.label} htmlFor="name">
                        Name
                      </label>
                      <input
                        className={styles.input}
                        type="text"
                        name="name"
                        id="name"
                        required
                      />
                    </div>
                    <div className={utilStyles.flexCol}>
                      <label className={`${styles.label}`} htmlFor="email">
                        Email
                      </label>
                      <input
                        className={`${styles.input}`}
                        type="email"
                        name="email"
                        id="email"
                        required
                      />
                    </div>
                    <div className={utilStyles.flexCol}>
                      <label className={styles.label} htmlFor="subject">
                        Subject
                      </label>
                      <input
                        className={styles.input}
                        type="text"
                        name="subject"
                        id="subject"
                      />
                    </div>
                    <div className={utilStyles.flexCol}>
                      <label className={styles.label} htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className={styles.input}
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                      />
                    </div>
                    <div className={utilStyles.visuallyHidden}>
                      <label className={`${styles.label}`} htmlFor="client">
                        Proposal Email
                      </label>
                      <input
                        className={`${styles.input}`}
                        type="email"
                        name="client"
                        id="client"
                      />
                    </div>
                  </div>
                  <div className={`${utilStyles.flexCol} ${styles.mb1} ${styles.w100}`}>
                    <label className={styles.label} htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className={`${styles.input}`}
                      name="message"
                      id="message"
                      cols="30"
                      rows="5"
                      required
                    />
                  </div>
                </div>
                <Button className={styles.btn}>Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
