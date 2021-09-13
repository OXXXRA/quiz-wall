import styled from 'styled-components'
import theme from "../styles/theme";


const TYPES = {
  error: theme.colors.error,
};

const StyledInput = styled.input`
  
  width: ${({ sizeRect, width }) => sizeRect ? theme.sizeRect[sizeRect].width : width || "100%"};
  height: ${({ sizeRect, height }) => sizeRect ? theme.sizeRect[sizeRect].height : height || "100%"};
  
  border: none;
  border: ${({ type }) => `1px solid ${TYPES[type]}`};
  box-sizing: border-box;
  border-radius: 5px;

  background: ${({ colors }) => colors ? theme.colors[colors].background : 'white'};

  font-size: 1.3em;
  letter-spacing: 1px;
  color: ${({ colors }) => colors ? theme.colors[colors].color : 'black'};

  &:disabled {
    background: #cccccc;
  }
`
export default function Input(props) {
  return <StyledInput {...props}/>
}
