import React from 'react'
import Link from 'gatsby-link'
import SeeMyWorkArrow from '../images/seeMyWorkArrow.svg'

const IndexPage = () => (
  <div className="intro">

    <div className="flexFiller"></div>

    <div className="homegreeting">
      <p className="greeting">Hello, I'm Alexis</p>
      <p className="role">Digital Product Designer</p>
    </div>

    <Link to="/page-2/" className="seeMyWork">
      <button>
        <span>See&nbsp;my&nbsp;work</span>
        <img src={SeeMyWorkArrow} />
      </button>
        {/* <img src={DownChevron} /> */}
    </Link>
  </div>
)

export default IndexPage