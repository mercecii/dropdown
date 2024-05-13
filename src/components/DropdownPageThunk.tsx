import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokeList, selectPokeList } from "../redux/slices/counterSlice";
import { UnknownAction } from "@reduxjs/toolkit";

// const listUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

const DropdownPageThunk = () => {
  console.log("rendering DropdownPageThunk . . .");
  const pokeList = useSelector(selectPokeList);
  const [abilityNames, setAbilityNames] = useState<string[]>([]);
  const [cache, setCache] = useState<Record<string, string[]>>({});
  const dispatch = useDispatch();

  const getResponse = async <T = undefined,>(url: string): Promise<T> => {
    const res = await fetch(url);
    const response = await res.json();
    return response as T;
  };

  const getPokemonAbilities = async (
    pokeDetailsUrl: string
  ): Promise<string[]> => {
    if (cache[pokeDetailsUrl]) return cache[pokeDetailsUrl];
    const res = await getResponse<{ abilities: [] }>(pokeDetailsUrl);
    const abilities: string[] = generateAbilityNames(res.abilities);
    setCache({ ...cache, [pokeDetailsUrl]: abilities });

    return abilities;
  };

  const getPokeList = async () => {
    dispatch(fetchPokeList() as unknown as UnknownAction);
  };

  const generateAbilityNames = (
    abilities: { ability: { name: string } }[]
  ): string[] => abilities.map((el) => el.ability.name);

  useEffect(() => {
    getPokeList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <ErrorBoundary> */}
      <Dropdown
        options={pokeList.map((el) => ({ label: el.name, value: el.url }))}
        onChangeHandler={async (ev) => {
          console.log("event.target.value=", ev.target.value);
          const abilities = await getPokemonAbilities(ev.target.value);
          setAbilityNames(abilities);
        }}
      />
      <div>
        Details:{" "}
        {abilityNames.map((el) => (
          <li>{el}</li>
        ))}
      </div>
      {/* </ErrorBoundary> */}
    </>
  );
};

export default DropdownPageThunk;
