// React Component
import c from "classnames"
import { Link } from "gatsby"
import React from 'react'

const Nav = () => {
	const [opened, setOpened] = React.useState(false)

	const toggle = () => {
		setOpened(!opened)
	}
	const onClickElem = () => {
		setOpened(false)
	}

	return (
		<div className="nav-gradient">
			<div className="burger-menu" onClick={e => setOpened(!opened)}>
				<div class={c("burger burger-slide", opened && "open")}>
					<div class="burger-lines"></div>
				</div>
			</div>
			<nav className={c("nav-menu", opened ? "visible" : "")} >
				<Link to="/">Accueil</Link>
				<Link to="/equipe">Notre équipe</Link>
				<Link to="/agrements">Agréments</Link>
				<img className="logo-header" src="logo-fiducia.png" alt="Logo Fiducia" />
				<Link to="/process">Process</Link>
				<Link to="/champs-d-intervention">Champs d’intervention</Link>
				<Link to="/contact">Contact</Link>
			</nav>
		</div>
	)
}

export default Nav
