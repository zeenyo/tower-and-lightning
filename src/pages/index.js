import * as React from "react"

// import Layout from '../components/layout.js'

import Logo from "../images/svgs/tl-logo.inline.svg"
import "../styles/style.sass"

const IndexPage = () => {
  return (
    // <Layout>
      <main>
        <div class="placeholder">
          <Logo id="logo" />
          <h1>Tower & Lightning</h1>
          <h2>Currently under construction.</h2>
        </div>
      </main>
    // </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home | Tower & Lightning</title>
