import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/PitchSans-Regular.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="font ps"
    />,
    <link
      rel="preload"
      href="/fonts/Feijoa Display.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="font fa"
    />,
  ])
}
