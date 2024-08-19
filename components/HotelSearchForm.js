"use client";
import GifBackground from "./GifBackground";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const HotelSearchForm = () => {
  const { t } = useTranslation();
  return (
    <div
      className="inset-0 z-0 bg-cover bg-center h-full w-full py-4 px-4"
      style={{ backgroundImage: "url('/background1.gif')" }}
    >
      <div className="bg-gradient-to-tr from-tertiary to-secondaryAccent p-10 rounded-badge max-w-6xl mx-auto mt-8 sm:mb-10 sm:bottom-0 sm:left-0 sm:right-0 z-40">
        {/* Hotel Booking Section */}
        <h3 className="text-3xl font-semibold mb-6 text-primary text-center sm:text-3xl">
          {t("hotelform_booking")}
        </h3>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Check-in Date */}
          <div className="flex flex-col sm:w-1/4 w-full">
            <label className="font-semibold mb-2 text-gray-800">
              {t("hotelform_checkin")}
            </label>
            <input
              type="date"
              lang="en"
              className="p-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 w-full"
            />
          </div>

          {/* Check-out Date */}
          <div className="flex flex-col sm:w-1/4 w-full">
            <label className="font-semibold mb-2 text-gray-800">
              {t("hotelform_checkout")}
            </label>
            <input
              type="date"
              lang="en"
              className="p-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 w-full"
            />
          </div>

          {/* Number of Guests */}
          <div className="flex flex-col sm:w-1/6 w-full">
            <label className="font-semibold mb-2  text-gray-800">
              {t("hotelform_guests")}
            </label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="p-2  border border-primary rounded-lg focus:outline-none focus:ring-3 focus:ring-primary transition duration-300 w-full"
            />
          </div>

          {/* Hotel Class Selection */}
          <div className="flex flex-col sm:w-1/6 w-full">
            <label className="font-semibold mb-2  text-gray-800">
              {t("hotelform_class")}
            </label>
            <select className="p-2.5 border  border-primary rounded-lg focus:outline-none focus:ring-3 focus:ring-primary transition duration-300 w-full">
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe</option>
              <option value="suite">Suite</option>
            </select>
          </div>
        </div>

        {/* Search Button Section */}
        <div className="flex justify-center mt-6 relative">
          <Link href="/hotels">
            <button className="px-[5rem] py-3 text-lg bg-primary text-black font-semibold rounded-lg hover:bg-tertiary transition duration-300 shadow-lg">
              {t("hotelform_search")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchForm;
