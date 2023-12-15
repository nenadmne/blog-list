import classes from "./contact-form.module.css";

export default function ContactForm() {
  return (
    <section className={classes.contact}>
      <h1> How can i help you? </h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email"> Your email </label>
            <input type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name"> Your name </label>
            <input type="text" id="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message"> Your message </label>
          <textarea id="message" rows="5" />
        </div>
        <div className={classes.action}>
          <button> Send message </button>
        </div>
      </form>
    </section>
  );
}
