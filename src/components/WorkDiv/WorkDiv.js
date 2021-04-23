import React from 'react'
import { Frame, Icon, IconList, Upper, HrsMins, CTA } from './style'

export default function WorkDiv({children, ...restProps}) {
  return(
    <Frame {...restProps}>
      {children}
    </Frame>
  )
}

WorkDiv.Timer = function({children, ...restProps}) {
  return <HrsMins>{children}</HrsMins>
}

WorkDiv.CallToAction = function({children, ...restProps}) {
  return <CTA>{children}</CTA>
}

WorkDiv.Menu = function({children, ...restProps}) {
  return <IconList>{children}</IconList>
}

WorkDiv.MenuIcon = function({src, alt, ...restProps}) {
  return <Icon src={src} alt={alt} />
}

WorkDiv.UpperPart = function({children, ...restProps}) {
  return <Upper>{children}</Upper>
}