import c from "classnames"
import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatetelephonenumber(str) {
  if (str.length < 4)
    return false
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i)
    if (!(char >= '0' && char <= '9' || char === '+'))
      return false
  }
  return true
}

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


export default function Home() {
  const [done, setDone] = React.useState(false)
  const [state, setState] = React.useState({})
  const [errors, setErrors] = React.useState({
    nom: null,
    email: null,
    sujet: null,
    message: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (checkErrors())
      return

    const form = e.target

    const body = encode({
      'form-name': form.getAttribute('name'),
      ...state,
    })

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(() => setDone(true))
      .catch((error) => alert(error))
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
    onBlur(e)
  }

  const setError = (field, hasError) => {
    setErrors({ ...errors, [field]: hasError })
  }

  const checkErrors = () => {
    let hasError = false
    Object.values(errors).forEach(f => {
      if (f !== false)
        hasError = true
    })
    return hasError
  }

  const checkError = (field, value) => {
    if (field === 'nom')
      setError(field, value.length === 0)
    if (field === 'email')
      setError(field, !validateEmail(value))
    if (field === 'sujet')
      setError(field, value.length === 0)
    if (field === 'message')
      setError(field, value.length === 0)
  }

  const onBlur = (e) => {
    checkError(e.target.name, e.target.value)
  }

  return (
    <Layout
      headTitle="Contact"
      headerText="Nous vous accompagnons dans l’atteinte de vos objectifs patrimoniaux au travers d’un conseil individualisé et personnalisé.

Pour tout renseignement, veuillez nous contacter aux coordonnées suivantes ou remplir le formulaire de contact ci-après."
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fiducia - contact</title>
        <link rel="canonical" href="https://fiducia-cf.com/contact" />
      </Helmet>
      <div className="container">
        {!done ?
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
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="contact-form"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>
                {/* Bot field end */}
                <label htmlFor="nom" className={c(errors.nom && "form-error")}>Nom*</label>
                <input type="text" id="nom" name="nom" className={c(errors.nom && "form-error")} onBlur={onBlur} onChange={handleChange} />
                <label htmlFor="email" className={c(errors.email && "form-error")}>Adresse mail*</label>
                <input type="text" id="email" name="email" className={c(errors.email && "form-error")} onBlur={onBlur} onChange={handleChange} />
                <label htmlFor="telephone">Téléphone</label>
                <input type="text" id="telephone" name="telephone" onBlur={onBlur} onChange={handleChange} />
                <label htmlFor="sujet" className={c(errors.sujet && "form-error")}>Sujet*</label>
                <input type="text" id="sujet" name="sujet" className={c(errors.sujet && "form-error")} onBlur={onBlur} onChange={handleChange} />
                <label htmlFor="message" className={c(errors.message && "form-error")}>Message*</label>
                <textarea className="input-message" type="text" id="message" name="message" className={c(errors.message && "form-error")} onBlur={onBlur} onChange={handleChange} />
                <button type="submit" className="button-form">Envoyer</button>
              </form>
            </div>
          </div>
          :
          <>
            <h2 style={{ marginBottom: "10px" }}>Merci de nous avoir contactés</h2>
            <div style={{ fontSize: "1.16em" }}>Nous reviendrons vers vous rapidement.</div>
          </>
        }
      </div>

    </Layout>
  )
}
