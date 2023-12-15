"use client"

import MainInput from "@/components/MainInput";
import Pokedex from "@/components/Pokedex";
import { PrincipalDiv } from "@/components/PrincipalDiv";
import { useState } from "react";
import { styled } from "styled-components";
import PokemonBox from "@/components/PokemonBox";

const DivPoke = styled.div`
  position: relative;
  width: 800px;
`

export default function Home() {
  const [name, setName] = useState('')
  const [pokemon, setPokemon] = useState<PokemonData | null>(null)

  interface PokemonData {
    name?: string,
    urlImage: string,
  }

  const data = async (name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => response.json())
    return response
  }

  const handleEvent = (e: any) => {
    if (e.keyCode === 13) {
      data(name.toLowerCase())
        .then(response => {
          setPokemon({ urlImage: response?.sprites?.front_default })
        })
        .catch(response => console.log(response))
    }
  }

  return (
    <PrincipalDiv>
      <DivPoke>
        {pokemon ? <PokemonBox src={`${pokemon?.urlImage}`} /> : ''}
        <MainInput
          type="text"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          onKeyDown={handleEvent}
        />
        <Pokedex />
      </DivPoke>
    </PrincipalDiv>
  )
}
