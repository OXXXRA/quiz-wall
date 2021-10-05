import { useStore } from "effector-react";
import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "../Link";
import Modal from "../Modal";
import { useRouter } from "next/router";
import {
  $createRecordModalStore,
  closeCreateRecordModal,
} from "./create-record-modal-state";

const Option = styled.div`
  min-width: 300px;

  border-radius: 5px;

  color: ${({ theme }) => theme.colors.primary.main};
  background-color: ${({ theme }) => theme.colors.white};

  font-size: 18px;
  line-height: 21px;
  font-weight: bold;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const options = [
  { link: "/quiz/create", text: "Быстрый опрос" },
  { link: "/post/create", text: "Публикация" },
  { link: "/testing/create", text: "Тестирование" },
];

const AddRecordModal = (props) => {
  const router = useRouter();
  const modal = useStore($createRecordModalStore);

  useEffect(() => {
    closeCreateRecordModal();
  }, [router.pathname]);
  return (
    <Modal
      close={() => closeCreateRecordModal()}
      open={modal}
      title="Новая запись"
      className="p-2"
      {...props}
    >
      {options.map(({ link, text }, index) => (
        <Link key={link} href={link}>
          <Option className="py-2 mb-2 text-center">{text}</Option>
        </Link>
      ))}
    </Modal>
  );
};

export default AddRecordModal;
