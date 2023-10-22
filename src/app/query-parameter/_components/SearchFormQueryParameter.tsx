"use client";
import { SearchForm } from "@/app/_components/SearchForm";
import { useRouter } from "next/navigation";

export const SearchFormQueryParameter = () => {
  const router = useRouter();
  const onSearch = (title: string) => {
    const params = new URLSearchParams([["title", title]]);
    router.replace(`/query-parameter?${params.toString()}`);
  };

  return <SearchForm onSearch={onSearch} />;
};
