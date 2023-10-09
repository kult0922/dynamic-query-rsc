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
  const pokemonTypes: PokemonType[] = [
    "fire",
    "water",
    "grass",
    "electric",
    "normal",
    "bug",
    "poison",
    "ground",
    "fairy",
    "fighting",
    "psychic",
    "rock",
    "ghost",
    "ice",
    "dragon",
    "dark",
    "steel",
    "flying",
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
    <div>
      {pokemonTypes.map((pokemonType) => {
        return (
          <span key={pokemonType}>
            <input
              onChange={() => changePokemoType(pokemonType)}
              type="checkbox"
              checked={selectedPokemonType === pokemonType}
            />
            <span className="mr-3 ml-1">{pokemonType}</span>
          </span>
        );
      })}
    </div>
  );
};

export const Filter = FilterComponent;
