import Carousel from "@/components/Carousel";
import Parallax from "@/components/Main";
import FlightSearchForm from "@/components/FlightSearchForm";
import HotelSearchForm from "@/components/HotelSearchForm";
import Icons from "@/components/Icons";
 




export default function Home() {
  return (
    <>
      <main >
        <Parallax />
        <FlightSearchForm />
        <Carousel />
        <HotelSearchForm />
        <Icons />
      </main>
    </>
  );
}
