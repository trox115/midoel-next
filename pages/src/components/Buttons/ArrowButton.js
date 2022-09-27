import styled from '@emotion/styled';

function ArrowButton({isNext=true, onClick, disabled}) {
    return (
      <Button disabled={ disabled } onClick={onClick}>
        { isNext ? '>' : '<'}
      </Button>
    )
}

const Button = styled.button`
  border: 1px solid black;
  width: 50px;
  height: 50px;
  font-size:25px;
  background-color: transparent;
  background-repeat:no-repeat;

  &:hover{
    cursor: pointer;
    color: white;
    background-color: black;
  }

  &:disabled {
    cursor: initial;
    background-color: transparent;
    color: grey;
    user-select: none;
    background-repeat:no-repeat;
  }
`


export default ArrowButton
