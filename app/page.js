import Parallax from "@/components/Main";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <Parallax />
        <div className="w-full">
          <p>test space</p>
          <p>test space</p>
          <p>test space</p>
          <p>test space</p>
        </div>
        <SearchForm />
      </main>
    </>
  );
}
