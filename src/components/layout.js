// import React from "react"
// import Header from '../components/header.js'
// import Helmet from 'react-helmet'
// import { useStaticQuery, graphql } from "gatsby"

// const Layout = ({ children }) => (
//   const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: `var(--size-content)`,
//           padding: `var(--size-gutter)`,
//         }}
//       >
//         <main>{children}</main>
//         <footer
//           style={{
//             marginTop: `var(--space-5)`,
//             fontSize: `var(--font-sm)`,
//           }}
//         >
//           © {new Date().getFullYear()} &middot; Built with
//           {` `}
//           <a href="https://www.gatsbyjs.com">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }
// )

// export default Layout