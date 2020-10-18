import React from "react"

import Layout from "../components/layout"

export default function Champs() {
  return (
    <Layout
      headTitle="Champs d'intervention"
    >
      <div className="container">
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

    </Layout>

  )
}
