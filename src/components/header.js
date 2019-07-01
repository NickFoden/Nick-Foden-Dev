import React from "react"
import { Link } from "gatsby"

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
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <h1>{siteTitle}</h1>
      </Link>
    </div>
  </header>
)

export default Header
