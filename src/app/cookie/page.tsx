import { cookies } from "next/headers";
import { SearchResultList } from "../_components/SearchResultList";
import { SearchFormCookie } from "./_components/SearchFormCookie";

export default function Page() {
  const cookieStore = cookies();
  const title = decodeURIComponent(cookieStore.get("title")?.value ?? "");

  return (
    <>
      <SearchFormCookie />
      <SearchResultList title={title} />
    </>
  );
}
