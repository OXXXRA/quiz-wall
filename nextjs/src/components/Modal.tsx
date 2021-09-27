import { FC } from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";
import CloseIcon from "../icons/CloseIcon";

const Content = styled.div`
  z-index: 100;

  width: fit-content;

  border-radius: ${({ theme }) => theme.radius};

  background: ${({ theme }) => theme.colors.primary.light};

  color: ${({ theme }) => theme.colors.grey};
`;

const Close = styled.div`
  top: 20px;
  right: 20px;

  position: absolute;

  cursor: pointer;
`;

const Blur = styled.div`
  z-index: 100;

  height: 100vh;
  width: 100vw;

  position: fixed;

  opacity: 0.7;

  background-color: ${({ theme }) => theme.colors.grey};
`;

const StyledModal = styled.div`
  z-index: 100;

  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;

  top: 0;
  bottom: 0;
  right: 0;
  top: 0;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.05em;
`;


interface IModal {
  title?: string,
  open?: boolean,
  close?: () => void
}

const Modal: FC<IModal> = ({ children, title, open, close = () => { } }, ...props) => {

  if (!open) return null;
  if (typeof window === "undefined") return null

  return ReactDOM.createPortal(
    <StyledModal>
      <Blur onClick={close}></Blur>
      <Content className="p-2 relative" {...props}>
        <Close onClick={close}>
          <CloseIcon />
        </Close>
        {title &&
          <Title className="m-0 mb-2">{title}</Title>
        }
        {children}

      </Content>
    </StyledModal>,
    document.getElementById("modal")
  );


};

export default Modal;
