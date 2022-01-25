import { Link } from "gatsby"
import React from "react"

export default function ArticleCard({ title, img, alt, description, date, propertyType, price, surface, numberOfRooms, localisation, realEstate }) {
    const formattedDate = new Date(date).toLocaleDateString("fr-FR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    return (
        <div className='card'>
            <img className='card-image' src={img} alt={alt} />
            <div className='card-content'>
                <h3 className='article-card-title'>{title}</h3>
                {realEstate ?
                    <>
                        <div className='card-categories'>
                            <div>
                                <p className='category'>Prix: {price ? `${price}€` : "Non renseigné"}</p>
                                <p className='category'>Surface: {surface ? `${surface}m²` : "Non renseignée"}</p>
                            </div>
                            <div>
                                <p className='category'>Type de bien: {propertyType ? propertyType : "Non renseigné"}</p>
                                <p className='category'>Nombre de pièces: {numberOfRooms ? numberOfRooms : "Non renseigné"}</p>
                            </div>
                        </div>

                        <p className='category'>Localisation: {localisation ? localisation : "Non renseigné"}</p>
                    </>
                    : <p>{formattedDate}</p>}

                <p>{description}</p>
            </div>
        </div>
    )
}
