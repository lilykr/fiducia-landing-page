import { Link } from "gatsby"
import React from "react"

const arrLinkNavBar = [
	{
		name: "Accueil",
		link: "/"
	},

	{
		name: "Notre équipe",
		link: "/equipe"
	},

	{
		name: "Agréments",
		link: "/agrements"
	},

	{
		logo: true
	},

	{
		name: "Process",
		link: "/process"
	},

	{
		name: "Champs d'intervention",
		link: "/champs-d-intervention"
	},

	{
		name: "Contact",
		link: "/contact"
	}

]


export default function Layout({ children, headTitle, headerText }) {


	return (
		<div className="layout">
			<header className={children ? "" : "header-full-height"}>
				<div className="nav-gradient">
					<nav>
						{arrLinkNavBar.map(element => {
							if (element.logo) {
								return <img className="logo-header" src="logo-fiducia.png" alt="Logo Fiducia" />
							}
							return <Link className={`link-header ${window.location.pathname === element.link ? "link-header-underlined" : "" }`} to={element.link}>{(element.name)}</Link>
						})}
						{/* <Link className="link-header" to="/">{arrLinkNavBar[0]}</Link>
						<Link className="link-header" to="/equipe">{arrLinkNavBar[1]}</Link>
						<Link className="link-header" to="/agrements">{arrLinkNavBar[2]}</Link>
						<img className="logo-header" src="logo-fiducia.png" alt="Logo Fiducia" />
						<Link className="link-header" to="/process">{arrLinkNavBar[3]}</Link>
						<Link className="link-header" to="/champs-d-intervention">{arrLinkNavBar[4]}</Link>
						<Link className="link-header" to="/contact">{arrLinkNavBar[5]}</Link> */}
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
						<img className="logo-footer" src="/location.svg" style={{ height: "25px" }} />
						<div>41 rue Nicolas Bachelier
					<br />31000 Toulouse </div>
					</div>
					<div className="elements-footer">
						<img className="logo-footer" src="/mail.svg" />
						<div>contact@fiducia-cf.com</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
