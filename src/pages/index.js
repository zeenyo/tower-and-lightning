import * as React from "react"

// import Layout from '../components/layout.js'

// import Logo from "../images/svgs/tl-logo.inline.svg"
import "../styles/style.sass"

const IndexPage = () => {
  return (
      <main>
        <section id="place-hero">
          <div className="bg"></div>
          <div className="lightning flashit"></div>
          <div className="filter">
            <h1>Tower & Lightning</h1>
            <p>Coming Soon</p>
          </div>
        </section>
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Home | Tower & Lightning</title>
