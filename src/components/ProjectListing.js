import React from "react"
import categoryStyles from "./ProjectListing.css"

export default function ProjectListing(props) {
  return (
    <div className={categoryStyles.category}>
      <h3><a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              >{props.heading}</a></h3>
          <p>{props.description}</p>
    </div>
  )
}