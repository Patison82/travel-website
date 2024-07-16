import Carousel from "@/components/Carousel";
import Parallax from "@/components/Main";
import SearchForm from "@/components/SearchForm";
import Icons from "@/components/Icons";

export default function Home() {
  return (
    <>
      <main >
        <Parallax />
        <SearchForm />
        <Carousel />
        <Icons />
      </main>
    </>
  );
}
