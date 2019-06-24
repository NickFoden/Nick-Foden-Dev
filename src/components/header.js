// import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        textAlign: "right",
      }}
    >
      <h1>{siteTitle}</h1>
    </div>
  </header>
)

export default Header

// <Link
// to="/"
// style={{
//   textDecoration: `none`,
// }}
// >
// {siteTitle}
// </Link>
