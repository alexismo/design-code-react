import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import SeeMyWorkArrow from '../images/seeMyWorkArrow.svg'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import Cell from '../components/Cell'
import staticdata from '../../staticdata.json'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

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

    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage
