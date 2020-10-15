import React, { Children } from "react"

import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout
      headTitle="Notre équipe"
      headerText="Fiducia Conseil et Finance est né de la volonté de proposer un conseil poussé et personnalisé à ses clients. 
    Notre volonté est de centrer notre relation sur la confiance et le conseil par une approche patrimoniale globale. 
    Une bonne compréhension de votre situation et de vos objectifs vous assure un accompagnement sur-mesure dans la création, 
    le développement et la transmission de votre patrimoine personnel et/ou professionnel. "
    >
      <h2>Sarah Bouchité</h2>
      <h3>Associée fondatrice, Présidente</h3>
      <div>Titulaire du Master II ingénierie du patrimoine de Toulouse et d’une formation gestion de patrimoine professionnel,
      Sarah Bouchité met à votre disposition sa polyvalence et son expertise dans l’élaboration de stratégies patrimoniales personnalisées.
      Spécialisée dans le conseil auprès de chefs d’entreprise, elle saura vous faire bénéficier de ses compétences juridiques pour vous accompagner
      dans la vie de l’entreprise de la création jusqu’à la transmission.
      </div>
      <h2>Chris</h2>
      <h3>Associée fondatrice, Présidente</h3>
      <div>Titulaire du Master II ingénierie du patrimoine de Toulouse et d’une formation gestion de patrimoine professionnel,
      Sarah Bouchité met à votre disposition sa polyvalence et son expertise dans l’élaboration de stratégies patrimoniales personnalisées.
      Spécialisée dans le conseil auprès de chefs d’entreprise, elle saura vous faire bénéficier de ses compétences juridiques pour vous accompagner
      dans la vie de l’entreprise de la création jusqu’à la transmission.
    </div>
    </Layout>
  )
}

