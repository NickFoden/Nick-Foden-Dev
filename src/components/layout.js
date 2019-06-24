import React from "react"
// import styled from "styled-components"

import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div>
      <Header siteTitle="Nick Is Online" />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
