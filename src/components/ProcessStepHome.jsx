import { Link } from "gatsby"
import React from "react"

export default function ProcessStepHome({ title, children, noLine }) {
  return (
    <div className={`process-step-home ${noLine ? "noLine" : ""}`}>
      <div className="process-handle-home" />
      <h2 className="process-step-title-home">{title}</h2>
      {children}
    </div>
  )
}
