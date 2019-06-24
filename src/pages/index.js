import React from "react"
import "../css/styles.css"

import BodySection from "../components/BodySection"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO description="A gatsby site for Nick Foden" title="Nick Is Online" />
    <BodySection />
  </Layout>
)

export default IndexPage
