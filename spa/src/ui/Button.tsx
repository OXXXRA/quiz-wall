import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};

  padding: 10px;
  letter-spacing: 1px;
  font-size: 1em;
  border: 1px solid transparent;
  background-color: #2653ff;
  color: white;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active{
    border: 1px solid lightblue;
  } 
`

export default function Button(props) {
  return <StyledButton {...props} />
}
