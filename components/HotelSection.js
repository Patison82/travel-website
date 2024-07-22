export default function HotelSection() {
  return (
    <div
      className="container h-72 rounded-xl flex items-center justify-center bg-secondaryAccent m-auto mt-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/glasses.jpg')" }}
    >
      <div className="box ">
        <h1 className="font-bold text-3xl lg:text-5xl drop-shadow-lg">
          LET'S TAKE A TRIP TOGETHER
        </h1>
        <p className="font-bold text-2xl lg:text-3xl mt-5">
          From flights to hotels, we bring everything and everyone together in
          one place.
        </p>
        <button className="z-40 font-bold text-3xl bg-gradient-to-tr from-primary to-secondary p-3 lg:w-1/10 w-1/10 rounded-2xl mt-10">
          <a href="hotels">Book hotel now</a>
        </button>
      </div>
    </div>
  );
}
