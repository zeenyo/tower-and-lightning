import React from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"
// import Logo2 from "../images/svgs/tl-logo3.inline.svg"

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