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
        IEnsuite, nous mettons à profit notre expertise au profit de la rédaction d’un audit patrimonial global. Votre situation fera l’objet d’un diagnostic et permettra l’élaboration d’une stratégie adaptée à vos objectifs préalablement définis et hiérarchisés. L’audit patrimonial et l’ensemble de nos préconisations vous seront présentés au travers d’un rendez-vous au cours duquel vous pourrez nous faire part de vos interrogations. Nous resterons également à votre écoute à la suite de cet entretien.
      <br /><br />Objectif : analyser votre situation, lister les points faibles et les atouts de votre situation actuelle et vous présenter nos préconisations afin d’atteindre vos objectifs patrimoniaux.      </ProcessStep>
      <ProcessStep title="Mise en place des préconisations" >
        Dès validation de l’audit et des solutions, un plan d’action est convenu afin d’appréhender au mieux la mise en place des préconisations. Nous assurons un lien entre les différents intervenants à la bonne mise en place des préconisations (notaires, avocats, experts-comptables). Notre rôle ne se limite pas à la proposition de stratégies, mais il implique également une participation et un accompagnement dans leurs mises en œuvre.
      <br /><br />Objectif : valider les solutions et initier la mise en place suivant un plan d’action et un calendrier.
      </ProcessStep>
      <ProcessStep title="Suivi et accompagnement" noLine>
        L’évolution de votre situation, de vos besoins et de l’environnement juridique et fiscal nécessite un accompagnement régulier. Nous vous proposons au minimum un rendez-vous annuel, permettant la mise à jour vos données, l’analyse des solutions mises en place et l’adaptation votre organisation patrimoniale.
      <br /><br /> Objectif : s’adapter aux changements de situation et offrir un suivi des préconisations dans la durée.
      </ProcessStep>
    </Layout>
  )
}
