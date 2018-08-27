import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <div className="HeaderGroup">
          <div className="HeaderLogo">
            <Link to="/">
              <h1>Alexis Morin</h1>
              <h2>Designer</h2>
            </Link>
          </div>
          <div className="HeaderLinks">
            <Link to="#work">Work</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="HeaderSocial">
            <ul className="SocialIcons">
              <li>
                <Link to="https://twitter.com/thealexismorin">Tw</Link>
              </li>
              <li>
                <Link to="https://github.com/alexismo">GH</Link>
              </li>
              <li>
                <Link to="https://dribbble.com/alexismorin">dbbb</Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/thealexismorin/">
                  Insta
                </Link>
              </li>
              <li>
                <Link to="mailto:mail@alexismorin.com">@</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
