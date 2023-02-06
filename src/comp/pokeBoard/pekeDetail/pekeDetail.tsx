import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokeHeader from "../../pokeHeader/pokeHeader";
import Pokemark from "../pokeCard/pokeMark/pokemak";
import PokePersonalapi from "../../store/pokePersonalapi";
import { useAtom } from "jotai";
import { pokeImageType } from "../../store/jotai";

interface IDataList {
  name: string;
  koreaName: string;
  id: number;
  height: number;
  weight: number;
  color: string;
  sprites: {
    dream_world: string;
    official_artwork: string;
    front_default: string;
    [prop: string]: any;
  };
  types: string[];
  stats: [
    { base_stat: number; name: string },
    { base_stat: number; name: string },
    { base_stat: number; name: string },
    { base_stat: number; name: string },
    { base_stat: number; name: string },
    { base_stat: number; name: string }
  ];
}

function PoekDetail() {
  const { itemName } = useParams() as { itemName: string };
  const [type, setType] = useAtom(pokeImageType);
  const [pokeDataList, setPokeDataList] = useState<IDataList>({
    name: "",
    koreaName: "",
    id: 0,
    height: 0,
    weight: 0,
    color: "",
    sprites: {
      dream_world: "",
      official_artwork: "",
      front_default: "",
    },
    types: [],
    stats: [
      { base_stat: 0, name: "" },
      { base_stat: 0, name: "" },
      { base_stat: 0, name: "" },
      { base_stat: 0, name: "" },
      { base_stat: 0, name: "" },
      { base_stat: 0, name: "" },
    ],
  });

  useEffect(() => {
    (async () => {
      const results = await PokePersonalapi(itemName);
      const { result, speciesResult } = results;
      //코리안 네임을 파인드로 찾아낸다.
      const koreaNames =
        speciesResult.names?.find(
          (item: { language: { name: string } }) => item.language.name === "ko"
        ).name ?? itemName;
      //타입이 두개있을 수
      const types = result.types.map((item) => {
        return item.type.name;
      });

      setPokeDataList({
        id: result.id,
        koreaName: koreaNames,
        name: result.name,
        height: result.height,
        weight: result.weight,
        color: speciesResult.color.name,
        sprites: {
          dream_world: result.sprites.other.dream_world.front_default,
          official_artwork:
            result.sprites.other["official-artwork"].front_default,
          front_default: result.sprites.other.home.front_default,
        },
        types: types,
        stats: [
          {
            base_stat: result.stats[0].base_stat,
            name: result.stats[0].stat.name,
          },
          {
            base_stat: result.stats[1].base_stat,
            name: result.stats[1].stat.name,
          },
          {
            base_stat: result.stats[2].base_stat,
            name: result.stats[2].stat.name,
          },
          {
            base_stat: result.stats[3].base_stat,
            name: result.stats[3].stat.name,
          },
          {
            base_stat: result.stats[4].base_stat,
            name: result.stats[4].stat.name,
          },
          {
            base_stat: result.stats[5].base_stat,
            name: result.stats[5].stat.name,
          },
        ],
      });
    })();
  }, [itemName]);

  return (
    <div>
      <PokeHeader />
      <Body>
        <ImgContainer>
          <Img
            src={pokeDataList.sprites[type.type]}
            alt={pokeDataList.koreaName}
          ></Img>
        </ImgContainer>
        <Divider />
        <DataBorad>
          <h2>기본정보</h2>
          <Table>
            <tbody>
              <TableRow>
                <TableHeader>번호</TableHeader>
                <td>{pokeDataList.id}</td>
              </TableRow>
              <TableRow>
                <TableHeader>이름</TableHeader>
                <td>{pokeDataList.koreaName}</td>
              </TableRow>
              <TableRow>
                <TableHeader>타입</TableHeader>
                <td>{pokeDataList.types}</td>
              </TableRow>
              <TableRow>
                <TableHeader>키</TableHeader>
                <td>{pokeDataList.height}</td>
              </TableRow>
              <TableRow>
                <TableHeader>몸무게</TableHeader>
                <td>{pokeDataList.weight}</td>
              </TableRow>
            </tbody>
          </Table>

          <h2>능력치</h2>
          <Table>
            <tbody>
              <TableRow>
                <TableHeader>hp</TableHeader>
                <td>{pokeDataList.stats[0].base_stat}</td>
              </TableRow>
              <TableRow>
                <TableHeader>attack</TableHeader>
                <td>{pokeDataList.stats[1].base_stat}</td>
              </TableRow>
              <TableRow>
                <TableHeader>defense</TableHeader>
                <td>{pokeDataList.stats[2].base_stat}</td>
              </TableRow>
              <TableRow>
                <TableHeader>special-attack</TableHeader>
                <td>{pokeDataList.stats[3].base_stat}</td>
              </TableRow>
              <TableRow>
                <TableHeader>special-defense</TableHeader>
                <td>{pokeDataList.stats[4].base_stat}</td>
              </TableRow>
              <TableRow>
                <TableHeader>speed</TableHeader>
                <td>{pokeDataList.stats[5].base_stat}</td>
              </TableRow>
            </tbody>
          </Table>
        </DataBorad>
        <Mark>
          <Pokemark />
        </Mark>
      </Body>
    </div>
  );
}

export default PoekDetail;

const Body = styled.section`
  border: 1px solid #c0c0c0;
  margin: 16px 32px;
  border-radius: 16px;

  box-shadow: 1px 1px 3px 1px #c0c0c0;
`;

const ImgContainer = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;
const Img = styled.img`
  width: 350px;
  height: 350px;
`;

const Divider = styled.hr`
  margin: 32px;
  border-style: none;
  border-top: 1px dashed #d3d3d3;
`;

const DataBorad = styled.section`
  margin: 0 32px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spaciong: 0;
  margin: 0 auto 16px;
  th,
  td {
    padding: 6px 16px;
  }
`;

const TableRow = styled.tr`
  border: 1px solid #f0f0f0;
`;

const TableHeader = styled.th`
  width: 110px;
  white-space: nowrap;
  text-align: left;
  font-weight: noemal;
  fornt-size: 14px;
  color: #a0a0a0;
`;

const Mark = styled.section`
  display: flex;
  flex-diretion: row;
  margin: 15px 10px;
`;
