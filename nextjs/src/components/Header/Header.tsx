import React from "react";
import { LogOut, Plus } from "react-feather";
import styled from "styled-components";
import { Button, Input } from "../../ui";
import { openCreateRecordModal } from "./create-record-modal-state";
import AddRecordModal from "./CreateRecordModal";
import Link from "./../Link";

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px;

  width: 100%;

  position: sticky;
  z-index: 10;
  top: 0;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 4px 7px rgba(64, 64, 64, 0.2);
`;

const Avatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

const Logo = styled.div`
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.main};

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

const Header = () => {
  return (
    <Container>
      <div className="container d-flex align-center">
        <Link href="/">
          <Logo className="mr-1">Q</Logo>
        </Link>

        <Input primary className="mr-2" placeholder="Поиск" />
        <div className="d-flex">
          <Button
            className="mr-2"
            onClick={() => openCreateRecordModal()}
            color="success"
            width="40px"
            height="40px"
            fab
          >
            <Plus />
          </Button>
          <Link href="/profile">
            <Avatar />
          </Link>
        </div>
      </div>
      <AddRecordModal />
    </Container>
  );
};

export default Header;
