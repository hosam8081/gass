import React from "react"

const ImageSection = ({image}) => {
  return (
    <div className="md:w-1/2 order-1">
        <img src={image} width="80%"/>
    </div>
  )
}

export default ImageSection