import React from "react"
// import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Header siteTitle="Nick Is Online" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Nick Foden</footer>
      </div>
    </div>
  )
}

export default Layout
