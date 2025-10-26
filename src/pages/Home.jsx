import { SearchForm } from "../components/SearchForm";

export function Home() {
  return (
    <div className="font-dm-sans mt-[30px]">
      <h1 className="text-3xl md:text-5xl text-center text-n-0 font-bold">
        How's the sky looking today?
      </h1>
      <SearchForm />
    </div>
  );
}
