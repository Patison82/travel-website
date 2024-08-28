import Carousel from "@/components/Carousel";
import Parallax from "@/components/Main";
import FlightSearchForm from "@/components/FlightSearchForm";
import HotelSearchForm from "@/components/HotelSearchForm";
import Icons from "@/components/Icons";
import HotelSection from "@/components/HotelSection";

export default function Home() {
  return (
    <>
      <main className="bg-primary">
        <Parallax />
        <FlightSearchForm />
        <Carousel />
        <HotelSearchForm />
        <HotelSection />
        <Icons />
      </main>
    </>
  );
}
