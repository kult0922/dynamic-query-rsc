import { cookies } from "next/headers";
import { SearchResultList } from "../_components/SearchResultList";
import { SearchFormQueryParameter } from "./_components/SearchFormQueryParameter";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const title = searchParams["title"];

  return (
    <>
      <SearchFormQueryParameter />
      <SearchResultList title={title} />
    </>
  );
}
