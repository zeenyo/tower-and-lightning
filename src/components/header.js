import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, menuLinks }) => (
  <header id="header">
      <div id="header-navigation-wrapper">
        <nav id="navigation">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
            <div className="menu-items">
              <ul>
                { menuLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
        </nav>        
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header