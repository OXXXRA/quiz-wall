import NextLink from "next/link";
import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  cursor: pointer;
`;

const Link: any = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  );
};
export default Link;
