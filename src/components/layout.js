import * as React from "react"
// import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Header from '../components/header.js'
import Footer from '../components/footer.js'


const Layout = ({ pageName, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
            menuLinks {
              name
              link
            }
        }
      }
    }
  `)

  return (
    <>
      {/*<Helmet>
       <link
          rel="icon"
          type="image/png"
          href="../images/icon.png"
        />
      </Helmet>*/}
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`
        }}
      >
        <main id={pageName}>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout