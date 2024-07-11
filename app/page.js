import Carousel from "@/components/Carousel";
import Parallax from "@/components/Main";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <>

    
      <main>
        <Parallax />
        <div className="w-full">
          <p>test space</p>
          <p>test space</p>
          <p>test space</p>
          <p>test space</p>
        </div>

        <SearchForm />
        <Carousel />
      </main>
    </>
  );
}
