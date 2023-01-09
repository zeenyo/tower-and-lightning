import * as React from "react"
import "../styles/style.sass"
import Layout from '../components/layout.js'

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <h1>This is the about page.</h1>
      </main>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About | Tower & Lightning</title>
