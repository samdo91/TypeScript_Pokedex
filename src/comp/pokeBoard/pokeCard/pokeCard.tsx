import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import PokeNameChip from "./pokeNameChip/pokeNameChip";
import Pokemark from "./pokeMark/pokemak";
import PokePersonalapi from "../../store/pokePersonalapi";
import { useInView } from "react-intersection-observer";
import { useAtom } from "jotai";
import { pokeImageType } from "../../store/jotai";

// interface를 쓸때는 앞에 I를 붙이고 Type을 쓸때는 앞에 T를 붙이자.그냥 내가 약속한다.
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
    [prop: string]: any;
  };
}

function PokeCard(props: { name: string; url: string }) {
  const { name, url } = props;
  const [type, setType] = useAtom(pokeImageType);
  //intersection-observer. ref는 관찰할 컨테이너나 태그라고 보면된다.
  // inView는 그로 인한 상태값이라고 보면 될것이다.
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
    // inview가 true가 아니면 작동하지 않는다.
    if (!inView) {
      return;
    }
    (async () => {
      const results = await PokePersonalapi(name);
      const result = results.result;
      const speciesResult = results.speciesResult;
      const koreaNames =
        speciesResult.names.find(
          (item: { language: { name: any } }) => item.language.name === "ko"
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
  //*로딩 화면 대신 로딩 카드로 만들었다. 기본적으로 personalList가 생성될떄는loading의 기본값을 farse로 해놓았다. 그리고 useEffet가 한번 돌아서 로딩값이 ture가 되먄 아래 최종컨포넌트로 변경된다. */
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
            src={personalList.sprites[type.type]}
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
