import styled from 'styled-components'

const StyledInput = styled.input`
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
`

export default function Input(props) {
  return <StyledInput {...props}/>
}
