import React from "react"
import "./ProjectListing.scss"

export default function ProjectListing(props) {
  return (
    <div className="ProjectListing">
      <h3><a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              >{props.heading}</a></h3>
          <p>{props.description}</p>
    </div>
  )
}