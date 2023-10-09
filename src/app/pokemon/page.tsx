import { Filter, PokemonType } from "./components/Filter";
import List from "./components/List";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log("Page.tsx render");
  console.log("params", params);
  return (
    <div>
      <Filter />
      <List pokemonType={"fire" as PokemonType} />
    </div>
  );
}
