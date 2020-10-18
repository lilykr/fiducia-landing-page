import React from "react"

import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout
      headTitle="Contacts"
      headerText="Nous vous accompagnons dans l’atteinte de vos objectifs patrimoniaux au travers d’un conseil individualisé et personnalisé.

Pour tout renseignement, veuillez nous contacter aux coordonnées suivantes ou remplir le formulaire de contact ci-après."
    >
      <div className="container">
        <div className="contact-page">
          <div className="infos-contact">
            <h2>Nos coordonnées</h2>
            <div>06 17 88 87 35
            <br />
            06 86 14 21 74
        <br />
        contact@fiducia-cf.com</div>
        <br />       
            <h2>Horaires</h2>
            <div>Du lundi au vendredi de 8h30 à 18h00</div>
          </div>
          <div className="container-form">
            <form className="contact-form">
              <label for="name">Nom*</label>
              <input type="text" id="name" name="name" />
              <label for="email">Adresse mail*</label>
              <input type="text" id="email" name="email" />
              <label for="phone">Téléphone</label>
              <input type="text" id="phone" name="phone" />
              <label for="subject">Sujet*</label>
              <input type="text" id="subject" name="subject" />
              <label for="message">Message*</label>
              <input className="input-message" type="text" id="message" name="message" />
            </form>
            <button className="button-form" type="submit" form="form" value="Submit">Envoyer</button>
          </div>
        </div>
      </div>

    </Layout>
  )
}
