import * as React from "react"

const ImageButtonMenu = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width={40}
    height={40}
    {...props}
  >
    <path d="M0 9v2h50V9Zm0 15v2h50v-2Zm0 15v2h50v-2Z" />
  </svg>
)

export default ImageButtonMenu