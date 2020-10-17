import c from "classnames"
import { Link } from "gatsby"
import React from "react"
import { useMediaQuery } from "react-responsive"

import Nav from "./Nav"

export default function Layout({ children, headTitle, headerText }) {
	const [opened, setOpened] = React.useState(false)


	const isMobile = useMediaQuery({
		query: '(min-device-width: 1024px)'
	})

	const toggle = () => {
		setOpened(!opened)
	}
	const onClickElem = () => {
		setOpened(false)
	}

	return (
		<div className="layout">
			<header className={children ? "" : "header-full-height"}>
				{/* {
					isDesktopOrLaptop ?
				}
				<Nav /> */}
				<div className="nav-gradient">
					<div className="burger-menu" onClick={toggle}>
						<div class={c("burger burger-slide", opened && "open")}>
							<div class="burger-lines"></div>
						</div>
					</div>
					{isMobile ?
						<nav className={c("nav-menu", opened ? "visible" : "")} >
							<img className="logo-header" src="logo-fiducia.png" alt="Logo Fiducia" />
					<Link to="/">Accueil</Link>
					<Link to="/equipe">Notre équipe</Link>
					<Link to="/agrements">Agréments</Link>
					<Link to="/process">Process</Link>
					<Link to="/champs-d-intervention">Champs d’intervention</Link>
					<Link to="/contact">Contact</Link>
						</nav>
						:
							<nav >
					<Link to="/">Accueil</Link>
					<Link to="/equipe">Notre équipe</Link>
					<Link to="/agrements">Agréments</Link>
					<img className="logo-header" src="logo-fiducia.png" alt="Logo Fiducia" />
					<Link to="/process">Process</Link>
					<Link to="/champs-d-intervention">Champs d’intervention</Link>
					<Link to="/contact">Contact</Link>
				</nav>
						
					}

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
		</div >
	)
}
