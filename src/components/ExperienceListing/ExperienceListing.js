import React from "react"
import "./ExperienceListing.scss"

export default function ExperienceListing({ link, title, description, timePeriod }) {
  return (
    <div className="ExperienceListing">
      <h3><a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >{title}</a></h3>
      <p>{description}
        <span className="timePeriod">{timePeriod}</span>
      </p>
    </div>
  )
}