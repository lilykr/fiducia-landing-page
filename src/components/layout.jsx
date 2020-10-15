import { Link } from "gatsby"
import React from "react"

export default function Layout({ children, headTitle, headerText }) {
	return (
		<div className="layout">
			<header className={children ? "" : "header-full-height"}>
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
			{children ? (
					<main>{children}</main>
				) : null}
			<footer>
				<div className="footer-elements-container">
					<div className="elements-footer">
						<img className="logo-footer" src="/phone.svg" />
						<div>06 17 88 87 35
					<br />06 86 14 21 74</div>
					</div>
					<div className="elements-footer">
						<img className="logo-footer" src="/location.svg" style={{height: "25px"}} />
						<div>41 rue Nicolas Bachelier
					<br />31000 Toulouse </div>
					</div>
					<div className="elements-footer">
						<img className="logo-footer" src="/mail.svg"  />
						<div>contact@fiducia-cf.com</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
