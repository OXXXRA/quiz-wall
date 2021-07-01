import React from 'react'
import styled from 'styled-components'
import { Button } from '../ui'

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: grey;
`

const Header = () => {
  return (
    <StyledHeader>
      <div className="container p-1 d-flex">
        <Button
          style={{ marginRight: 'auto' }}
          width="60px" height="60px">+</Button>
        <Button width="60px" height="60px">Exit</Button>
      </div>
    </StyledHeader>
  )
}

export default Header
