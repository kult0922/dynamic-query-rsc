"use client";
import React, { useState } from "react";

type Props = {
  onSearch: (title: string) => void;
};

export const SearchForm = ({ onSearch }: Props) => {
  const [title, setTitle] = useState("");

  return (
    <div className="">
      <div className="flex flex-wrap m-1">
        <div className="mr-1">
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-300 p-2 w-64 rounded-md"
          />
        </div>
        <button
          onClick={() => {
            onSearch(title);
          }}
          className="bg-green-500 text-white p-2 pl-4 pr-4 rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};
