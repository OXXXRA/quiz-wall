import clsx from "clsx";
import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledLabel = styled.span`
  margin-bottom: 5px;

  font-weight: bold;
  font-size: 12px;

  color: ${({ theme }) => theme.colors.grey};
`;

const StyledError = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.error};
`;

const StyledIcon = styled.span`
  position: absolute;
  display: flex;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledInput = styled.input<any>`
  padding: 10px;
  
  width: 100%;
  border: 1px solid;
  border-color: ${({ error, theme }) =>
    error ? theme.colors.error : "#ffffff00"};
  outline: none;
  border-radius: 5px;

  background: ${({ primary, theme }) =>
    primary ? theme.colors.primary.light : theme.colors.white};

  font-size: 1.3em;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.grey};

  &:disabled {
    opacity: 0.7;
  }
`;

interface Props {
  label?: string;
  error?: string | boolean | string[];
  primary?: boolean;
  component?: string,
}

const Input: FC<Props & any> = ({
  label,
  error,
  icon,
  className,
  component,
  ...props
}) => {
  const Component = component || 'input'

  return (
    <Wrapper className={clsx(className)}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput as={Component}  {...props} />
      {error && <StyledError> {error}</StyledError>}
      {icon && <StyledIcon>{icon}</StyledIcon>}
    </Wrapper>
  );
};

export default Input;
