import { PokemonType } from "./Filter";
import { cookies } from "next/headers";

type Props = {
  pokemonType: PokemonType;
};
export default async function List({ pokemonType: pokemonType }: Props) {
  const cookieStore = cookies();
  const cookiePokemoType = cookieStore.get("pokemonType");
  console.log("cookiePokemoType", cookiePokemoType?.value);

  const data = await (
    await fetch(`https://pokeapi.co/api/v2/type/${cookiePokemoType?.value}`)
  ).json();
  console.group("List.tsx");
  console.log(pokemonType);

  const pokemons = data.pokemon.slice(0, 20).map((elm: any) => {
    return { name: elm.pokemon.name, url: elm.pokemon.url };
  });

  return (
    <div>
      {pokemons.map((pokemon: any) => {
        return (
          <li className="todo-item" key={pokemon.name}>
            <span className="todo-item__text">{pokemon.name}</span>
          </li>
        );
      })}
    </div>
  );
}
