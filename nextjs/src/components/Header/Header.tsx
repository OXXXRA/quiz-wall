import React from "react";
import { LogOut, Plus } from "react-feather";
import styled from "styled-components";
import { Button, Input } from "../../ui";
import Link from "../Link";
import { openCreateRecordModal } from './create-record-modal-state';
import AddRecordModal from "./CreateRecordModal";

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
  padding-left: 0px !important;
  padding-right: 0px !important;

  width: 30px !important;
  max-width: 30px !important;
  height: 30px !important;


  border-radius: 50%;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="container d-flex align-center">
        <Logo className="mr-1" href="/">QUIZ</Logo>
        <Input className="mr-1" placeholder="Поиск" />
        <div className="d-flex">
          <HeaderButton
            tag={Link}
            href="/auth"
            className="mr-1"
            color="transparent"
          >
            <LogOut />
          </HeaderButton>

          <HeaderButton
            onClick={() => openCreateRecordModal()}
            color="#2AE78D">
            <Plus />
          </HeaderButton>
        </div>
      </div>
      <AddRecordModal />
    </StyledHeader>
  );
};

export default Header;
