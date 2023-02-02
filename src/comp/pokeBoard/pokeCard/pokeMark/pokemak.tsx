import React from "react";
import styled from "@emotion/styled";

function Pokemark() {
  return (
    <NameChip>
      <Texts>Pokémon</Texts>
    </NameChip>
  );
}

export default Pokemark;

const NameChip = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid #c0c0c0;
  border-radius: 16px;

  font-weight: bold;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
  font-size: 14px;

  margin-left: auto;
  margin-right: 16px;
  margin-top: 15px;
`;

const Texts = styled.div`
  padding: 0 8px;
  font-size: 13px;
`;
