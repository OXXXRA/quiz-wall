import React from "react";
import { LogOut, Plus } from "react-feather";
import styled from "styled-components";
import { Button, Input } from "../ui";
import Link from "./Link";

const StyledHeader = styled.div`
  width: 100%;
  height: min-content;
  padding: 10px 0;

  box-shadow: 1px 1px 3px #747474;
  background: ${({ theme }) => theme.colors.primary.main};
  position: sticky;
  top: 0;

  font-size: 20px;
`;

const Logo = styled(Link)`
  margin-right: auto;

  font-weight: bold;
  color: white;
  font-size: 1.5rem;
  letter-spacing: 5px;
`;

const HeaderButton = styled(Button)`
  padding: 5px;

  width: 30px;
  height: 30px;

  border-radius: 50%;
`;

const SearchInput = styled(Input)`
  flex: 0 0 1;
  margin: 0 20px;
  padding: 5px 10px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="container  d-flex">
        <Logo href="/">QUIZ</Logo>
        <SearchInput placeholder="Поиск" />
        <div className="d-flex">
          <HeaderButton
            tag={Link}
            href="/login"
            className="mr-10"
            color="transparent"
          >
            <LogOut />
          </HeaderButton>
          <Link href="/record/create" style={{ marginRight: "auto" }}>
            <HeaderButton color="#2AE78D">
              <Plus />
            </HeaderButton>
          </Link>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
