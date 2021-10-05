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
  right: 10px;
  top: 50%;

  display: flex;

  cursor: pointer;

  position: absolute;
  transform: translateY(-50%);
`;

const InputWrapper = styled.div<any>`
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ error, theme }) => (error ? theme.colors.error : "#ffffff00")};

  border-radius: 5px;

  background: ${({ primary, theme }) =>
    primary ? theme.colors.primary.light : theme.colors.white};
`;

const StyledInput = styled.input<any>`
  width: 100%;

  padding: 10px;

  border: none;
  outline: none;

  color: ${({ theme }) => theme.colors.grey};
  background: transparent;

  font-size: 1.3em;
  letter-spacing: 1px;

  resize: none;

  &:disabled {
    opacity: 0.7;
  }
`;

interface Props {
  label?: string;
  error?: string | boolean | string[];
  primary?: boolean;
  component?: string;
  append?: React.ReactNode;
}

const Input: FC<Props & any> = ({
  label,
  error,
  icon,
  className,
  component,
  append,
  primary,
  wrapperProps = {},
  ...props
}) => {
  const Component = component || "input";

  return (
    <Wrapper
      {...wrapperProps}
      className={clsx(className, wrapperProps.className)}
    >
      {label && <StyledLabel>{label}</StyledLabel>}
      <InputWrapper error={error} primary={primary}>
        {append && append}
        <StyledInput as={Component} {...props} />
      </InputWrapper>
      {error && <StyledError> {error}</StyledError>}
      {icon && <StyledIcon>{icon}</StyledIcon>}
    </Wrapper>
  );
};

export default Input;
