import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import AxiosApi, { IPokemonListResponse } from "../store/axiosApi";
import PokeCard from "./pokeCard/pokeCard";
import { Link } from "react-router-dom";
import useInfiniteScroll from "react-infinite-scroll-hook";
export interface IpokeState {
  name: string;
  url: string;
}

function PokeBoard() {
  const [pokeState, setPokeState] = useState<IPokemonListResponse>({
    count: 0,
    next: "",
    results: [],
  });

  const [fokeInfiniteScroll] = useInfiniteScroll({
    loading: false,
    hasNextPage: pokeState.next !== "",
    onLoadMore: async () => {
      const result = await AxiosApi(pokeState.next);
      console.log(result);
      setPokeState({
        ...pokeState,
        next: result.next,
        results: [...pokeState.results, ...result.results],
      });
    },
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: false,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: "0px 0px 400px 0px",
  });
  useEffect(() => {
    //ustEffectfh
    (async () => {
      const result = await AxiosApi("https://pokeapi.co/api/v2/pokemon");

      setPokeState({
        count: result.count,
        next: result.next,
        results: result.results,
      });
    })();
  }, []);
  return (
    <div>
      <List>
        {pokeState.results.map((item) => {
          return (
            <Link to={`/${item.name}`} key={item.name}>
              <PokeCard key={item.name} name={item.name} url={item.url} />
            </Link>
          );
        })}
      </List>
      <Footer>
        <Loading ref={fokeInfiniteScroll}>Loading....</Loading>
      </Footer>
    </div>
  );
}

export default PokeBoard;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Footer = styled.div``;

const Loading = styled.div`
  dispaly: flex;
  justify-content: center;
`;
