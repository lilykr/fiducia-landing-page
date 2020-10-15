import React from "react"
import { Link } from "gatsby"

export default function Layout({ children, headTitle, headerText, boldTitleSection, thinTitleSection, verySmallTitle}) {
	return (
		<div className="layout">
			<header>
				<div className="nav-gradient">
					<nav>
						<Link to="/">Accueil</Link>
						<Link to="/equipe">Notre équipe</Link>
						<Link to="/agrements">Agréments</Link>
						<img className="logo-header" src="/logo-fiducia.png" />
						<Link to="/process">Process</Link>
						<Link to="champs-d-intervention">Champs d’intervention</Link>
						<Link to="contact">Contact</Link>
					</nav>
				</div>
				<div className="container">
					{headTitle ? (
						<h1>{headTitle}</h1>
					) : null}
					{headerText ? (
						<div className="header-text">{headerText}</div>
					) : null}
				</div>

			</header>
			<main>
				{boldTitleSection ? (
					<h2>{boldTitleSection}</h2>
				) : null}

				{thinTitleSection ? (
					<h3>{thinTitleSection}</h3>
				) : null}

				{verySmallTitle ? (
					<h4>{verySmallTitle}</h4>
				) : null}

				{children ? (
					<div>{children}</div>
				) : null}
			</main>
			<footer>
				<div className="footer-elements-container">
					<div className="elements-footer">
						<img className="logo-footer" src="/phone.png" />
						<div>06 17 88 87 35
					<br />06 86 14 21 74</div>
					</div>
					<div className="elements-footer">
						<img className="logo-footer" src="/location.png" />
						<div>41 rue Nicolas Bachelier
					<br />31000 Toulouse </div>
					</div>
					<div className="elements-footer">
						<img className="logo-footer" src="/envelope.png" />
						<div>contact@fiducia-cf.com</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
