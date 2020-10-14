import React from "react"
import { Link } from "gatsby"

export default function Layout({ children, headTitle, headerText }) {
	return (
		<div className="layout">
			<header>
				<div className="nav-gradient">
					<nav>
						<Link to="/">Accueil</Link>
						<Link to="/equipe">Notre équipe</Link>
						<Link>Agréments</Link>
						<img />
						<Link>Process</Link>
						<Link>Champs d’intervention</Link>
						<Link>Contact</Link>
					</nav>
				</div>
				<div className="container">
					{headTitle ? (
						<h1>{headTitle}</h1>
					) : null}
					{headerText ? (
						<div>{headerText}</div>
					) : null}
				</div>

			</header>
			<main>
				{children}
			</main>
			<footer>
				<div className="footer-elements-container">
					<div>Telephone</div>
					<div>Addresse</div>
					<div>mail</div>
				</div>
			</footer>
		</div>
	)
}
