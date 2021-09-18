import styled from 'styled-components';
import theme from "../styles/theme";
import { Button } from ".";


const TYPES = {
  error: theme.colors.error,
};

const StyledForm = styled.form`
  
width: ${({ width }) => width || '100%'};
height: 50px;

border: none;
border: ${({ type }) => `1px solid ${TYPES[type]}`};
border-radius: 5px;

background: ${({ colorsTheme }) => colorsTheme ? theme.colorsTheme[colorsTheme].background : theme.colorsTheme.greyBlack.background};

&:disabled {
  background: #cccccc;
}
`;

const StyledInput = styled.input`
  
  width: ${({ icon }) => icon ? '88.4%' : '100%'};
  height: ${({ type }) => type==='error' ? '48px' : '50px'};
  float: ${({ icon }) => icon ? 'left' : 'none'};
  padding-left: 18px;

  outline: none;
  border: none;
  border-radius: 5px;

  background: ${({ colorsTheme }) => colorsTheme ? theme.colorsTheme[colorsTheme].background : theme.colorsTheme.greyBlack.background};

  font-size: 1.3em;
  letter-spacing: 1px;
  color: ${({ colorsTheme }) => colorsTheme ? theme.colorsTheme[colorsTheme].color : theme.colorsTheme.greyBlack.color};

  &:disabled {
    background: #cccccc;
  }
`;

const Input = (props) => {
  const Component = props.tag || "input";
  
  return (
    <StyledForm  {...props}>
      <StyledInput {...props} as={Component} />
      <Button className={`${(props.icon) ? "icon" : "d-none"}`} 
              colorsTheme={`${(props.colorsTheme) ? props.colorsTheme : 'greyBlack'}`} 
              width={`${props.type==='error' ? '48px' : '50px'}`}
      />
    </StyledForm>
  )
};

export default Input;
