import React, { FC, useState } from "react";
import styled from "styled-components";
import { Button, Input } from "../../ui";
import { Plus, X, Image as ImageIcon } from "react-feather";
import Image from "next/image";
import useField from "./../../hooks/useField";

const Wrapper = styled.div`
  padding: 10px;

  border: 1px dashed ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.radius};
`;

const Grid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  aspect-ratio: 1;

  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};

  border-radius: ${({ theme }) => theme.radius};
`;

const DeleteButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

interface Props {}

const VariantImages: FC<Props> = (props) => {
  const imageLink = useField("");

  const [images, setImages] = useState([
    { link: "" },
    { link: "" },
    { link: "" },
    { link: "" },
  ]);

  const addImage = () => {
    const index = images.findIndex(({ link }) => !link);
    if (index === -1) return;

    const newImages = [...images];
    newImages[index].link = imageLink.value;
    setImages(newImages);
    imageLink.onChange("");
  };

  const deleteImage = (index) => {
    let newImages = [...images];
    newImages[index].link = "";
    setImages(newImages);
  };

  return (
    <Wrapper className="mb-1">
      <Grid className="mb-1">
        {images.map(({ link }, index) => (
          <ImageWrapper key={index}>
            {link ? (
              <>
                <Image
                  alt={link}
                  src={`/api/imageproxy?url=${encodeURIComponent(link)}`}
                  layout="fill"
                  objectFit="cover"
                />
                <DeleteButton
                  onClick={() => deleteImage(index)}
                  width="30px"
                  height="30px"
                  color="error"
                >
                  <X />
                </DeleteButton>
              </>
            ) : (
              <ImageIcon size="3rem" />
            )}
          </ImageWrapper>
        ))}
      </Grid>

      <div className="d-flex justify-center">
        <Input
          {...imageLink}
          wrapperProps={{
            style: { maxWidth: 300 },
          }}
          className="mr-1"
          placeholder="Ссылка на изображение"
        />
        <Button onClick={addImage} width="46px" height="46px" color="success">
          <Plus />
        </Button>
      </div>
      <p className="text-center weight-bold">
        Загрузите от 2 до 4 картинок (jpeg, png, gif)
      </p>
    </Wrapper>
  );
};

export default VariantImages;
