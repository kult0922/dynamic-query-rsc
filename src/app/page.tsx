import Link from "next/link";

export default function Home() {
  return (
    <div className="m-4">
      <div className="m-2">
        <Link href="/cookie" className="underline">
          1. Cookie implementation
        </Link>
      </div>
      <div className="m-2">
        <Link href="/query-parameter" className="underline">
          2. Query parameter implementation
        </Link>
      </div>
    </div>
  );
}
