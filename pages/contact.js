import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title> Contact </title>
        <meta name="description" content="Send me your messages" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
