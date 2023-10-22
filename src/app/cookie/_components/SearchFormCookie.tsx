"use client";
import { SearchForm } from "@/app/_components/SearchForm";
import { useRouter } from "next/navigation";

export const SearchFormCookie = () => {
  const router = useRouter();
  const onSearch = (title: string) => {
    document.cookie = `title=${encodeURIComponent(title)}`;
    router.refresh();
  };

  return <SearchForm onSearch={onSearch} />;
};
