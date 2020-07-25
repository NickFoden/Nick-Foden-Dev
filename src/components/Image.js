import React from "react"

const Image = ({ image, altProp, url }) => {
  return (
    <a href={url} rel="noopener noreferrer" to target="_blank">
      <img
        src={image}
        alt={altProp}
        style={{
          ojectFit: "cover",
          width: "auto",
          height: "150px",
          zIndex: 5,
        }}
      />
    </a>
  )
}

export default Image
