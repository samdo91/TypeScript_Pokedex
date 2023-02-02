import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
function PokeHeader() {
  return (
    <HeaderDiv>
      <Link to="/">
        <Title> Pokédex</Title>
      </Link>

      <Select name="스프라이트">
        <option value="official">official</option>
        <option value="">드림월드</option>
        <option value="">택스트</option>
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
