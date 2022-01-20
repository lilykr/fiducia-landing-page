import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import ProcessStep from "../components/ProcessStep"

export default function Process() {
  return (
    <Layout headTitle="Process" >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fiducia - Process</title>
        <link rel="canonical" href="https://fiducia-cf.com/process" />
      </Helmet>
      <ProcessStep title="Rencontre, découverte et détermination de vos objectifs" >
        Il est primordial à se connaître. L’élaboration d’une stratégie patrimoniale adaptée et personnalisée ne sera possible qu’après découverte de l’ensemble de votre situation économique, juridique, fiscale et successorale ainsi que de vos objectifs patrimoniaux.
        <br /><br /> Objectif : connaître votre situation, définir et hiérarchiser vos objectifs, lister et intégrer vos contraintes.
      </ProcessStep>
      <ProcessStep title="Définition de nos missions" >
        Définir nos missions consiste à délimiter notre champ d’intervention. Ces missions découlent directement des informations recueillies lors de la découverte de votre situation et de vos objectifs.
        <br /><br />Objectif : contractualiser les conditions et les modalités d’intervention.
      </ProcessStep>
      <ProcessStep title="Rédaction et restitution de l’audit patrimonial" >
        Ensuite, nous mettons à profit notre expertise au profit de la rédaction d’un audit patrimonial global. Votre situation fera l’objet d’un diagnostic et permettra l’élaboration d’une stratégie adaptée à vos objectifs préalablement définis et hiérarchisés. L’audit patrimonial et l’ensemble de nos préconisations vous seront présentés au travers d’un rendez-vous au cours duquel vous pourrez nous faire part de vos interrogations. Nous resterons également à votre écoute à la suite de cet entretien.
        <br /><br />Objectif : analyser votre situation, lister les points faibles et les atouts de votre situation actuelle et vous présenter nos préconisations afin d’atteindre vos objectifs patrimoniaux.      </ProcessStep>
      <ProcessStep title="Mise en place des préconisations" >
        Dès validation de l’audit et des solutions, un plan d’action est convenu afin d’appréhender au mieux la mise en place des préconisations. Nous assurons un lien entre les différents intervenants à la bonne mise en place des préconisations (notaires, avocats, experts-comptables). Notre rôle ne se limite pas à la proposition de stratégies, mais il implique également une participation et un accompagnement dans leurs mises en œuvre.
        <br /><br />Objectif : valider les solutions et initier la mise en place suivant un plan d’action et un calendrier.
      </ProcessStep>
      <ProcessStep title="Suivi et accompagnement" noLine>
        L’évolution de votre situation, de vos besoins et de l’environnement juridique et fiscal nécessite un accompagnement régulier. Nous vous proposons au minimum un rendez-vous annuel, permettant la mise à jour vos données, l’analyse des solutions mises en place et l’adaptation votre organisation patrimoniale.
        <br /><br /> Objectif : s’adapter aux changements de situation et offrir un suivi des préconisations dans la durée.
      </ProcessStep>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Fiducia - Champs d'intervention</title>
        <link rel="canonical" href="https://fiducia-cf.com/immobilier" />
      </Helmet>
      <div className="container">
        <h1 className='blue-title'>Champs d'intervention</h1>
        <div className="text-top-champs">L’ensemble de nos solutions, montages, et stratégies globales sont élaborés selon notre expérience et nos compétences juridiques, fiscales et financières. Nous sommes en capacité de répondre à vos objectifs comme notamment</div>
        <ul className="list-champs">
          <li>Préparer la retraite </li>
          <li>Protection de proches </li>
          <li>Anticiper la transmission de son patrimoine </li>
          <li>Développer la trésorerie d’entreprise </li>
          <li>Anticiper la cession de son entreprise </li>
          <li>Diminuer sa pression fiscale </li>
          <li>Valorisation son patrimoine </li>
          <li>Obtention de revenus complémentaires. </li>
        </ul>

        <div className="text-bottom-champs">Forts d’une expérience en matière d’ingénierie patrimoniale et fiscale, nous vous accompagnons dans la réponse à vos objectifs patrimoniaux.</div>
      </div>


      <Helmet>
        <meta charSet="utf-8" />
        <title>Fiducia - Agréments</title>
        <link rel="canonical" href="https://fiducia-cf.com/newsletter" />
      </Helmet>
      <div className="container">
        <h1 className='blue-title'>Agréments</h1>
        Fiducia Conseil et Finance est membre de la Chambre Nationale des Conseils en Gestion de Patrimoine (CNCGP), association représentative de la profession.
        <br />
        <br />
        L’ensemble de nos activités est contrôlé par l’Autorité des Marchés Financiers (AMF) et l’Autorité de contrôle prudentiel et de résolution (ACPR). Cette réglementation assure la délivrance de prestations objectives, transparentes et protectrices.
        <br />
        <br />
        Au travers de documents obligatoires, vous obtiendrez les informations nécessaires à la bonne compréhension de nos process, de nos missions et de nos préconisations.
      </div>
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
  )
}
