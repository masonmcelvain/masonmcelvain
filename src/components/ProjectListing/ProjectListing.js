import React from "react"
import "./ProjectListing.scss"

export default function ProjectListing({ link, title, description}) {
  return (
    <div className="ProjectListing">
      <h3><a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              >{title}</a></h3>
          <p>{description}</p>
    </div>
  )
}