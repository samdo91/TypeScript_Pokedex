import axios from "axios";

export interface PokePersonlApiList {
  name: string;
  id: number;
  height: number;
  weight: number;
  stats: [
    { base_stat: number; stat: { name: string } },
    { base_stat: number; stat: { name: string } },
    { base_stat: number; stat: { name: string } },
    { base_stat: number; stat: { name: string } },
    { base_stat: number; stat: { name: string } },
    { base_stat: number; stat: { name: string } }
  ];
  types: [{ type: { name: string } }];
  sprites: {
    other: {
      official: any;
      dream_world: { front_default: string };
      /* 특수문자  "-"는 사용할 수 없기 때문에 ''으로 하나의 문자열로 만들어준다.*/
      "official-artwork": { front_default: string };
      home: { front_default: string };
    };
  };
}
export interface IspeciesApiList {
  color: { name: string };
  names: {
    [x: string]: any;
    language: {
      name: string;
    };
  };
}

const remote = axios.create();
async function PokePersonalapi(name: string) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const speciesUrl = ` https://pokeapi.co/api/v2/pokemon-species/${name}`;
  const response = await remote.get<PokePersonlApiList>(url);
  const speciesResponse = await remote.get<IspeciesApiList>(speciesUrl);
  return { result: response.data, speciesResult: speciesResponse.data };
}

export default PokePersonalapi;
