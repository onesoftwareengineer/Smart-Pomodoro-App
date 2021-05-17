import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
	body {
		//-webkit-tap-highlight-color: ${theme`colors.purple.500`};
    //${tw`antialiased`};
    ${tw`m-0 p-0`}
	}
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
