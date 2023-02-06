import styled from "@emotion/styled";
import { useAtom } from "jotai";
import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { POKE_IMAGE_TYPE } from "../store/jotai";
import { pokeImageType } from "../store/jotai";

function PokeHeader() {
  const [type, setType] = useAtom(pokeImageType); //jotai 전역관리
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType({ type: e.target.value });
  };

  return (
    <HeaderDiv>
      {/* Link는 a태그를 대체한다. 링크는 새로고침을 하지 않는다. a태그는 새로고침을 한다.  */}
      <Link to="/">
        <Title> Pokédex</Title>
      </Link>

      {/* 샐랙트는 밸류값이 중요하다. 뭐 어디는 안그렀겠냐만은 */}
      <Select value={type.type} name="스프라이트" onChange={handleChange}>
        <option value={POKE_IMAGE_TYPE.OFFCIAL_ARTWORK}>Official</option>
        <option value={POKE_IMAGE_TYPE.DREAM_WORLD}>Dream_world</option>
        <option value={POKE_IMAGE_TYPE.FRONT_DEFAULT}>Default</option>
      </Select>
    </HeaderDiv>
  );
}

export default PokeHeader;

/* 이모션의 기본형은  
cosnt 이름 = ㄴstyled.태그 종류 `` 이다. 
그마나 스타일드가 가장 쓸만했다.
*/

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
