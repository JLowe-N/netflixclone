import React from "react"
import { Spinner, Picture, LockBody, ReleaseBody } from "./styles/loading"

export default function Loading({ src, children, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`images/users/${src}.png`} />
    </Spinner>
  )
}

Loading.ReleaseBody = function LoadingReleaseBody({ children, ...restProps }) {
  return <ReleaseBody {...restProps}>{children}</ReleaseBody>
}
