type Props = {
  title?: string;
};

const Empty = () => {
  return <div>Empty</div>;
};

export const SearchResultList = async ({ title }: Props) => {
  if (!title) {
    return Empty();
  }
  const data = await (
    await fetch(
      `https://ci.nii.ac.jp/books/opensearch/search?title=${title}&format=json`
    )
  ).json();
  const books: any[] = data["@graph"][0].items;

  if (!books) {
    return Empty();
  }

  return (
    <>
      {books.map((book) => {
        return (
          <div key={book["@id"]} className="border-2 rounded m-2">
            <div className="text-lg">📗 {book["title"]}</div>
            Auther: {book["dc:creator"]}
          </div>
        );
      })}
    </>
  );
};
