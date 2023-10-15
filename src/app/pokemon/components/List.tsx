import { Slabo_13px } from "next/font/google";
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
    const pokemonId = elm.pokemon.url.split("/").slice(-2)[0];
    console.log("pokemonId", pokemonId);
    return {
      name: elm.pokemon.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
    };
  });

  return (
    <div className="flex flex-wrap">
      {pokemons.map((pokemon: any) => {
        return (
          <div key={pokemon.name} className="border-2 rounded m-1">
            <img src={pokemon.imageUrl} alt={pokemon.name} />
          </div>
        );
      })}
    </div>
  );
}
