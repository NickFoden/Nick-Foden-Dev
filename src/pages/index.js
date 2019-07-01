import React from "react"
import "../css/styles.css"

import AboutSection from "../components/AboutSection"
import BodySection from "../components/BodySection"
import Layout from "../components/layout"
import ProjectsSection from "../components/ProjectsSection"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      description="NYC Based Full Stack Web Developer Nick Foden"
      title="Nick Is Online"
    />
    <BodySection />
    {/*}<ProjectsSection />*/}
    <AboutSection />
  </Layout>
)

export default IndexPage
