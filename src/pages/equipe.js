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
      <div className="container">
      <div className="equipe-container-sarah">
      <img className="equipe-photo" src="sarah.jpg"/>
      <div className="equipe-text-sarah">
        <h2>Sarah Bouchité</h2>
        <h3>Associée fondatrice, Présidente</h3>
        <div>Titulaire du Master II ingénierie du patrimoine de Toulouse et d’une formation gestion de patrimoine professionnel,
        Sarah Bouchité met à votre disposition sa polyvalence et son expertise dans l’élaboration de stratégies patrimoniales personnalisées.
        Spécialisée dans le conseil auprès de chefs d’entreprise, elle saura vous faire bénéficier de ses compétences juridiques pour vous accompagner
        dans la vie de l’entreprise de la création jusqu’à la transmission.
      </div>
      </div>
      </div>
      <div className="equipe-container-chris">
      <img className="equipe-photo" src="chris.jpg"/>
      <div className="equipe-text-chris">
        <h2>Christopher Bort</h2>
        <h3>Associé fondateur, Directeur Général</h3>
        <div>Titulaire du Master II ingénierie du patrimoine de Toulouse et du diplôme fédéral de juriste du patrimoine, Christopher Bort met à profit ses 6 années d’expérience dans l’ingénierie et la gestion de patrimoine afin de répondre à vos exigences. Spécialisé dans l’élaboration de stratégies juridiques et fiscales, il saura maximiser vos stratégies et assurera un accompagnement avec vos autres conseils tels vos experts-comptables, notaires ou avocats.
    </div>
    </div>
    </div>
      </div>

    </Layout>
  )
}

