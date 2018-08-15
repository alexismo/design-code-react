import React from 'react'
import Link from 'gatsby-link'
import DownChevron from '../images/downchevron.svg'

const IndexPage = () => (
  <div className="intro">

    <div className="flexFiller"></div>

    <div className="homegreeting">
      <p className="greeting">Hello, I'm Alexis</p>
      <p className="role">Digital Product Designer</p>
    </div>

    <Link to="/page-2/" className="seeMyWork">
      <button>See&nbsp;my&nbsp;work
        <img src={DownChevron} />
      </button>
        {/* <img src={DownChevron} /> */}
    </Link>
  </div>
)

export default IndexPage