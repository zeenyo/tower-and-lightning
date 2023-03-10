import React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteTitle }) => (
  <footer>
    <div>
      © {new Date().getFullYear()} &middot; Built with 
      {` `} 
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer