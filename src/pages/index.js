import React from "react"
import "../css/styles.css"

import AboutSection from "../components/AboutSection"
import BodySection from "../components/BodySection"
import Layout from "../components/layout"
import PodcastSection from "../components/PodcastSection"
import ProjectsSection from "../components/ProjectsSection"
import SEO from "../components/seo"
import ToolsSection from "../components/ToolsSection"

const IndexPage = () => (
  <Layout>
    <SEO
      description="NYC Based Full Stack Web Developer Nick Foden"
      title="Nick Is Online"
    />
    <BodySection />
    <ProjectsSection />
    <ToolsSection />
    <PodcastSection />
    <AboutSection />
  </Layout>
)

export default IndexPage
