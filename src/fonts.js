import * as React from 'react'
import { Global } from '@emotion/react'

export const Fonts = () => (
    <Global
        styles={`
  /* latin-ext */
  @font-face {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700
  }
  `}
    />
)
