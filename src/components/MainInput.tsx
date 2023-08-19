import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";

const PokeInput = styled.input`
  border: none;
  width: 130px;
  padding: 20px;
  position: absolute;
  top: 527px;
  left: 100px;
  border-radius: 20px;
  background-color: transparent;
  color: black;
  border: none;
  
  &:focus {
    outline: none;
  }
`
interface MainInputProps extends InputHTMLAttributes<HTMLInputElement>{}

export default function MainInput(props: MainInputProps){
  return (
    <PokeInput {...props} />
  )
}