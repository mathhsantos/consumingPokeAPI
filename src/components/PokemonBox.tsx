import { ImgHTMLAttributes } from "react"
import { styled } from "styled-components"

const Image = styled.img`
  position: absolute;
  height: 150px;
  width: 150px;
  z-index: 100;
  bottom: 290px;
  left: 110px;
`
interface MainImageProps extends ImgHTMLAttributes<HTMLImageElement>{}

export default function PokemonBox(props: MainImageProps) {
  return (
    <Image alt ='olá' {...props} />
  )
}