import React from 'react'
import { LogOut, Plus } from 'react-feather'
import styled from 'styled-components'
import { Button } from '../ui'
import Link from './Link'

const StyledHeader = styled.div`
  width: 100%;
  height: min-content;
  padding: 10px;
  background-color: grey;
`

const Header = () => {
  return (
    <StyledHeader>
      <div className="container  d-flex">
        <Link href="/quiz/create"
          style={{ marginRight: 'auto' }}
        >
          <Button
            width="60px" height="60px">
            <Plus />

          </Button>
        </Link>
        <Button width="60px" height="60px">
          <LogOut />
        </Button>
      </div>
    </StyledHeader>
  )
}

export default Header
