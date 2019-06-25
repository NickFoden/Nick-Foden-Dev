// import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1rem`,
      padding: `1rem 1.5rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
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
