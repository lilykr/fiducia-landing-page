import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import ProcessStepHome from "../components/ProcessStepHome"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fiducia - Conseil en gestion de Patrimoine à Toulouse</title>
        <link rel="canonical" href="https://fiducia-cf.com" />
      </Helmet>
      <Layout headTitle="Fiducia Conseil et Finance" subTitle="Conseil en gestion de patrimoine à Toulouse" renderHeaderText={() => (
        <>
          Fiducia Conseil et Finance, société spécialisée dans le conseil en stratégie patrimoniale, est née de la volonté de vous proposer un conseil global, personnalisé et objectif. Notre souhait est de centrer notre relation sur la confiance et le conseil par une approche patrimoniale globale en mettant vos objectifs au centre de nos préconisations. Une bonne compréhension de votre situation et de vos objectifs vous assure un accompagnement sur-mesure dans la création, le développement et la transmission de votre patrimoine personnel et/ou professionnel. Cette approche se matérialise par la création d’audits patrimoniaux, dans lequel l’ensemble de votre situation actuelle et future fait l’objet d’une analyse objective. Celle-ci nous permet de vous préconiser une stratégie globale en adéquation avec vos objectifs et vos contraintes.
          <br />
          <br />
          Nous mutualisons notre expertise et partageons notre savoir-faire afin de vous accompagner dans les différentes étapes de votre construction patrimoniale. Les nombreuses mutations économiques, juridiques et fiscales nous confortent dans notre volonté de créer une relation d’accompagnement pérenne.
          <br />
          <br />
          Fiducia Conseil et Finance est adhérent de la Chambre Nationale des Conseils en Gestion de Patrimoine (CNCGP) et dispose d’un ensemble d’habilitations pour vous proposer une solution globale et sur-mesure (investissement financier, assurance, immobilier, produits bancaires). Nous exerçons un métier réglementé dans lequel il est nécessaire de se former et informer en toute transparence dans l’objectif de vous éclairer sur vos possibilités patrimoniales.
          <br />
          <br />
          <br />
          <br />
          <ProcessStepHome title="Rencontre, découverte et détermination de vos objectifs" >
          </ProcessStepHome>
          <ProcessStepHome title="Définition de nos missions" >
          </ProcessStepHome>
          <ProcessStepHome title="Rédaction et restitution de l’audit patrimonial" >
          </ProcessStepHome>
          <ProcessStepHome title="Mise en place des préconisations" >
          </ProcessStepHome>
          <ProcessStepHome title="Suivi et accompagnement" noLine >
          </ProcessStepHome>
        </>
      )}
      />
    </>
  )
}
