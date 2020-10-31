import c from "classnames"
import { Link } from "gatsby"
import React from "react"
import { useMediaQuery } from "react-responsive"

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
		name: "Process",
		link: "/process"
	},

	{
		logo: true
	},


	{
		name: "Champs d'intervention",
		link: "/champs-d-intervention"
	},

	{
		name: "Agréments",
		link: "/agrements"
	},

	{
		name: "Contact",
		link: "/contact"
	}

]

export default function Layout({ children, headTitle, headerText, renderHeaderText }) {
	const [opened, setOpened] = React.useState(false)

	// const isMobile = useMediaQuery({
	// 	query: '(max-width: 1024px)'
	// })

	const toggle = () => {
		setOpened(!opened)
	}
	const onClickElem = () => {
		setOpened(false)
	}

	return (
		<div className="layout">
			<header className={children ? "" : "header-full-height"}>
				<div className="nav-gradient">
					<div className="mobile-nav-wrapper">
						<img className="logo-header mobile" src="logo-fiducia.png" alt="Logo Fiducia" />
						<div className="burger-menu" onClick={toggle}>
							<div className={c("burger burger-slide", opened && "open")}>
								<div className="burger-lines"></div>
							</div>
						</div>
						<nav className={c("nav-menu-mobile", opened ? "visible" : "")} >
						{arrLinkNavBar.map(element => {
							if (element.logo) {
								return null
							}
							return <Link key={element.link} className={`link-header ${typeof window !== `undefined` && window.location.pathname === element.link ? "link-header-underlined" : ""}`} to={element.link}>{(element.name)}</Link>

						})}
						</nav>
					</div>
					<nav className="desktop-nav-wrapper">
						{arrLinkNavBar.map(element => {
							if (element.logo) {
								return <img className="logo-header" src="logo-fiducia.png" alt="Logo Fiducia" />
							}
							return <Link key={element.link} className={`link-header ${typeof window !== `undefined` && window.location.pathname === element.link ? "link-header-underlined" : ""}`} to={element.link}>{(element.name)}</Link>

						})}
					</nav>
				</div>
				<div className="container">
					{headTitle ? (
						<h1>{headTitle}</h1>
					) : null}
					{headerText ? (
						<div className="header-text">{headerText}</div>
					) : null}
					{renderHeaderText ? (
						<div className="header-text">{renderHeaderText()}</div>
					) : null}
				</div>

			</header>
			{
				children ? (
					<main>{children}</main>
				) : null
			}
			<footer>
				<div className="footer-elements-container">
					<div className="elements-footer">
						<img className="logo-footer" src="/phone.svg" />
						<div>06 17 88 87 35
					<br />06 86 14 21 74</div>
					</div>
					<div className="footer-separator" />
					<div className="elements-footer">
						<img className="logo-footer" src="/location.svg" style={{ height: "25px" }} />
						<div>41 rue Nicolas Bachelier
					<br />31000 Toulouse </div>
					</div>
					<div className="footer-separator" />
					<div className="elements-footer">
						<img className="logo-footer" src="/mail.svg" />
						<div>contact@fiducia-cf.com</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
