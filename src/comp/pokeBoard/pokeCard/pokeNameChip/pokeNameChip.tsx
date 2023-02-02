import styled from "@emotion/styled";
import React from "react";

interface Ichip {
  name: string;
  number: number;
  colors: string;
}

function PokeNameChip(props: Ichip) {
  const { name, number, colors } = props;
  return (
    <NameChip>
      <Number color={colors}>{number} </Number>
      <Name> {name}</Name>
    </NameChip>
  );
}

export default PokeNameChip;
const NameChip = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  font-weight: bold;
  box-shadow: 0.5px 0.5px 00 #c0c0c0;
  font-size: 16px;
`;
const Number = styled.div<{ color: string }>`
  padding: 4px 6px;
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  background-color: ${(props) => props.color};
`;

const Name = styled.label`
  margin: 0 8px 0 5px;
`;
