import React from 'react'
import Link from 'gatsby-link'
import SeeMyWorkArrow from '../images/seeMyWorkArrow.svg'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'

const IndexPage = () => (
  <div>
    <div className="intro">
      <div className="flexFiller" />

      <div className="homegreeting">
        <p className="greeting">Hello, I'm Alexis</p>
        <p className="role">Digital Product Designer</p>

        <div className="logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
      </div>

      <Link to="/page-2/" className="seeMyWork">
        <button>
          <span>See&nbsp;my&nbsp;work</span>
          <img src={SeeMyWorkArrow} />
        </button>
      </Link>
      <Wave />
    </div>

    <div className="projectCards">
      <ul>
        <li>
          <Card
            theme="dark"
            projectTitleImage={require('../images/projects/aop/jagAOPLogo@2x.png')}
            title="20 City Cross-China Tour"
            projectLink="artofperformance.html"
            projectHeroUnderlay={require('../images/projects/aop/aopHeroBW@2x.jpg')}
            projectHeroOverlay={require('../images/projects/aop/aopHero@2x.jpg')}
          />
        </li>
        <li>
          <Card
            theme="dark"
            projectTitleImage={require('../images/projects/aop/jagAOPLogo@2x.png')}
            title="20 City Cross-China Tour"
            projectLink="artofperformance.html"
            projectHeroUnderlay={require('../images/projects/aop/aopHeroBW@2x.jpg')}
            projectHeroOverlay={require('../images/projects/aop/aopHero@2x.jpg')}
          />
        </li>
      </ul>
    </div>

    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
  </div>
)

export default IndexPage
