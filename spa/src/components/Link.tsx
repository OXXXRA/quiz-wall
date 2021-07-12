import NextLink from 'next/link'
import React from 'react'

const Link: any = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  )
}
export default Link
