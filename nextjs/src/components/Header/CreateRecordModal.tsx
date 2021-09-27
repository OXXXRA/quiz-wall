import React from 'react';
import styled from "styled-components";
import { Button } from "../../ui";
import Modal from "../Modal";
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
  { text: "Быстрый опрос" },
  { text: "Публикация" },
  { text: "Тестирование" },
];

const AddRecordModal = (props) => {
  return (
    <Modal title="Новая запись" {...props}>
      {options.map((option, index) => (
        <Option key={index} className="py-2 mb-2 text-center">
          {option.text}
        </Option>
      ))}

      <div className="d-flex gap-10 justify-end">
        <Button color="white" flat>
          Отмена
        </Button>
        <Button color="success">Далее</Button>
      </div>
    </Modal>
  )
}

export default AddRecordModal
