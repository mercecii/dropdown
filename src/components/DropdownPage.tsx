import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

const listUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

const DropdownPage = () => {
  console.log("rendering DropdownPage . . .");
  const [pokeList, setPokeList] = useState<{ name: string; url: string }[]>([]);
  const [abilityNames, setAbilityNames] = useState<string[]>([]);
  const [cache, setCache] = useState<Record<string, string[]>>({});

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
    const { results } = (await getResponse(listUrl)) as { results: [] };
    setPokeList(results);
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

export default DropdownPage;
