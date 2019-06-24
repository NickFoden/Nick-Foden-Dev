import React from "react"

const Image = ({ image, altProp, url }) => {
  return (
    <a href={url} rel="noopener noreferrer" to target="_blank">
      <img
        src={image}
        alt={altProp}
        style={{ ojectFit: "cover", width: "150px" }}
      />
    </a>
  )
}

export default Image
