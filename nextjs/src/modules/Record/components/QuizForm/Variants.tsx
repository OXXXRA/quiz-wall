import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "../../../../icons/CloseIcon";
import { Button, Checkbox, Input } from "../../../../ui";
import uid from "../../../../utils/uid";

const Variant = styled.div`
  position: relative;
`;

const VariantInput = styled(Input)`
  padding-left: 40px;
  
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const VariantCheckbox = styled<any>(Checkbox)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const VariantButton = styled(Button)`
  width: 40px;
  
  aspect-ratio: 1;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;

const AddVariant = styled(Button)`
  background: transparent;
  color: #00000099;
  justify-content: flex-start;
  border: none !important;
  padding: 0 5px;
  font-size: 12px;
  width: auto;
`;

const Variants = () => {
  const [variants, setVariants] = useState([
    { id: uid(), name: "", is_correct: false },
    { id: uid(), name: "", is_correct: true },
  ]);

  const toggleCorrect = (id) => {
    setVariants((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, is_correct: !item.is_correct };
        }
        return item;
      });
    });
  };

  const deleteVariant = (id) =>
    setVariants((prev) => prev.filter(({ id: _id }) => _id !== id));

  const createVariant = () => {
    if (variants.length > 9) return;
    setVariants([...variants, { id: uid(), name: "", is_correct: false }]);
  };

  const changeName = (id, value) => {
    setVariants((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, name: value };
        }
        return item;
      });
    });
  };
  
  return (
    <>
      {variants.map(({ id, name, is_correct }, index) => (
        <Variant className="d-flex mb-1" key={id}>
          <VariantInput
            value={name}
            onChange={({ target: { value } }) => changeName(id, value)}
            onKeyPress={({ key }) =>
              key === "Enter" &&
              variants[variants.length - 1].name.length > 2 &&
              createVariant()
            }
            placeholder={"Вариант " + (index + 1)}
            autoFocus
          />
          <VariantCheckbox
            active={is_correct}
            onClick={() => toggleCorrect(id)}
          />
          <VariantButton
            disabled={variants.length < 3}
            onClick={() => deleteVariant(id)}
          >
            <CloseIcon />
          </VariantButton>
        </Variant>
      ))}

      <AddVariant onClick={() => createVariant()} className="mb-2">
        Добавить вариант + {" "}
      </AddVariant>
    </>
  );
};

export default Variants;
