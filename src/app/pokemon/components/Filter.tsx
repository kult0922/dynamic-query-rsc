"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export type PokemonType =
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "normal"
  | "bug"
  | "poison"
  | "ground"
  | "fairy"
  | "fighting"
  | "psychic"
  | "rock"
  | "ghost"
  | "ice"
  | "dragon"
  | "dark"
  | "steel"
  | "flying";

const FilterComponent: React.FC = () => {
  const router = useRouter();
  const pokemonTypes: { value: PokemonType; name: string }[] = [
    { value: "fire", name: "ほのお" },
    { value: "water", name: "みず" },
    { value: "grass", name: "くさ" },
    { value: "electric", name: "でんき" },
    { value: "normal", name: "ノーマル" },
    { value: "bug", name: "むし" },
    { value: "poison", name: "どく" },
    { value: "ground", name: "じめん" },
    { value: "fairy", name: "フェアリー" },
    { value: "fighting", name: "かくとう" },
    { value: "psychic", name: "エスパー" },
    { value: "rock", name: "いわ" },
    { value: "ghost", name: "ゴースト" },
    { value: "ice", name: "こおり" },
    { value: "dragon", name: "ドラゴン" },
    { value: "dark", name: "あく" },
    { value: "steel", name: "はがね" },
    { value: "flying", name: "ひこう" },
  ];
  const [selectedPokemonType, setSelectedPokemonType] =
    useState<PokemonType>("fire");

  const changePokemoType = (pokemonType: PokemonType) => {
    console.log("changePokemoType", pokemonType);
    document.cookie = `pokemonType=${pokemonType}`;
    router.refresh();
    setSelectedPokemonType(pokemonType);
  };
  console.log("Filter dendrer");

  return (
    <div className="flex flex-wrap">
      {pokemonTypes.map((pokemonType) => {
        return (
          <div className="w-[110px]" key={pokemonType.value}>
            <input
              onChange={() => changePokemoType(pokemonType.value)}
              type="checkbox"
              checked={selectedPokemonType === pokemonType.value}
            />
            <span className="mr-3 ml-1">{pokemonType.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export const Filter = FilterComponent;
