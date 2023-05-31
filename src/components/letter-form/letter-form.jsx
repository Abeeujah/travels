import { useState } from "react";
import Button from "../button/button";
import styles from "./Letterform.module.css";
import utilStyles from "../../styles/utils.module.css";

const LetterForm = () => {
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const clientEmail = event.target.clientemail.value;
    if (clientEmail) {
      return;
    }
    const JSONData = JSON.stringify({ email: email });
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONData,
    };
    const endpoint = "/api/newsletter";
    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      const result = await response.json();
      setSuccess(true);
      event.target.email.value = "";
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputFlex}>
        <label className={utilStyles.visuallyHidden} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <Button type="submit" className={styles.btn}>
          Register
        </Button>
      </div>
      {success && (
        <p className={`${utilStyles.headingMd} ${styles.mb1}`}>
          Thank you for signing up
        </p>
      )}
      <div className={utilStyles.visuallyHidden}>
        <label className={utilStyles.visuallyHidden} htmlFor="clientemail">
          Email
        </label>
        <input
          className={styles.input}
          type="email"
          name="clientemail"
          id="clientemail"
          placeholder="Client Email"
        />
      </div>
    </form>
  );
};

export default LetterForm;
