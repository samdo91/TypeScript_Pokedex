import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import PokeNameChip from "./pokeNameChip/pokeNameChip";
import Pokemark from "./pokeMark/pokemak";
import PokePersonalapi from "../../store/pokePersonalapi";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { RootState } from "../../store/redux";

interface IpersonalList {
  name: string;
  koreaName: string;
  id: number;
  height: number;
  weight: number;
  color: string;
  loading: Boolean;
  sprites: {
    dream_world: string;
    official_artwork: string;
    front_default: string;
    [prop: string]: any; // 이게 뭔지 찾아야 할것이다. 내 생각으로는 뭔가 any를 암묵적으로 포함시키는 문장같다.
  };
}

function PokeCard(props: { name: string; url: string }) {
  const { name, url } = props;

  const imageType = useSelector((state: RootState) => state.imageType.type); // redux 사용

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [personalList, setPersonalList] = useState<IpersonalList>({
    name: "",
    koreaName: "",
    id: 0,
    height: 0,
    weight: 0,
    color: "",
    loading: false,
    sprites: {
      dream_world: "",
      official_artwork: "",
      front_default: "",
    },
  });

  useEffect(() => {
    if (!inView) {
      return;
    }
    (async () => {
      const results = await PokePersonalapi(name);
      const result = results.result;
      const speciesResult = results.speciesResult;
      const koreaNames =
        speciesResult.names.find(
          (item: { language: { name: string } }) => item.language.name === "ko"
        )?.name ?? result.name;
      setPersonalList({
        name: result.name,
        id: result.id,
        height: result.height,
        weight: result.weight,
        sprites: {
          dream_world: result.sprites.other.dream_world.front_default,
          official_artwork:
            result.sprites.other["official-artwork"].front_default,
          front_default: result.sprites.other.home.front_default,
        },
        color: speciesResult.color.name,
        koreaName: koreaNames,
        loading: true,
      });
    })();
  }, [name, inView]);

  if (!personalList.loading) {
    return (
      <CardBox ref={ref}>
        <Header>
          <PokeNameChip name="포켓몬" number={0} colors="yellow" />
        </Header>
        <Boby>
          <LoadingQuestion>?</LoadingQuestion>
        </Boby>
        <Footer>
          <Pokemark />
        </Footer>
      </CardBox>
    );
  } else {
    return (
      <CardBox ref={ref}>
        <Header>
          <PokeNameChip
            name={personalList.koreaName}
            number={personalList.id}
            colors={personalList.color}
          />
        </Header>
        <Boby>
          <Img
            src={personalList.sprites[imageType]}
            alt={personalList.koreaName}
          ></Img>
        </Boby>
        <Footer>
          <Pokemark />
        </Footer>
      </CardBox>
    );
  }
}

export default PokeCard;

const CardBox = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid #c0c0c0;
  width: 250px;
  height: 300px;
  box-shadow: 1px 1px 3px 1px #c0c0c0;
`;

const Header = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

const Boby = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
  flex: 1 1 auto;
`;
const Img = styled.img`
  width: 180px;
  height: 180px;
`;

const Footer = styled.section`
  display: flex;
  flex-diretion: row;
`;

const LoadingQuestion = styled.div`
  font-size: 100px;
  color: yellow;
`;
