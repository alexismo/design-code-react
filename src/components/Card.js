import React from 'react'
import './Card.css'

//{props.theme === 'dark'?'CardDark':'CardLight'}

const Card = props => (
  <div className="Card">
    <div className="projectHeroImage">
      <img className="underlay" src={props.projectHeroUnderlay} />
      <img className="overlay" src={props.projectHeroOverlay} />
    </div>
    <div className="projectDescriptionAndLink">
      <div className="projectDescription">
        <img className="projectTitleImage" src={props.projectTitleImage} />
        <p className="projectTitle">{props.title}</p>
      </div>
      <div className="viewProjectLink">
        <a href={props.projectLink}>
          View this Project
          <img
            className="viewProjectLinkRightChevron"
            src="/images/rightChevron.svg"
          />
        </a>
      </div>
    </div>
  </div>
)

export default Card
