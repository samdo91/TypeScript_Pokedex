import styled from "@emotion/styled";
import { useAtom } from "jotai";
import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { POKE_IMAGE_TYPE } from "../store/jotai";
import { pokeImageType } from "../store/jotai";

function PokeHeader() {
  const [type, setType] = useAtom(pokeImageType);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType({ type: e.target.value });
  };

  return (
    <HeaderDiv>
      <Link to="/">
        <Title> Pokédex</Title>
      </Link>

      <Select value={type.type} name="스프라이트" onChange={handleChange}>
        <option value={POKE_IMAGE_TYPE.OFFCIAL_ARTWORK}>Official</option>
        <option value={POKE_IMAGE_TYPE.DREAM_WORLD}>Dream_world</option>
        <option value={POKE_IMAGE_TYPE.FRONT_DEFAULT}>Default</option>
      </Select>
    </HeaderDiv>
  );
}

export default PokeHeader;

const HeaderDiv = styled.div`
  display: flex;
//   justify-content: space-between;
  padding: 16px: 32px;
  margin-bottom : 16px;
  border-bottom: 1px solid #c0c0c0;
`;

const Title = styled.nav`
  margin: 0;
  font-size: 32px;
  border-radius: 4px;
  color: #ffca09;
  text-shadow: 1px 0 blue, 0 2px blue, 1px 0 blue, 0 1px blue;
  &:hover {
    color: white;
  }
`;

const Select = styled.select`
  display: flex;
  margin-left: auto;
  padding: 8px 12px;
  border-radius: 8px;
`;
