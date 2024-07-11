import Parallax from "@/components/Main";
import SearchForm from "@/components/SearchForm";
import Icons from "@/components/Icons";

export default function Home() {
  return (
    <>
      <main >
        <Parallax />
        <div className="w-full">
          <p>test space</p>
          <p>test space</p>
          <p>test space</p>
          <p>test space</p>
        </div>

        <SearchForm />
        <Icons />
      </main>
    </>
  );
}
