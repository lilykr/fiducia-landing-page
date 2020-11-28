import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fiducia - Agréments</title>
        <link rel="canonical" href="https://fiducia-cf.com/agrements" />
      </Helmet>
      <Layout headTitle="Agréments" renderHeaderText={() => (
        <>
          Fiducia Conseil et Finance est membre de la Chambre Nationale des Conseils en Gestion de Patrimoine (CNCGP), association représentative de la profession.
        <br />
          <br />
        L’ensemble de nos activités est contrôlé par l’Autorité des Marchés Financiers (AMF) et l’Autorité de contrôle prudentiel et de résolution (ACPR). Cette réglementation assure la délivrance de prestations objectives, transparentes et protectrices.
        <br />
          <br />
        Au travers de documents obligatoires, vous obtiendrez les informations nécessaires à la bonne compréhension de nos process, de nos missions et de nos préconisations.
      </>
      )}>
        <div className="container">
          <h3>Nos différentes habilitations</h3>
          <ul className="list-habilitations">
            <li> Conseiller en investissement financier: nous mettons à votre disposition notre expertise afin de vous conseiller et orienter dans la mise en place d’investissement en adéquation avec votre situation, vos objectifs et votre horizon de placement.</li>
            <br />
            <br />
            <li>Intermédiaire en assurance : a la suite de l’élaboration de votre stratégie globale, nous vous accompagnons dans la mise en place de nos préconisations dont la souscription de solutions d’assurance. Nous travaillons avec de nombreux partenaires sélectionnés pour leurs prestations haut de gamme. </li>
            <br />
            <br />
            <li>Carte de transaction immobilière : nous vous accompagnons dans la recherche d’une solution immobilière sur-mesure. </li>
            <br />
            <br />
            <li>Intermédiaire en opérations de banque et services de paiement </li>
          </ul>
          <br />
          <br />
      Fiducia Conseil et Finance, SAS au capital de 4 000€, RCS Toulouse 885 221 960, enregistrée à l’ORIAS sous le n°20007249 (www.orias.fr) en qualité de courtier en assurance, intermédiaire en opérations de banque et en services de paiement positionné en catégorie de mandataire non exclusif et de conseiller en investissements financiers, adhérent de la chambre nationale des conseillers en gestion de patrimoine, association agréée par l’autorité des marchés financiers, activité de démarchage bancaire et financier, activité de transaction sur immeubles et fonds de commerce : carte professionnelle n°CPI 3101 2020 000 045 291 délivrée par la CCI de Toulouse. Ne peut recevoir aucun fonds, effet et valeur. Garantie financière de la compagnie MMA IARD Assurances Mutuelles/MMA IARD, 14 boulevard Marie et Alexandre Oyon 72030 Le Mans Cedex 9.
      </div>
      </Layout>
    </>
  )
}
