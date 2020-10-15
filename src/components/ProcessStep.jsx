import { Link } from "gatsby"
import React from "react"

export default function ProcessStep({ title, children, noLine }) {
	return (
		<div>
			<div className="process-step container">
			<div className="process-handle" />
			<div className={noLine ? "process-line-white" : "process-line"} />
				<h2 className="process-step-title">{title}</h2>
				{children}
			</div>
		</div>

	)
}
