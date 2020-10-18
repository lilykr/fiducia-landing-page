import React from "react"

import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout headTitle="Agréments">
      <div className="container">
      <div className="text-top-agrements">
      <p>L’ensemble de nos activités est contrôlé par l’Autorité des Marchés Financiers (AMF) et l’Autorité de contrôle prudentiel et de résolution (ACPR). Cette réglementation assure la délivrance de prestations objectives, transparentes et protectrices.
      <br />
      <br />
      Au travers de documents obligatoires, vous obtiendrez les informations nécessaires à la bonne compréhension de nos process, de nos missions et de nos préconisations.
      <br />
      <br />
      Mentions obligatoires ? Orias, carte T, assurance responsabilité civile.</p>
      </div>
        <h3>Nos différentes habilitations</h3>
        <ul className="list-agrements">
          <li>- Conseiller en investissement financier </li>
          <li>- Intermédiaire en assurance </li>
          <li>- Carte de transaction immobilière </li>
          <li>- Intermédiaire en opérations de banque et services de paiement </li>
        </ul>
      </div>

    </Layout>
  )
}
