import c from "classnames"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
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
		name: "Immobilier",
		link: "/immobilier"
	},

	{
		name: "Newsletter",
		link: "/newsletter"
	},

	{
		name: "Contact",
		link: "/contact"
	}

]

export default function Layout({ children, headTitle, subTitle, headerText, renderHeaderText }) {
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
						<StaticImage className="logo-header mobile" src="../../static/logo-fiducia.png" alt="Logo de Fiducia, le Conseil en gestion de patrimoine à Toulouse”" />
						<div className="burger-menu" onClick={toggle}>
							<div className={c("burger burger-slide", opened && "open")}>
								<div className="burger-lines"></div>
							</div>
						</div>
						<nav className={c("nav-menu-mobile", opened ? "visible" : "")} >
							{arrLinkNavBar.map((element) => {
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
								return <StaticImage key={element.name} className="logo-header" src="../../static/logo-fiducia.png" alt="Logo de Fiducia, le Conseil en gestion de patrimoine à Toulouse”" />
							}
							return <Link key={element.link} className={`link-header ${typeof window !== `undefined` && window.location.pathname === element.link ? "link-header-underlined" : ""}`} to={element.link}>{(element.name)}</Link>

						})}
					</nav>
				</div>
				<div className="container">
					{headTitle ? (
						<>
							<h1>{headTitle}</h1>
							<h2 className="subTitle">{subTitle}</h2>

						</>
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
						<img className="logo-footer" src="/phone.svg" alt="telephone" />
						<div>06 17 88 87 35
							<br />06 86 14 21 74</div>
					</div>
					<div className="footer-separator" />
					<div className="elements-footer">
						<img className="logo-footer" src="/location.svg" style={{ height: "25px" }} alt="adresse" />
						<div>6 Rue des Couteliers
							<br />31000 Toulouse </div>
					</div>
					<div className="footer-separator" />
					<div className="elements-footer">
						<img className="logo-footer" src="/mail.svg" alt="mail" />
						<div>contact@fiducia-cf.com</div>
					</div>
					<div className="footer-separator" />
					<div className="elements-footer">

						<div className="elements-footer-social-media">
							<a href='https://www.instagram.com/fiduciaconseiletfinance/?hl=en'>
								<img className="logo-footer-social-media" src="/instagram.svg" alt="instagram" />
							</a>
							{/* <img className="logo-footer-social-media" src="/facebook.svg" alt="facebook" /> */}
						</div>
						<div>Suivez-nous sur les réseaux</div>
					</div>

				</div>
			</footer>
		</div>
	)
}
